package com.stackroute.deliveryservice.service;

import com.stackroute.deliveryservice.domain.DeliveryGuy;
import com.stackroute.deliveryservice.exception.ActiveDeliveryGuyAlreadyExitsException;
import com.stackroute.deliveryservice.exception.DeliveryGuyListEmptyException;
import com.stackroute.deliveryservice.exception.InactiveDeliveryGuyNotFoundException;

import java.util.List;

public interface DeliveryGuyService {

    public DeliveryGuy saveActiveDeliveryGuy(DeliveryGuy deliveryGuy) ;
    public DeliveryGuy deleteInactiveDeliveryGuy(DeliveryGuy deliveryGuy) ;
    public List<DeliveryGuy> getAllActiveDeliveryGuy() ;
}
