package com.stackroute.recommendationservice.service;

import com.stackroute.recommendationservice.domain.Recipe;
import com.stackroute.recommendationservice.repository.RecommendationQueryRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.HashMap;

@Service
public class RecommendationQueryServiceImpl implements RecommendationQueryService {

    private static final Logger LOGGER=LoggerFactory.getLogger(RecommendationQueryServiceImpl.class);


    private RecommendationQueryRepository recommendationQueryRepository;

    @Autowired
    public RecommendationQueryServiceImpl(RecommendationQueryRepository recommendationQueryRepository) {
        this.recommendationQueryRepository = recommendationQueryRepository;
    }

    //get recommended recipes by cuisine
    @Override
    public List<Recipe> getRecommendedRecipesByCuisine(String username) {
        return recommendationQueryRepository.getRecommendedRecipeByCuisine(username);
    }

    //get recommended recipes by  liked or tried
    @Override
    public List<Recipe> getRecommendedRecipesByLikedOrTried(String username) {
        return recommendationQueryRepository.getRecommendedRecipeByLikedOrTried(username);
    }

    //get recipes by the name of ingredients
    @Override
    public List<Recipe> getRecommendedRecipesByIngredients(String ingredientList) {
        String[] ingredientsRegional=ingredientList.split("_");
        LOGGER.info(ingredientsRegional[0]);//list of ingredients
        List<String> ingredients=recommendationQueryRepository.getIngredientsInEnglish(ingredientsRegional);
        return  recommendationQueryRepository.getRecipesByIngredients(ingredients);
    }


    //get the ingredients as suggestion while publishing
    @Override
    public List<String> getIngredientAsSuggestion(String recipeNameCuisineCourse) {
        String[] recipeNameWithCuisineCourse = recipeNameCuisineCourse.split("_");
        String recipeName=recipeNameWithCuisineCourse[0];
        String cuisine=recipeNameWithCuisineCourse[1];
        String course=recipeNameWithCuisineCourse[2];
        List<String> ingredients=recommendationQueryRepository.getIngredientsByRecipe(recipeName);
        if(ingredients.isEmpty()) //if same recipe not found sreach by cuisine and course
        {
            return recommendationQueryRepository.getIngredientsByRecipeCuisineCourse(cuisine,course);
        }
        else
        {
            return ingredients;
        }
    }


    @Override
    public List<HashMap<Object,Object>> getIngredientsOrderByGroup(String id) {
        return recommendationQueryRepository.getIngredientsOrderByGroup(id);
    }


    //get the most used ingredients
    @Override
    public List<String> getMostUsedIngredients() {
        return recommendationQueryRepository.getMostUsedIngredients();
    }

    //get the trending recipes
    @Override
    public List<Recipe> getTrendingRecipes() {
        return recommendationQueryRepository.getTrendingRecipes();
    }

    //get all ingredients with quntity and unit and regional name
    @Override
    public List<HashMap<String,String>> getIng(String recipeNameUsername) {
        String[] listed=recipeNameUsername.split("_");
        LOGGER.info(listed[0]);//recipename
        LOGGER.info(listed[1]);//username is passed to get the region of the user
        return recommendationQueryRepository.getIng(listed[0],listed[1]);
    }

    //gethow many people tried the recipe
    @Override
    public List<Integer> getNumberOfTried(String recipeId) {
        return  recommendationQueryRepository.getNumberOfTried(recipeId);
    }


    //get latest recipes
    @Override
    public List<Recipe> getLatestRecipe() {
        return recommendationQueryRepository.getLatestRecipes();
    }

    //get popular recipes
    @Override
    public List<Recipe> getPopularRecipe() {
        return recommendationQueryRepository.getPopularRecipes();
    }

}
