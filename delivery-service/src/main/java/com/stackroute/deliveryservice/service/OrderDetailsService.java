package com.stackroute.deliveryservice.service;

import com.stackroute.deliveryservice.domain.*;
import com.stackroute.deliveryservice.exception.DeliveryGuyAlreadyAssignedException;
import com.stackroute.deliveryservice.exception.OrderAlreadyExitsException;
import com.stackroute.deliveryservice.exception.OrderDeliveryDoesNotExitsException;
import com.stackroute.deliveryservice.exception.OrderDoesNotExitsException;

import java.util.List;
import java.util.Optional;

public interface OrderDetailsService {
    public OrderDetails setOrder(OrderDetails orderDetails) ;
    public OrderDetails assignDeliveryGuy(List<DeliveryGuyDistanceTime> deliveryGuyDistanceTimes, String orderId) ;
    public DeliveryGuyDistanceTime deliveryDistanceMatrix(List<DeliveryGuyDistanceTime> deliveryGuyDistanceTime);
    public OrderDetails getOrder(String username) ;
    public OrderDetails getOrderDelivery(String deliveryUsername) ;
    public OrderDetails deleteOrder(OrderDetails orderDetails) ;

}
