package com.stackroute.recommendationservice.service;


import com.stackroute.recommendationservice.domain.Recipe;

import java.util.List;
import java.util.HashMap;

public interface RecommendationQueryService {


    //recommendation by interested cuisine
    List<Recipe> getRecommendedRecipesByCuisine(String username);

    //recommendation by previous activities cuisine
    List<Recipe> getRecommendedRecipesByLikedOrTried(String username);

    //get recipes by ingredients
    List<Recipe> getRecommendedRecipesByIngredients(String username);


    List<String> getIngredientAsSuggestion(String recipeName);

    List<HashMap<Object,Object>> getIngredientsOrderByGroup(String id);



    List<String> getMostUsedIngredients();

    List<Recipe> getTrendingRecipes();


    //ingredients name in group with quantity
    List<HashMap<String,String>> getIng(String recipeNameUsername);

    //No of people tried a recipe
    List<Integer> getNumberOfTried(String  recipeId);


    //get latest recipes
    List<Recipe> getLatestRecipe();

    List<Recipe> getPopularRecipe();

}
