package com.stackroute.deliveryservice.exception;

public class DeliveryGuyListEmptyException extends Exception {

    String message;
    public DeliveryGuyListEmptyException(String message){
        super(message);
        this.message=message;
    }
}
