package com.stackroute.recommendationservice.repository;

import com.stackroute.recommendationservice.dto.OperationDTO;
import com.stackroute.recommendationservice.domain.*;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Repository
public interface RecommendationQueryRepository extends Neo4jRepository<OperationDTO,Integer> {

    //recommended recipes by user's interested cuisine
    @Query("match (n:User{username:{username}})-[r: interested_in]->(m:Cuisine) with m,n match (rec:Recipe{cuisine:m.name}) where not  (n)-[:published]->(rec)  with n,rec   where not  (n)-[:tried]->(rec) return rec order by rec.rating desc limit 15")
    List<Recipe> getRecommendedRecipeByCuisine(@Param("username") String username);

    //recommended recipes by  user's past activities liked  or tried
    @Query("match (user:User{username:{username}})-[:liked]->(recipe:Recipe) with recipe,user match(recipeCuisine:Recipe{cuisine:recipe.cuisine}) where not (user)-[:published]->(recipeCuisine) with user,recipeCuisine  where not (user)-[:tried]->(recipeCuisine) return recipeCuisine as r UNION  \n" +
            "match (user:User{username:{username}})-[:tried]->(recipeT:Recipe) with recipeT,user match(recipeCuisineT:Recipe{cuisine:recipeT.cuisine}) where not (user)-[:published]->(recipeCuisineT) with user,recipeCuisineT where not (user)-[:tried]->(recipeCuisineT) return recipeCuisineT as r \n" +
            "UNION \n" +
            "match (user:User{username:{username}})-[:liked]->(recipe:Recipe) with recipe,user match(recipeCourse:Recipe{course:recipe.course}) where not (user)-[:published]->(recipeCourse) with user,recipeCourse  where not (user)-[:tried]->(recipeCourse) return recipeCourse as r \n" +
            "UNION \n" +
            "match (user:User{username:{username}})-[:tried]->(recipeT:Recipe) with recipeT,user match(recipeCourseT:Recipe{course:recipeT.course})  where not (user)-[:published]->(recipeCourseT) with user,recipeCourseT where not (user)-[:tried]->(recipeCourseT) return recipeCourseT as r")
    List<Recipe> getRecommendedRecipeByLikedOrTried(@Param("username") String username);



    @Query("match (:Recipe{id:{id}})<-[u:used_in]-(i:IngredientName)-[:belongs_to]->(group) return i,u order by group")
    List<HashMap<Object, Object>> getIngredientsOrderByGroup(@Param("id") String id);


    //get the ingredients' name in english
    @Query("with {ingredients}  as ingredients unwind ingredients as ingr  match (i:IngredientName{name:ingr}) return i.name \n" +
            "Union\n" +
            "with {ingredients}  as ingredients unwind ingredients as ingr\n" +
            " match (:RegionalName{name:ingr})<-[:same_as]-(i:IngredientName) return i.name")
    List<String> getIngredientsInEnglish(@Param("ingredients") String[] ingredients);

    //search by ingredients
    @Query("with {ingredients} as ingredients unwind ingredients as ingr match (i:IngredientName{name:ingr})-[:used_in]->(recipe:Recipe) with ingredients,recipe,count(*) as c  where c =size(ingredients)   return recipe limit 12")
    List<Recipe> getRecipesByIngredients(@Param("ingredients") List<String> ingredients);

    //show ingredients name as suggestion when the recipe already exists
    @Query("match (r:Recipe{recipeName:{recipeName}})<-[k:used_in]-(s) return distinct s.name limit 15")
    List<String> getIngredientsByRecipe(@Param("recipeName") String recipeName);

    //show ingredients name as suggestion when the recipe doesn't exists
    @Query("match (r:Recipe{cuisine:{cuisine},course:{course}})<-[:used_in]-(s) with  s,count(s) as occurances return s.name order by occurances desc limit 15")
    List<String> getIngredientsByRecipeCuisineCourse(@Param("cuisine") String cuisine, @Param("course") String course);

    // ingredients which are used in most recipes
    @Query("match ()<-[r:used_in]-(i) with i,count(i) as occurances return i.name order by occurances desc limit 10")
    List<String> getMostUsedIngredients();

    // recipes tried and liked many times
    @Query("match (r:Recipe)<-[t:tried]-() with collect(r) as b match (k:Recipe)<-[l:liked]-() with b+collect(k) as total unwind total as sing with sing,count(sing) as occurances return sing order by occurances desc limit 15")
    List<Recipe> getTrendingRecipes();


    //get all the ingredients with regional name and quantity-unit
    @Query("match (r:Recipe{id:{id}})<-[u:used_in]-(ingredients) with u,collect(ingredients) as ingr   unwind ingr as i optional match(k:IngredientName{name:i.name})-[:same_as]->(r)-[:known_in]->(:Region)<-[:stays_in]-(:User{username:{username}}) with  i,r,k,u optional match (b:IngredientName{name:i.name})-[:belongs_to]->(l) return i.name+' ( '+u.quantity+' '+u.unit+' ) ' as ingredients,r.name  as regional order by l")
    List<HashMap<String, String>> getIng(@Param("id") String id, @Param("username") String username);


    //get how many people tried the recipe
    @Query("match (r:Recipe{id:{id}})<-[:tried]-() return count(r)")
    List<Integer> getNumberOfTried(@Param("id") String id);

    //get the latest recipes
    @Query("match (r:Recipe) return r order by r.timeStamp desc limit 15")
    List<Recipe> getLatestRecipes();

    //get popular recipes
    @Query("match (r:Recipe) return r order by r.rating*r.time desc limit 15")
    List<Recipe> getPopularRecipes();
}