package com.stackroute.userprofileservice.controller;

import com.stackroute.userprofileservice.domain.Recipe;
import com.stackroute.userprofileservice.domain.User;
import com.stackroute.userprofileservice.service.RabbitMQSender;
import com.stackroute.userprofileservice.service.UserService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api
@RestController
@RequestMapping("api/v1")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {

    @Autowired
    RabbitMQSender rabbitMQSender;

    private UserService userService;

    @Autowired
    @Qualifier("userserviceimpl")
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    ResponseEntity responseEntity;


    @GetMapping("user/{userName}")
    ResponseEntity<User> getUserByUserName(@PathVariable String userName) {

        User user = userService.getUserByUserName(userName);
        responseEntity = new ResponseEntity<User>(user, HttpStatus.OK);
        return responseEntity;
    }

    @PutMapping("user")
    ResponseEntity<User> updateUser(@RequestBody User user) {

        User updateduser = userService.updateuser(user);
        rabbitMQSender.sendUsertoRecommedationService(updateduser);
        responseEntity = new ResponseEntity<User>(updateduser, HttpStatus.OK);
        return responseEntity;
    }

    @GetMapping("userpublishedrecipe/{username}")
    ResponseEntity<User> getPublishedRecipeOfUser(@PathVariable String username) {
        List<Recipe> recipeList = userService.getUserByUserName(username).getRecipesPublished();
        responseEntity = new ResponseEntity<List<Recipe>>(recipeList, HttpStatus.OK);
        return responseEntity;
    }

    @GetMapping("userlikedrecipe/{username}")
    ResponseEntity<User> getlikedRecipeOfUser(@PathVariable String username) {

        List<Recipe> recipeList = userService.getUserByUserName(username).getRecipesLiked();
        responseEntity = new ResponseEntity<List<Recipe>>(recipeList, HttpStatus.OK);
        return responseEntity;
    }

    @GetMapping("usertriedrecipe/{username}")
    ResponseEntity<User> gettriedRecipeOfUser(@PathVariable String username) {

        List<Recipe> recipeList = userService.getUserByUserName(username).getRecipesTried();
        responseEntity = new ResponseEntity<List<Recipe>>(recipeList, HttpStatus.OK);
        return responseEntity;
    }

    @PostMapping("usertryrecipe/{username}")
    ResponseEntity<User> savetryrecipe(@PathVariable String username, @RequestBody Recipe recipe) {

        User updateduser = userService.savetryrecipe(username, recipe);
        responseEntity = new ResponseEntity<List<Recipe>>(updateduser.getRecipesTried(), HttpStatus.OK);
        return responseEntity;
    }

    @PostMapping("userlikerecipe/{username}")
    ResponseEntity<User> savelikerecipe(@PathVariable String username, @RequestBody Recipe recipe) {

        User updateduser = userService.savelikedrecipe(username, recipe);
        responseEntity = new ResponseEntity<List<Recipe>>(updateduser.getRecipesLiked(), HttpStatus.OK);
        return responseEntity;
    }


}
