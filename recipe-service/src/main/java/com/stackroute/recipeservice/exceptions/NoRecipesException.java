package com.stackroute.recipeservice.exceptions;

public class NoRecipesException extends Exception {
    String message;
  public   NoRecipesException(String message)
    {
        this.message=message;
    }
}
