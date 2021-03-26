package com.stackroute.deliveryservice.repository;

import com.stackroute.deliveryservice.domain.Address;
import com.stackroute.deliveryservice.domain.DeliveryAddress;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DeliveryAddressRepository extends MongoRepository<DeliveryAddress,String> {

    DeliveryAddress findByUsername(String username);
//    Address findByAddressName(String addressName);

}
