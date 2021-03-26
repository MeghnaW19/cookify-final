package com.stackroute.recommendationservice.controller;

import com.stackroute.recommendationservice.domain.*;
import com.stackroute.recommendationservice.service.RecommendationQueryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.HashMap;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class RecommendationQueryController {


    RecommendationQueryService recommendationQueryService;

    /**
     * Constructor based Dependency injection to inject  RecommendationQueryService into controller
     */
    @Autowired
    public void setRecommendationQueryService(RecommendationQueryService recommendationQueryService) {
        this.recommendationQueryService = recommendationQueryService;
    }



    // get recipes belongs to his favourite cuisines for each user
    @GetMapping("/recommendedByCuisine/{username}")
    public ResponseEntity<?> recommendedByCuisine(@PathVariable("username") String username) {
        return new ResponseEntity<List<Recipe>>(recommendationQueryService.getRecommendedRecipesByCuisine(username), HttpStatus.OK);
    }

    //get recommended recipes almost same as his previous activities
    @GetMapping("/recommended/{username}")
    public ResponseEntity<?> recommendedByLikedOrTried(@PathVariable("username") String username) {
        return new ResponseEntity<List<Recipe>>(recommendationQueryService.getRecommendedRecipesByLikedOrTried(username), HttpStatus.OK);
    }

    // show recipes by ingredients
    @GetMapping("/recipes/{ingredients}")
    public ResponseEntity<?> getRecipesByIngredients(@PathVariable("ingredients") String ingredients) {
        return new ResponseEntity<List<Recipe>>(recommendationQueryService.getRecommendedRecipesByIngredients(ingredients), HttpStatus.OK);
    }

    //
    @GetMapping("allIngredients/{recipeNameUsername}")
    public ResponseEntity<?> getAllIngredients(@PathVariable("recipeNameUsername") String recipeNameUsername)
    {
        return new ResponseEntity<List<HashMap<String,String>>>(recommendationQueryService.getIng(recipeNameUsername),HttpStatus.OK);
    }

    @GetMapping("suggested/ingredients/{recipeName}")
    public ResponseEntity<?> getIngredientAsSuggestion(@PathVariable("recipeName") String recipeName) {
        return new ResponseEntity<List<String>>(recommendationQueryService.getIngredientAsSuggestion(recipeName), HttpStatus.OK);
    }

//    //get ingredients in group
//    @GetMapping("/ingredientsGrouped/{id}")
//    public ResponseEntity<?> getIngredientOrderByGroup(@PathVariable("id") String id) {
//        return new ResponseEntity<List<HashMap<Object, Object>>>(recommendationQueryService.getIngredientsOrderByGroup(id), HttpStatus.OK);
//    }
//

    //get trending recipes
    @GetMapping("/recipes/trending")
    public ResponseEntity<?> getTrendingRecipes()
    {
        return new ResponseEntity<List<Recipe>>(recommendationQueryService.getTrendingRecipes(),HttpStatus.OK);
    }


    //get latest recipes
    @GetMapping("/recipes/latest")
    public ResponseEntity<?> getLatestRecipes()
    {
        return new ResponseEntity<List<Recipe>>(recommendationQueryService.getLatestRecipe(),HttpStatus.OK);
    }

    //get popular recipes
    @GetMapping("/recipes/popular")
    public ResponseEntity<?> getPopularRecipes()
    {
        return new ResponseEntity<List<Recipe>>(recommendationQueryService.getPopularRecipe(),HttpStatus.OK);
    }

    //get most used ingredients
    @GetMapping("/ingredients/mostused")
    public ResponseEntity<?> getMostUsedIngredients()
    {
        return new ResponseEntity<List<String>>(recommendationQueryService.getMostUsedIngredients(),HttpStatus.OK);
    }

    //how many people tried this recipe
    @GetMapping("/numberOfTried/{recipeId}")
    public ResponseEntity<?> getNumberOfTried(@PathVariable("recipeId") String recipeId)
    {
        return new ResponseEntity<List<Integer>>(recommendationQueryService.getNumberOfTried(recipeId),HttpStatus.OK);
    }
}