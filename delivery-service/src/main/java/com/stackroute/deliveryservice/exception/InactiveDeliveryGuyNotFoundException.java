package com.stackroute.deliveryservice.exception;

public class InactiveDeliveryGuyNotFoundException extends Exception {
    String message;

    public InactiveDeliveryGuyNotFoundException(String message){
        super(message);
        this.message=message;
    }
}
