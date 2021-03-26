package com.stackroute.userprofileservice.service;

import com.stackroute.userprofileservice.domain.Recipe;
import com.stackroute.userprofileservice.domain.User;
import com.stackroute.userprofileservice.domain.UserOperationRecipe;
import com.stackroute.userprofileservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("userserviceimpl")
public class UserServiceImpl implements UserService {


    //this is user repository object through which we can perform CRUD operation
    private UserRepository userRepository;

    //this is rabbitmqsender object through which we can send our object to other rabbitmq reciever in other microservices
    @Autowired
    private RabbitMQSender rabbitMQSender;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    //this helps us to save the recipe in the user with the username
    @Override
    public User savetryrecipe(String username, Recipe recipe) {
        User existingUser = userRepository.findByUsername(username);
        List<Recipe> existingTriedRecipe = existingUser.getRecipesTried();


        int flag = 0;

        for (int i = 0; i < existingTriedRecipe.size(); i++) {
            if (existingTriedRecipe.get(i).getId().equals(recipe.getId())) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            existingTriedRecipe.add(recipe);
            existingUser.setRecipesTried(existingTriedRecipe);
            userRepository.save(existingUser);
            UserOperationRecipe userOperationRecipe = new UserOperationRecipe(username, recipe, "try");
            rabbitMQSender.sendOperationRecipetoRecommedationService(userOperationRecipe);
            return existingUser;

        } else {
            return existingUser;
        }
    }

    //this helps us to like the recipe in the user with the username
    @Override
    public User savelikedrecipe(String username, Recipe recipe) {

        User existingUser = userRepository.findByUsername(username);
        List<Recipe> existingLikedRecipe = existingUser.getRecipesLiked();

        int flag = 0;


        for (int i = 0; i < existingLikedRecipe.size(); i++) {
            if (existingLikedRecipe.get(i).getId().equals(recipe.getId())) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            existingLikedRecipe.add(recipe);
            existingUser.setRecipesLiked(existingLikedRecipe);
            userRepository.save(existingUser);
            UserOperationRecipe userOperationRecipe = new UserOperationRecipe(username, recipe, "like");
            rabbitMQSender.sendOperationRecipetoRecommedationService(userOperationRecipe);
            return existingUser;

        } else {
            return existingUser;
        }


    }

    @Override
    public void updaterating(String username, String recipeid, float ratingvalue) {
        User user = userRepository.findByUsername(username);
        List<Recipe> recipeList = user.getRecipesPublished();

        for(int i=0;i<recipeList.size();i++)
        {
            if(recipeList.get(i).getId().equals(recipeid))
            {
                recipeList.get(i).setRating(ratingvalue);
                break;
            }
        }
    }

    //this helps us to save the user in the user_profile_db database
    @Override
    public User saveuser(User user) {
        userRepository.save(user);
        return user;
    }

    //this helps us to get the user details with the username specified
    @Override
    public User getUserByUserName(String username) {
        return userRepository.findByUsername(username);
    }

    //this helps us to update the user in the user_profile_db database
    @Override
    public User updateuser(User user) {

        User existingUser = userRepository.findByUsername(user.getUsername());
        existingUser.setAge(user.getAge());
        existingUser.setAddress(user.getAddress());
        existingUser.setCity(user.getCity());
        existingUser.setState(user.getState());
        existingUser.setCountry(user.getCountry());
        existingUser.setImage(user.getImage());
        userRepository.save(existingUser);
        return existingUser;
    }


}
