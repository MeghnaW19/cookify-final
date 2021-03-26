package com.stackroute.userprofileserviceTest.service;


import com.stackroute.userprofileservice.domain.Recipe;
import com.stackroute.userprofileservice.domain.User;
import com.stackroute.userprofileservice.repository.UserRepository;
import com.stackroute.userprofileservice.service.UserServiceImpl;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.when;

public class UserServiceTest {
    User user;

    @Mock
    UserRepository userRepository;

    @InjectMocks
    UserServiceImpl userService;


    @Before
    public void setUp() {
        //Initialising the mock object
        MockitoAnnotations.initMocks(this);
        user = new User();
        user.setId("1");
        user.setUsername("barunsaraf1");
        user.setName("Barun Sarraf");
        user.setEmailId("barunsaraf1@gmail.com");
        user.setGender("male");
        user.setAge(22);
        user.setCity("Bangalore");
        user.setState("Karnataka");
        user.setCountry("India");
        user.setImage("imagepath");
        user.setAddress("tea pavilion");

        List<Recipe> recipeList = new ArrayList<Recipe>();
        Recipe recipe = new Recipe();
        recipe.setId("12");
        recipeList.add(recipe);
        user.setRecipesTried(recipeList);

    }

    @Test
    public void saveUserTestSuccess() {

        when(userRepository.save((User) any())).thenReturn(user);
        User savedUser = userService.saveuser(user);
        Assert.assertEquals(user, savedUser);

        //verify here verifies that userRepository save method is only called once
        verify(userRepository, times(1)).save(user);
    }

}