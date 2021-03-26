package com.stackroute.userprofileservice.service;

import com.stackroute.userprofileservice.domain.MessageUser;
import com.stackroute.userprofileservice.domain.Recipe;
import com.stackroute.userprofileservice.domain.User;
import com.stackroute.userprofileservice.domain.UserOperationRecipe;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import java.util.List;


public class RabbitMQReciever {


    private UserService userService;

    @Autowired
    RabbitMQSender rabbitMQSender;

    @Autowired
    @Qualifier("userserviceimpl")
    public void setUserService(UserService userService) {
        this.userService = userService;
    }


    @RabbitListener(queues = "user-details")
    public void receiveUser(MessageUser user) {

        User newuser = new User();

        newuser.setUsername(user.getUsername());
        newuser.setName(user.getName());
        newuser.setCity(user.getCity());
        newuser.setAge(user.getAge());
        newuser.setEmailId(user.getEmailId());
        newuser.setCountry(user.getCountry());
        newuser.setState(user.getState());
        newuser.setGender(user.getGender());
        newuser.setCuisines(user.getCuisines());
        userService.saveuser(newuser);
        User existinguser = userService.getUserByUserName(user.getUsername());
        existinguser.setId(user.getUsername());
        userService.saveuser(newuser);
        rabbitMQSender.sendUsertoRecommedationService(newuser);


    }

    @RabbitListener(queues = "publish-recipe")
    public void receiveRecipeFromRecipeService(Recipe recipe) {
        User user = userService.getUserByUserName(recipe.getPublishedBy());
        System.out.println("barun---------------------" + recipe);

        List<Recipe> publishedRecipeList = user.getRecipesPublished();
        publishedRecipeList.add(recipe);
        user.setRecipesPublished(publishedRecipeList);
        userService.saveuser(user);
        System.out.println("Received Recipe from recipe queue and added in published list of: " + recipe.getPublishedBy());
    }



//    @RabbitListener(queues = "operationrecipe")
//    public void receiveRecipeFrom(UserOperationRecipe userOperationRecipe)
//    {
//        User user= userService.getUserByUserName(userOperationRecipe.getUsername());
//
//        if(userOperationRecipe.getOperation().equals("like"))
//        {
//            List<Recipe> likedRecipeList= user.getRecipesLiked();
//            likedRecipeList.add(userOperationRecipe.getRecipe());
//            user.setRecipesLiked(likedRecipeList);
//            System.out.println("Received Recipe from operationrecipe queue and added in liked list of: "+userOperationRecipe.getUsername());
//        }
//        else if(userOperationRecipe.getOperation().equals("try"))
//        {
//            List<Recipe> triedRecipeList= user.getRecipesTried();
//            triedRecipeList.add(userOperationRecipe.getRecipe());
//            user.setRecipesLiked(triedRecipeList);
//            System.out.println("Received Recipe from operationrecipe queue and added in tried list of: "+userOperationRecipe.getUsername());
//        }
//        else{
//            System.out.println("check the operation value wheather its liked or tried");
//        }
//
//    }


}
