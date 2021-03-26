package com.stackroute.recommendationservice.exception;

public class RecipeNotFoundException extends Exception {
    private String message;

    public RecipeNotFoundException() {
    }

    public RecipeNotFoundException(String message) {
        this.message = message;
    }


}
