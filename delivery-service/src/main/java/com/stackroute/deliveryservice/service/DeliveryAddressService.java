package com.stackroute.deliveryservice.service;

import com.stackroute.deliveryservice.domain.Address;
import com.stackroute.deliveryservice.domain.DeliveryAddress;
import com.stackroute.deliveryservice.exception.AddressAlreadyExistsException;
import com.stackroute.deliveryservice.exception.AddressNotFoundException;
import com.stackroute.deliveryservice.exception.DeliveryAddressAlreadyExistsException;
import com.stackroute.deliveryservice.exception.DeliveryAddressNotFoundException;

import java.util.List;

public interface DeliveryAddressService {
    public DeliveryAddress saveDeliveryAddress(DeliveryAddress deliveryAddress);
    public DeliveryAddress getDeliveryAddress(String username);
    public DeliveryAddress addExtraAddress(Address address, String username) ;
    public DeliveryAddress deleteAddress(String addressName, String username);
}
