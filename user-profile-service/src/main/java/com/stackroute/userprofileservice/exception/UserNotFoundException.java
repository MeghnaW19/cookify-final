package com.stackroute.userprofileservice.exception;

public class UserNotFoundException extends Exception {
    @Override
    public String getMessage() {
        return message;
    }

    private String message;

    public UserNotFoundException() {

    }

    public UserNotFoundException(String message1) {
        super(message1);
        this.message = message1;
    }
}
