package com.stackroute.deliveryservice.service;

import com.stackroute.deliveryservice.domain.DeliveryGuy;
import com.stackroute.deliveryservice.exception.ActiveDeliveryGuyAlreadyExitsException;
import com.stackroute.deliveryservice.exception.DeliveryGuyListEmptyException;
import com.stackroute.deliveryservice.exception.InactiveDeliveryGuyNotFoundException;
import com.stackroute.deliveryservice.repository.DeliveryGuyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeliveryGuyServiceImpl implements DeliveryGuyService {

    DeliveryGuyRepository deliveryGuyRepository;

    @Autowired
    public DeliveryGuyServiceImpl(DeliveryGuyRepository deliveryGuyRepository){
        this.deliveryGuyRepository = deliveryGuyRepository;
    }


    @Override
    public DeliveryGuy saveActiveDeliveryGuy(DeliveryGuy deliveryGuy) {

        DeliveryGuy savedDeliveryGuy = deliveryGuyRepository.save(deliveryGuy);
        return savedDeliveryGuy;
    }

    @Override
    public DeliveryGuy deleteInactiveDeliveryGuy(DeliveryGuy deliveryGuy)  {

        deliveryGuyRepository.deleteById(deliveryGuy.getDeliveryUsername());
        return deliveryGuy;
    }

    @Override
    public List<DeliveryGuy> getAllActiveDeliveryGuy()  {

        List<DeliveryGuy> listOfActiveDeliveryGuys = deliveryGuyRepository.findAll();
        return listOfActiveDeliveryGuys;
    }
}
