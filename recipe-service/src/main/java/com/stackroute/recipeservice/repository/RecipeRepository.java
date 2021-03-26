package com.stackroute.recipeservice.repository;

import com.stackroute.recipeservice.domain.Recipe;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.math.BigInteger;
import java.util.List;


public interface RecipeRepository extends MongoRepository<Recipe, String> {
//    List<Recipe> findAll(boolean contains);
}
