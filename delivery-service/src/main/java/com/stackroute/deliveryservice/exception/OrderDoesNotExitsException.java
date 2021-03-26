package com.stackroute.deliveryservice.exception;

public class OrderDoesNotExitsException extends Exception {
    String message;

    public OrderDoesNotExitsException(String message){
        super(message);
        this.message=message;
    }
}
