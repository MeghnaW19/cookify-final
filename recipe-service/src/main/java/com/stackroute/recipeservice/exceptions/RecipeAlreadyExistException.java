package com.stackroute.recipeservice.exceptions;



public class RecipeAlreadyExistException extends Exception{
    private String message;
    public RecipeAlreadyExistException(){}
    public RecipeAlreadyExistException(String message)
    {
        super(message);
        this.message=message;
    }
}
