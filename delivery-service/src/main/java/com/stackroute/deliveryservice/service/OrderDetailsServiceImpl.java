package com.stackroute.deliveryservice.service;

import com.stackroute.deliveryservice.domain.*;
import com.stackroute.deliveryservice.exception.OrderAlreadyExitsException;
import com.stackroute.deliveryservice.exception.OrderDeliveryDoesNotExitsException;
import com.stackroute.deliveryservice.exception.OrderDoesNotExitsException;
import com.stackroute.deliveryservice.repository.DeliveryAddressRepository;
import com.stackroute.deliveryservice.repository.DeliveryGuyDistanceTimeRepository;
import com.stackroute.deliveryservice.repository.DeliveryGuyRepository;
import com.stackroute.deliveryservice.repository.OrderDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class OrderDetailsServiceImpl implements OrderDetailsService {


    private OrderDetailsRepository orderDetailsRepository;


    private DeliveryAddressRepository deliveryAddressRepository;


    private DeliveryGuyRepository deliveryGuyRepository;


    private DeliveryGuyDistanceTimeRepository deliveryGuyDistanceTimeRepository;

    @Autowired
    public OrderDetailsServiceImpl(OrderDetailsRepository orderDetailsRepository, DeliveryGuyRepository deliveryGuyRepository, DeliveryAddressRepository deliveryAddressRepository, DeliveryGuyDistanceTimeRepository deliveryGuyDistanceTimeRepository){
        this.orderDetailsRepository = orderDetailsRepository;
        this.deliveryGuyRepository = deliveryGuyRepository;
        this.deliveryAddressRepository = deliveryAddressRepository;
        this.deliveryGuyDistanceTimeRepository = deliveryGuyDistanceTimeRepository;

    }


    @Override
    public OrderDetails setOrder(OrderDetails orderDetails)  {
        orderDetails.setStatus("queue");

        OrderDetails savedOrderDetails = orderDetailsRepository.save(orderDetails);



        return savedOrderDetails;
    }

    @Override
    public OrderDetails assignDeliveryGuy(List<DeliveryGuyDistanceTime> deliveryGuyDistanceTimes, String orderId) {

            if(orderDetailsRepository.existsById((orderId)))
            {
                OrderDetails obj = orderDetailsRepository.findByOrderId(orderId);
                OrderDetails currentOrder = orderDetailsRepository.findByOrderId(orderId);
                String orderId1 = currentOrder.getOrderId();
                String username = deliveryDistanceMatrix(deliveryGuyDistanceTimes).deliveryUsername;
                currentOrder.setDeliveryGuy(deliveryGuyRepository.findByDeliveryUsername(username));
                currentOrder.setDeliveryUsername(username);
                currentOrder.setStatus("queue");

                orderDetailsRepository.save(currentOrder);
                return currentOrder;

            }
            else
            {
                return null;
            }






    }

    @Override
    public DeliveryGuyDistanceTime deliveryDistanceMatrix(List<DeliveryGuyDistanceTime> deliveryGuyDistanceTime) {
//        int listLength = deliveryGuyDistanceTime.lastIndexOf(deliveryGuyDistanceTime);
//        double dist[] = new double[listLength];
//        double time[] = new double[listLength];
//        String duser[] = new String[listLength];
//        int i =0;
//        for(DeliveryGuyDistanceTime x : deliveryGuyDistanceTime){
//            dist[i] = x.distance;
//            time[i] = x.time;
//            duser[i] = x.deliveryUsername;
//        }

        Collections.sort(deliveryGuyDistanceTime, new DeliveryGuySortingComparator());

        ;

        Iterator iter = deliveryGuyDistanceTime.iterator();

        DeliveryGuyDistanceTime first = (DeliveryGuyDistanceTime) iter.next();


        return first;
    }

    @Override
    public OrderDetails getOrder(String username) {
        OrderDetails orderDetails = orderDetailsRepository.findByUsername(username);
        return orderDetails;
    }

    @Override
    public OrderDetails getOrderDelivery(String deliveryUsername)   {

        OrderDetails orderDetails = orderDetailsRepository.findByDeliveryUsername(deliveryUsername);


            return orderDetails;

       

    }

    @Override
    public OrderDetails deleteOrder(OrderDetails orderDetails)  {
        OrderDetails deletedOrderDetail = orderDetailsRepository.findByOrderId(orderDetails.getOrderId());

        orderDetailsRepository.deleteById(orderDetails.getOrderId());

        return deletedOrderDetail;
    }


}
