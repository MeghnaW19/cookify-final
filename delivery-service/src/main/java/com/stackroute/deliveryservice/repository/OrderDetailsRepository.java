package com.stackroute.deliveryservice.repository;

import com.stackroute.deliveryservice.domain.OrderDetails;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrderDetailsRepository extends MongoRepository<OrderDetails, String> {

    OrderDetails findByOrderId(String orderId);
    OrderDetails findByUsername(String username);
    OrderDetails findByDeliveryUsername(String deliveryUsername);
}
