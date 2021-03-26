package com.stackroute.deliveryservice.service;

import com.stackroute.deliveryservice.domain.Address;
import com.stackroute.deliveryservice.domain.DeliveryAddress;
import com.stackroute.deliveryservice.exception.DeliveryAddressAlreadyExistsException;
import com.stackroute.deliveryservice.exception.DeliveryAddressNotFoundException;
import com.stackroute.deliveryservice.repository.DeliveryAddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeliveryAddressServiceImpl implements DeliveryAddressService {

    // deliveryAddress repository initialized
    DeliveryAddressRepository deliveryAddressRepository;


    //constructor autowired
    @Autowired
    public DeliveryAddressServiceImpl(DeliveryAddressRepository deliveryAddressRepository){
        this.deliveryAddressRepository = deliveryAddressRepository;
    }

    //save delivery address for new user
    @Override
    public DeliveryAddress saveDeliveryAddress(DeliveryAddress deliveryAddress) {

        DeliveryAddress savedDeliveryAddress = deliveryAddressRepository.save(deliveryAddress);
        return savedDeliveryAddress;
    }

    //get delivery address for user using username
    @Override
    public DeliveryAddress getDeliveryAddress(String username) {

        DeliveryAddress getDeliveryAddress = deliveryAddressRepository.findByUsername(username);
        return getDeliveryAddress;
    }



    //add extra addresses to the delivery address
    @Override
    public DeliveryAddress addExtraAddress(Address address,String username) {
        DeliveryAddress deliveryAddress = deliveryAddressRepository.findByUsername(username);
         deliveryAddress.getAddresses().add(address);
         deliveryAddressRepository.save(deliveryAddress);
         return deliveryAddress;
    }

    //delete address from delivery address
    @Override
    public DeliveryAddress deleteAddress(String addressName, String username) {
        DeliveryAddress DaoDeliveryAddress = deliveryAddressRepository.findByUsername(username);
        return DaoDeliveryAddress;
    }


}
