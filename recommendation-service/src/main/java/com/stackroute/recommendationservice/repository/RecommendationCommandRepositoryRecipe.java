package com.stackroute.recommendationservice.repository;

import com.stackroute.recommendationservice.domain.Recipe;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public   interface RecommendationCommandRepositoryRecipe extends Neo4jRepository<Recipe,String> {

    /**
     * methods on recipe
     */

    @Query("WITH {recipe} as props create (r:Recipe) set r.id=props.id set r.recipeName=props.recipeName  set r.publishedBy=props.publishedBy set r.cuisine=props.cuisine set r.course=props.course set r.servesFor=props.servesFor set r.cookingTime=props.cookingTime set r.recipeImage=props.recipeImage set r.rating=props.rating  set r.date=date() set r.timeStamp=timestamp() with r,props unwind props.ingredients as i with r,i,props  merge (k:IngredientName{name:i.name}) merge(k)-[:used_in{quantity:i.quantity,unit:i.unit}]->(r) with r,props  with r,props  unwind props.procedure as p with r,p unwind p.stages as stages with r,stages  merge(s:StageName{name:stages.stageName})  merge(s)-[:stage_of]->(r) with s,r merge (m:Stage) with s,m,r merge(s)-[:is_a]->(m) ")
    List<Recipe> createRecipe(@Param("recipe") Recipe recipe);

    @Query("MATCH (r:Recipe{id:{recipe}.id}),(u:User{username:{recipe}.publishedBy}) MERGE (u)-[:published]->(r) ")
    void createPublished(@Param("recipe") Recipe recipe);

    @Query("MATCH (r:Recipe{id:{recipe}.id}),(c:Course{name:r.course}) MERGE (r)-[:type_of]->(c)")
    void linkCourse(@Param("recipe") Recipe recipe);

    @Query("MATCH (r:Recipe{id:{id}}) set r.rating = {rating} return r")
    Recipe updateRating(@Param("id") String id,@Param("rating") float rating);

}
