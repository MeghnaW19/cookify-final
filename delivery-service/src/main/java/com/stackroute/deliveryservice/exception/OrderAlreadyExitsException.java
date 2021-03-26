package com.stackroute.deliveryservice.exception;

public class OrderAlreadyExitsException extends Exception {
    String message;

    public OrderAlreadyExitsException(String message){
        super(message);
        this.message=message;
    }
}
