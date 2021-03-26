package com.stackroute.recommendationservice.service;


import com.stackroute.recommendationservice.dto.OperationDTO;
import com.stackroute.recommendationservice.dto.RecipeDTO;
import com.stackroute.recommendationservice.exception.RecipeNotFoundException;
import com.stackroute.recommendationservice.exception.UserNotFoundException;
import com.stackroute.recommendationservice.domain.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
@Slf4j
public class RabbitMQListner {

    @Autowired
    private RecommendationCommandService recommendationCommandService;

    @RabbitListener(queues = "operation")
    public void recievedMessage(OperationDTO operationDTO) throws UserNotFoundException, RecipeNotFoundException {
        log.info("Recieved Message From RabbitMQ: " + operationDTO);
        RecipeDTO recipe=operationDTO.getRecipe();
        log.info(recipe.toString());
        Recipe recipe1=new Recipe(recipe.getId(),recipe.getRecipeName(),recipe.getServesFor(),recipe.getPublishedBy(),recipe.getCuisine(),recipe.getCourse(),recipe.getRecipeImage(),recipe.getCookingTime(),recipe.getRating());
        log.info(recipe1.toString());

        recommendationCommandService.createLikedOrTried(operationDTO,recipe1);
    }

    @RabbitListener(queues = "user-profile")
    public void recievedUserMessage(User user) {
        log.info("Recieved Message From RabbitMQ: " + user);

        recommendationCommandService.addUser(user);
    }

   @RabbitListener(queues = "recipe")
    public void receiveMessage(RecipeDTO recipe)  {

        log.info("Recieved Message From RabbitMQ: " + recipe);
        Recipe recipe1=new Recipe(recipe.getId(),recipe.getRecipeName(),recipe.getServesFor(),recipe.getPublishedBy(),recipe.getIngredients(),recipe.getProcedure(),recipe.getCuisine(),recipe.getCourse(),recipe.getRecipeImage(),recipe.getCookingTime(),recipe.getRating());
        recommendationCommandService.addRecipe(recipe1);
    }


    @RabbitListener(queues = "recommended-service")
    public void receiveMessageForRating(RecipeDTO recipe)  {

        log.info("Recieved Message From RabbitMQ: " + recipe);
        Recipe recipe1=new Recipe(recipe.getId(),recipe.getRecipeName(),recipe.getServesFor(),recipe.getPublishedBy(),recipe.getIngredients(),recipe.getProcedure(),recipe.getCuisine(),recipe.getCourse(),recipe.getRecipeImage(),recipe.getCookingTime(),recipe.getRating());
        log.info("Recieved Message From RabbitMQ: " + recipe1);

        recommendationCommandService.updateRating(recipe1);
//        recommendationCommandService.addRecipe(recipe1);
    }


}
