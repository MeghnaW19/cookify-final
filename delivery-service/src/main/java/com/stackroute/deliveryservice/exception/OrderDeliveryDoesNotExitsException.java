package com.stackroute.deliveryservice.exception;

public class OrderDeliveryDoesNotExitsException extends Exception {
    String message;

    public OrderDeliveryDoesNotExitsException(String message){
        super(message);
        this.message=message;
    }

}
