package com.stackroute.deliveryservice.repository;

import com.stackroute.deliveryservice.domain.DeliveryGuy;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DeliveryGuyRepository extends MongoRepository<DeliveryGuy,String> {

    DeliveryGuy findByDeliveryUsername(String deliveryUsername);

}
