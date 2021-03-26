package com.stackroute.deliveryservice.exception;

public class AddressAlreadyExistsException extends Exception {
    String message;
    public AddressAlreadyExistsException(String message){
        super(message);
        this.message=message;
    }

//    public AddressAlreadyExistsException(){
//
//    }
}
