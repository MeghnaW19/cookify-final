package com.stackroute.deliveryservice.service;

import com.stackroute.deliveryservice.domain.DeliveryGuyDTL;
import com.stackroute.deliveryservice.domain.DeliveryGuyDistanceTime;

import java.util.List;

public interface DeliveryGuyDistanceTimeService {

    public DeliveryGuyDTL saveDeliveryDistanceTime(DeliveryGuyDTL deliveryGuyDTL);
}
