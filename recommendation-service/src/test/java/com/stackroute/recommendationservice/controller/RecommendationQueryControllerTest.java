package com.stackroute.recommendationservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.recommendationservice.domain.Ingredients;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.when;


import com.stackroute.recommendationservice.domain.Recipe;
import com.stackroute.recommendationservice.domain.User;
import com.stackroute.recommendationservice.service.RecommendationQueryService;

@RunWith(SpringRunner.class)
@WebMvcTest
public class RecommendationQueryControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @MockBean
    RabbitTemplate rabbitTemplate;

    private Recipe recipe;
    private Recipe recipe1;

    private User user;
    @MockBean
    private RecommendationQueryService recommendationQueryService;
    @InjectMocks
    private RecommendationQueryController recommendationQueryController;

    private List<Recipe> recipeList =new ArrayList<>();
    private List<User> userList;
    List<Ingredients> ingredients=new ArrayList<>();




    @Before
    public void setup() throws Exception {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(recommendationQueryController).build();
        user = new User();
        List<String> cuisines = new ArrayList<String>();
        cuisines.add("Indian");
        user.setId("abcd1234");
        user.setName("Antara");
        user.setAge(22);
        user.setCity("Chennai");
        user.setState("TamilNadu");
        user.setAddress("abcd lande");
        user.setCuisines(cuisines);
        user.setUsername("antara");
        user.setEmailId("a@gmail.com");
        user.setGender("Female");

//        userList.add(user);

        recipe = new Recipe();
        recipe.setId("abcdefgh1234");
        recipe.setRecipeName("Paneer Tikka");
        recipe.setCuisine("Indian");
        recipe.setCourse("Main Course");
        recipe.setCookingTime(30);
        recipe.setPublishedBy("antara");
        recipe.setServesFor(4);
        Ingredients ingredient1 = new Ingredients();
        ingredient1.setName("Salt");
        ingredient1.setQuantity(2);
        ingredient1.setUnit("tbs");


        Ingredients ingredient = new Ingredients();
        ingredient.setName("Onion");
        ingredient.setQuantity(50);
        ingredient.setUnit("gms");

        ingredients.add(ingredient1);
        ingredients.add(ingredient);
        recipe1 = new Recipe();
        recipe1.setId("abcdefgh1235");
        recipe1.setRecipeName("Paneer Butter Masala");
        recipe1.setCuisine("Indian");
        recipe1.setCourse("Main Course");
        recipe1.setCookingTime(30);
        recipe1.setPublishedBy("ants");
        recipe1.setServesFor(4);

        recipeList = new ArrayList();

        recipeList.add(recipe);
    }

//    @Test
//    public void getRecommendedRecipesByCuisineTest() throws Exception {
//        when(recommendationQueryService.getRecommendedRecipesByCuisine("antara")).thenReturn(recipeList);
//        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/recommendedByCuisine/antara")
//                .contentType(MediaType.APPLICATION_JSON).content(asJsonString(recipeList)))
//                .andExpect(MockMvcResultMatchers.status().isOk())
//                .andDo(MockMvcResultHandlers.print());
//    }


    @Test
    public void getRecommendedByLikedOrTried() throws Exception {
        when(recommendationQueryService.getRecommendedRecipesByCuisine("antara")).thenReturn(recipeList);
        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/recommended/antara")
                .contentType(MediaType.APPLICATION_JSON).content(asJsonString(recipeList)))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void getRecipesByIngredients() throws Exception {
        when(recommendationQueryService.getRecommendedRecipesByCuisine("antara")).thenReturn(recipeList);
        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/recommended/antara")
                .contentType(MediaType.APPLICATION_JSON).content(asJsonString(recipeList)))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void getIngredientAsSuggestion() throws Exception {
        when(recommendationQueryService.getRecommendedRecipesByCuisine("antara")).thenReturn(recipeList);
        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/suggested/ingredients/Paneer Tikka")
                .contentType(MediaType.APPLICATION_JSON).content(asJsonString(ingredients)))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }

//
//    @Test
//    public void getIngredientOrderByGroup() throws Exception {
//        when(recommendationQueryService.getIngredientsOrderByGroup("abcdefgh1234")).thenReturn(ingredients);
//        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/ingredientsGrouped/abcdefgh1234")
//                .contentType(MediaType.APPLICATION_JSON).content(asJsonString(ingredients)))
//                .andExpect(MockMvcResultMatchers.status().isOk())
//                .andDo(MockMvcResultHandlers.print());
//    }

    private static String asJsonString(final Object object) {
        try {
            return new ObjectMapper().writeValueAsString(object);
        } catch (Exception exception) {
            throw new RuntimeException(exception);
        }
    }

}
