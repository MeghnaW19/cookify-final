package com.stackroute.deliveryservice.service;

import com.stackroute.deliveryservice.domain.DeliveryGuyDTL;
import com.stackroute.deliveryservice.domain.DeliveryGuyDistanceTime;
import com.stackroute.deliveryservice.repository.DeliveryAddressRepository;
import com.stackroute.deliveryservice.repository.DeliveryGuyDistanceTimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeliveryGuyDistanceTimeServiceImpl implements DeliveryGuyDistanceTimeService {


    private  DeliveryGuyDistanceTimeRepository deliveryGuyDistanceTimeRepository;

    @Autowired
    public DeliveryGuyDistanceTimeServiceImpl(DeliveryGuyDistanceTimeRepository deliveryGuyDistanceTimeRepository){
        this.deliveryGuyDistanceTimeRepository = deliveryGuyDistanceTimeRepository;
    }



    @Override
    public DeliveryGuyDTL saveDeliveryDistanceTime(DeliveryGuyDTL deliveryGuyDTL) {
        DeliveryGuyDTL savedDeliveryGuyDTL = deliveryGuyDistanceTimeRepository.save(deliveryGuyDTL);
        return savedDeliveryGuyDTL;
    }
}
