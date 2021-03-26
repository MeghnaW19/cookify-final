package com.stackroute.deliveryservice.repository;

import com.stackroute.deliveryservice.domain.DeliveryGuyDTL;
import com.stackroute.deliveryservice.domain.DeliveryGuyDistanceTime;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DeliveryGuyDistanceTimeRepository extends MongoRepository<DeliveryGuyDTL, String> {
    DeliveryGuyDTL findByOrderId(String orderId);
}
