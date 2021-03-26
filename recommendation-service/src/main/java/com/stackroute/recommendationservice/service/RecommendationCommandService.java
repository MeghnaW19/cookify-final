package com.stackroute.recommendationservice.service;


import com.stackroute.recommendationservice.exception.RecipeNotFoundException;
import com.stackroute.recommendationservice.exception.UserNotFoundException;
import com.stackroute.recommendationservice.dto.OperationDTO;
import com.stackroute.recommendationservice.domain.Recipe;
import com.stackroute.recommendationservice.domain.User;

import java.util.List;

public interface RecommendationCommandService {

    public List<User> addUser(User user) ;

    public List<Recipe> addRecipe(Recipe recipe);

    List<User> createLikedOrTried(OperationDTO operationDTO,Recipe recipe) throws UserNotFoundException, RecipeNotFoundException;

    Recipe updateRating(Recipe recipe);

}
