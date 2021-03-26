package com.stackroute.recommendationservice.service;

import com.stackroute.recommendationservice.domain.Ingredients;
import com.stackroute.recommendationservice.domain.Recipe;
import com.stackroute.recommendationservice.domain.User;
import com.stackroute.recommendationservice.repository.RecommendationQueryRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.when;
public class RecommendationQueryServiceTest {

    @Mock
    RecommendationQueryRepository recommendationQueryRepository;

    @InjectMocks
    RecommendationQueryServiceImpl recommendationQueryService;
//    List<Recipe> list = null;
    List<Recipe> list=new ArrayList<>();
    List<Ingredients> ingredients=new ArrayList<>();
    private User user;
    private Recipe recipe;

    @Before
    public void setUp() {
        //Initialising the mock object
        MockitoAnnotations.initMocks(this);
//        Recipe recipe = new Recipecipe();

        user =new User();
        List<String> cuisines=new ArrayList<String>();
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
        Ingredients ingredient1=new Ingredients();
        ingredient1.setName("Salt");
        ingredient1.setQuantity(2);
        ingredient1.setUnit("tbs");


        Ingredients ingredient=new Ingredients();
        ingredient.setName("Onion");
        ingredient.setQuantity(50);
        ingredient.setUnit("gms");

        ingredients.add(ingredient1);
        ingredients.add(ingredient);

        list.add(recipe);
    }

    @Test
    public void getRecommendedRecipeByCuisineTestSuccess()  {

        when(recommendationQueryRepository.getRecommendedRecipeByCuisine(user.getUsername())).thenReturn(list);
        List<Recipe> recommendedRecipesByCuisine=recommendationQueryService.getRecommendedRecipesByCuisine(user.getUsername());
        Assert.assertEquals(list, recommendedRecipesByCuisine);

        //verify here verifies that userRepository save method is only called once
        verify(recommendationQueryRepository, times(1)).getRecommendedRecipeByCuisine(user.getUsername());
    }


//    @Test
//    public void getRecipesByIngredientsTestSuccess()  {
//
//        String ingredientsList="Onion_Paneer";
//        String[] ingredients=ingredientsList.split("_");
//        when(recommendationQueryRepository.getRecipesByIngredients(ingredients)).thenReturn(list);
//        List<Recipe> recommendedRecipesByIngredients=recommendationQueryService.getRecommendedRecipesByIngredients(ingredientsList);
//        Assert.assertEquals(list, recommendedRecipesByIngredients);
//
//        //verify here verifies that userRepository save method is only called once
//        verify(recommendationQueryRepository, times(1)).getRecipesByIngredients(ingredients);
//    }

//
//    @Test
//    public void getIngredientAsPerRegionTestSuccess()  {
//
//        String ingredientsList="Onion_antara";
//        List<String > ingredientRegionalName=new ArrayList<>();
//        ingredientRegionalName.add("Vengyan");
//        String[] ingredients=ingredientsList.split("_");
//        when(recommendationQueryRepository.getIngredientAsPerRegion((ingredients[0]),ingredients[1])).thenReturn(ingredientRegionalName);
//        List<String> ingredientAsPerRegion=recommendationQueryService.getIngredientAsPerRegion(ingredientsList);
//        Assert.assertEquals(ingredientRegionalName, ingredientAsPerRegion);
//
//        //verify here verifies that userRepository save method is only called once
//        verify(recommendationQueryRepository, times(1)).getIngredientAsPerRegion(ingredients[0],ingredients[1]);
//    }
//


    @Test
    public void getIngredientsByRecipeTestSuccess()  {

        String recipeName="Paneer Tikka";
        String recipeNameCuisineCourse="Paneer Tikka_Indian_Main Course";
        List<String > ingredients = new ArrayList<>();
        ingredients.add("Onion");
        ingredients.add("Salt");
        ingredients.add("Paneer");
        when(recommendationQueryRepository.getIngredientsByRecipe((recipeName))).thenReturn(ingredients);
        List<String > ingredientAsSuggestion=recommendationQueryService.getIngredientAsSuggestion(recipeNameCuisineCourse);
        Assert.assertEquals(ingredients, ingredientAsSuggestion);

        //verify here verifies that userRepository save method is only called once
        verify(recommendationQueryRepository, times(1)).getIngredientsByRecipe(recipe.getRecipeName());
//        verify(recommendationQueryRepository,times(1)).getIngredientsByRecipeCuisineCourse("Indian","Main Course");
    }


    @Test
    public void getRecommendedRecipeByLikedOrTriedTestSuccess()  {

        when(recommendationQueryRepository.getRecommendedRecipeByLikedOrTried((user.getUsername()))).thenReturn(list);
        Collection<Recipe> recommendedRecipesByLikedOrTried=recommendationQueryService.getRecommendedRecipesByLikedOrTried(user.getUsername());
        Assert.assertEquals(list, recommendedRecipesByLikedOrTried);

        //verify here verifies that userRepository save method is only called once
        verify(recommendationQueryRepository, times(1)).getRecommendedRecipeByLikedOrTried(user.getUsername());
    }


}
