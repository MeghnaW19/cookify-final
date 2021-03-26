package com.stackroute.userprofileservice.exception;

public class RecipeNotPresentException extends Exception {

    @Override
    public String getMessage() {
        return message;
    }

    private String message;

    public RecipeNotPresentException() {

    }

    public RecipeNotPresentException(String message1) {
        super(message1);
        this.message = message1;
    }
}