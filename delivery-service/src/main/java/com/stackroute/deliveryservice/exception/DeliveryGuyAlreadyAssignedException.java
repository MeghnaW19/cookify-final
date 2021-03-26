package com.stackroute.deliveryservice.exception;

public class DeliveryGuyAlreadyAssignedException extends Exception {
    String message;

    public DeliveryGuyAlreadyAssignedException(String message){
        super(message);
        this.message=message;
    }
}
