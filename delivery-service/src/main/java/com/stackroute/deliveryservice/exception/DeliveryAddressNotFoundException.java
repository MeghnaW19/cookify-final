package com.stackroute.deliveryservice.exception;

public class DeliveryAddressNotFoundException extends Exception {
    String message;

    public DeliveryAddressNotFoundException(String message){
        super(message);
        this.message=message;
    }
}
