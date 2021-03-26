package com.stackroute.recipeservice.exceptions;

public class RecipeNotFoundException extends Exception {
    String message;
  public    RecipeNotFoundException (String message)
    {
        this.message=message;
    }
}
