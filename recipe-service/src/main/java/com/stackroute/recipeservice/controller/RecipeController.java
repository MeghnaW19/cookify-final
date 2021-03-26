package com.stackroute.recipeservice.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.stackroute.recipeservice.domain.Recipe;
import com.stackroute.recipeservice.domain.RecipeDTO;
import com.stackroute.recipeservice.exceptions.RecipeAlreadyExistException;
import com.stackroute.recipeservice.exceptions.RecipeNotFoundException;

import com.stackroute.recipeservice.service.RecipeService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.util.List;

@RestController
@RequestMapping(value = "api/v1")
@CrossOrigin(origins = "*", allowedHeaders = "*")

@Api(value="Recipe Management Service", description="Operations pertaining to recipe in Recipe Management System")
public class RecipeController {

//    private AmazonClient amazonClient;
    private RecipeService recipeService;
    private RabbitTemplate rabbitTemplate;

    @Autowired
    public RecipeController(RecipeService recipeService, RabbitTemplate rabbitTemplate) {
//        this.amazonClient = amazonClient;
        this.recipeService = recipeService;
        this.rabbitTemplate = rabbitTemplate;
    }

    /** This posts the new Recipe in the Recipe List **/
    @ApiOperation(value = "Add a recipe into the list of Recipes", response = ResponseEntity.class)
    @PostMapping("recipe")
    public ResponseEntity<?> saveRecipe(@RequestBody Recipe recipe) throws JsonProcessingException {
        ResponseEntity responseEntity;
        try {
            String queueName = "recipe";
            String exchange = "register.exchange";
            String routingkey = "recipe.key";
            String routingkey2 = "recipeuser.key";
            RecipeDTO recipe1 = new RecipeDTO();
            recipe1.id = recipe.getId();
            String bpp = recipe.getId();

            Recipe recipe2 = recipeService.saveRecipe(recipe);
            rabbitTemplate.convertAndSend(exchange, routingkey2, recipe);
            rabbitTemplate.convertAndSend(exchange, routingkey, recipe);

            responseEntity = new ResponseEntity<Recipe>(recipe2, HttpStatus.CREATED);
        } catch (RecipeAlreadyExistException e) {
            responseEntity = new ResponseEntity<String>(e.getMessage(), HttpStatus.CONFLICT);
        }
        return responseEntity;
    }

    /** This Gets the List of all Recipes **/
    @ApiOperation(value = "gets the list of Recipes", response = ResponseEntity.class)
    @GetMapping("recipes")
    public ResponseEntity<?> getAllRecipes() {
        return new ResponseEntity<List<Recipe>>(recipeService.getAllRecipes(), HttpStatus.OK);


    }

    /** This Delete a Recipe From the Recipe List **/
    @ApiOperation(value = "delete a recipe from the list of Recipes", response = ResponseEntity.class)
     @DeleteMapping("recipe/{id}")
     public ResponseEntity<?> deleteRecipe(@PathVariable("id") String id)
     {   ResponseEntity responseEntity;
         try{
             Recipe recipe=recipeService.deleteRecipe(id);
             return new ResponseEntity<Recipe>(recipe, HttpStatus.OK);
             }catch(RecipeNotFoundException ex){
             return new ResponseEntity(ex.getMessage(),HttpStatus.NOT_FOUND);
             }

     }
    /** This Updates a  Recipe in the Recipe List **/
    @ApiOperation(value = "updates a recipe from the list of Recipes", response = ResponseEntity.class)
     @PutMapping("recipe")
     public ResponseEntity<?> updateRecipe(@RequestBody Recipe recipe){
         ResponseEntity responseEntity;
         try{
            Recipe recipe1=recipeService.updateRecipe(recipe);

             String exchange="register.exchange";
             String routingkey3="recommendedService.key";
             String routingkey4="UserProfile.key";


             rabbitTemplate.convertAndSend(exchange,routingkey3,recipe1);
             rabbitTemplate.convertAndSend(exchange,routingkey4,recipe1);
             return new ResponseEntity<Recipe>(recipe1,HttpStatus.OK);
         }
         catch(RecipeNotFoundException ex)
         {
             return new ResponseEntity<String>(ex.getMessage(),HttpStatus.CONFLICT);
         }
     }
    /** This Gets the  Recipe  based on the name from the Recipe List **/
    @ApiOperation(value = "search a recipe from the list of Recipes", response = ResponseEntity.class)
     @GetMapping("recipes/{name}")
    public ResponseEntity<?> searchRecipe(@PathVariable("name") String name) throws RecipeNotFoundException {
        try {
            List<Recipe> retrievedRecipes = recipeService.searchRecipe(name);
            return new ResponseEntity<List<Recipe>>(retrievedRecipes, HttpStatus.OK);
            }catch(RecipeNotFoundException e) {
            return new ResponseEntity<String>("No Such Recipe", HttpStatus.NOT_FOUND);
        }


    }
    /** This Gets the  Recipe based on Id from the Recipe List **/
    @ApiOperation(value = "Get a recipe from the list of Recipes by Id", response = ResponseEntity.class)
    @GetMapping("recipedetail/{id}")
    public ResponseEntity<?> getRecipeById(@PathVariable("id") String id) {
        ResponseEntity responseEntity;
        try{
            Recipe retrievedRecipe= recipeService.getRecipeById(id);
            return new ResponseEntity<Recipe>(retrievedRecipe, HttpStatus.OK);
           }catch(RecipeNotFoundException e)
            {
            return new ResponseEntity<String>("No Such Recipe", HttpStatus.NOT_FOUND);
            }

    }

    @PostMapping("/uploadFile")
    public String uploadFile(@RequestPart(value = "file") MultipartFile file) {
        return this.recipeService.uploadFile(file);
    }

    @DeleteMapping("/deleteFile")
    public String deleteFile(@RequestPart(value = "url") String fileUrl) {
        return this.recipeService.deleteFileFromS3Bucket(fileUrl);
    }


}
