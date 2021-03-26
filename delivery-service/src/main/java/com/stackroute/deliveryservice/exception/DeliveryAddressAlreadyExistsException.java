package com.stackroute.deliveryservice.exception;

public class DeliveryAddressAlreadyExistsException extends Exception{
    String message;
    public DeliveryAddressAlreadyExistsException(String message){
        super(message);
        this.message=message;
    }
}
