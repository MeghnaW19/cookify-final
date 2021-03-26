package com.stackroute.recipeservice.service;

import com.stackroute.recipeservice.domain.Recipe;
import com.stackroute.recipeservice.exceptions.RecipeAlreadyExistException;
import com.stackroute.recipeservice.exceptions.RecipeNotFoundException;
import org.springframework.web.multipart.MultipartFile;


import java.util.List;

public interface RecipeService {
    public Recipe saveRecipe(Recipe recipe) throws RecipeAlreadyExistException;
    public List<Recipe> getAllRecipes() ;
    public Recipe deleteRecipe(String id) throws RecipeNotFoundException;
    public Recipe updateRecipe(Recipe recipe) throws RecipeNotFoundException;
    public Recipe getRecipeById(String id) throws RecipeNotFoundException;
    public List<Recipe> searchRecipe(String name) throws RecipeNotFoundException;
    public String uploadFile(MultipartFile multipartFile);
    public String deleteFileFromS3Bucket(String fileUrl);
}
