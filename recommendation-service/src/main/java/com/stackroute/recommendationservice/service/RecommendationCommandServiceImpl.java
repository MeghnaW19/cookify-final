package com.stackroute.recommendationservice.service;


import com.stackroute.recommendationservice.exception.RecipeNotFoundException;
import com.stackroute.recommendationservice.exception.UserNotFoundException;
import com.stackroute.recommendationservice.dto.OperationDTO;
import com.stackroute.recommendationservice.domain.Recipe;
import com.stackroute.recommendationservice.domain.User;
import com.stackroute.recommendationservice.repository.RecommendationCommandRepositoryUser;
import com.stackroute.recommendationservice.repository.RecommendationCommandRepositoryRecipe;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecommendationCommandServiceImpl implements RecommendationCommandService{

    private static final Logger LOGGER= LoggerFactory.getLogger(RecommendationQueryServiceImpl.class);


    private RecommendationCommandRepositoryUser recommendationCommandRepository;

    RecommendationCommandRepositoryRecipe recommendationCommandRepositoryRecipe;
    @Autowired
    public void setRecommendationCommandRepository(RecommendationCommandRepositoryUser recommendationCommandRepository) {
        this.recommendationCommandRepository = recommendationCommandRepository;
    }
    @Autowired
    public void setRecommendationCommandRepositoryRecipe(RecommendationCommandRepositoryRecipe recommendationCommandRepositoryRecipe) {
        this.recommendationCommandRepositoryRecipe = recommendationCommandRepositoryRecipe;
    }

    //creating user node
    @Override
    public List<User> addUser(User user){

        User findUser=recommendationCommandRepository.findUserByUsername(user.getUsername());
        LOGGER.info(findUser+"dd");
        if(findUser==null) {
            recommendationCommandRepository.createUser(user);
            recommendationCommandRepository.staysIn(user);
            return recommendationCommandRepository.interestedCuisine(user, user.getCuisines());
        }
        else {
            LOGGER.info(findUser+"inside update");
            return recommendationCommandRepository.updateUser(user);
        }

    }

    //creating recipe node
    @Override
    public List<Recipe> addRecipe(Recipe recipe) {


        List<Recipe>newRecipe=recommendationCommandRepositoryRecipe.createRecipe(recipe);
                 recommendationCommandRepositoryRecipe.linkCourse(recipe);
                 recommendationCommandRepositoryRecipe.createPublished(recipe);
        return newRecipe;

    }

    // creates the relationship between user and recipe when liked or cooked
    @Override
    public List<User> createLikedOrTried(OperationDTO operationDTO,Recipe recipe)   throws UserNotFoundException, RecipeNotFoundException {
        if(operationDTO.getOperation().equals("like"))
        {
           return recommendationCommandRepository.createLiked(operationDTO.getUsername(),recipe);
        }
        else if(operationDTO.getOperation().equals("try"))
        {
            return recommendationCommandRepository.createTried(operationDTO.getUsername(),recipe);
        }
        else
        {
            return recommendationCommandRepository.deleteLiked(operationDTO.getUsername(),recipe);
        }
    }

    //to update the rating of recipe
    @Override
    public Recipe updateRating(Recipe recipe) {
        String recipeId=recipe.getId();
        float rating=recipe.getRating();
        return recommendationCommandRepositoryRecipe.updateRating(recipeId,rating);
    }


}
