package com.stackroute.recipeservice.controller;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.recipeservice.domain.Recipe;
import com.stackroute.recipeservice.exceptions.RecipeAlreadyExistException;
import com.stackroute.recipeservice.exceptions.RecipeNotFoundException;
import com.stackroute.recipeservice.service.RecipeService;
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

import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@WebMvcTest
public class recipeControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    RabbitTemplate rabbitTemplate;
    private Recipe recipe;
    @MockBean
    private RecipeService recipeService;
    @InjectMocks
    private RecipeController recipeController;

    private List<Recipe> list = null;

    @Before
    public void setup() throws Exception {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(recipeController).build();
        recipe = new Recipe();
        recipe.setRecipeName("chicken");
        recipe.setCuisine("indian");
        recipe.setRating(4);
        recipe.setRatingCount(1);
        list = new ArrayList();

        list.add(recipe);
    }


    @Test
    public void saveRecipe() throws Exception {
        when(recipeService.saveRecipe(any())).thenReturn(recipe);
        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/recipe")
                .contentType(MediaType.APPLICATION_JSON).content(asJsonString(recipe)))
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void saveRecipeFailure() throws Exception {
        when(recipeService.saveRecipe(any())).thenThrow(RecipeAlreadyExistException.class);
        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/recipe")
                .contentType(MediaType.APPLICATION_JSON).content(asJsonString(recipe)))
                .andExpect(MockMvcResultMatchers.status().isConflict())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void getAllRecipes() throws Exception {
        when(recipeService.getAllRecipes()).thenReturn(list);
        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/recipes")
                .contentType(MediaType.APPLICATION_JSON).content(asJsonString(recipe)))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void deleteRecipe() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.delete("/api/v1/recipe/{id}", 5)
                .contentType(MediaType.APPLICATION_JSON).content(asJsonString(recipe)))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void deleteRecipeFailure() throws Exception {
        doThrow(RecipeNotFoundException.class).when(recipeService).deleteRecipe(any());
        mockMvc.perform(MockMvcRequestBuilders.delete("/api/v1/recipe/{id}", 0)
                .contentType(MediaType.APPLICATION_JSON).content(asJsonString(recipe)))
                .andExpect(MockMvcResultMatchers.status().isNotFound())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void updateRecipe() throws Exception {
        when(recipeService.updateRecipe(any())).thenReturn(recipe);
        mockMvc.perform(MockMvcRequestBuilders.put("/api/v1/recipe")
                .contentType(MediaType.APPLICATION_JSON).content(asJsonString(recipe)))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void updateRecipeFailure() throws Exception {
        when(recipeService.updateRecipe(recipe)).thenThrow(RecipeNotFoundException.class);
        mockMvc.perform(MockMvcRequestBuilders.put("/api/v1/recipe", 6)
                .contentType(MediaType.APPLICATION_JSON).content(asJsonString(recipe)))
                .andExpect(MockMvcResultMatchers.status().isConflict())
                .andDo(MockMvcResultHandlers.print());
    }


    private static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }


}
