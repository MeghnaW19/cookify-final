package com.stackroute.deliveryservice.exception;

public class AddressNotFoundException extends Exception {
    String message;
    public AddressNotFoundException(String message){
        super(message);
        this.message=message;
    }
}
