package com.stackroute.deliveryservice.exception;

public class ActiveDeliveryGuyAlreadyExitsException extends Exception {

    String message;

    public ActiveDeliveryGuyAlreadyExitsException(String message){
        super(message);
        this.message=message;
    }
}
