package com.stackroute.deliveryservice.service;

import com.stackroute.deliveryservice.domain.DeliveryGuyDistanceTime;

import java.util.Comparator;

public class DeliveryGuySortingComparator implements Comparator<DeliveryGuyDistanceTime> {

    @Override
    public int compare( DeliveryGuyDistanceTime customer1, DeliveryGuyDistanceTime customer2) {

        // for comparison
        int timeCompare ;
        timeCompare = Double.compare(customer1.time,customer2.time);
        int distanceCompare ;
        distanceCompare = Double.compare(customer1.getDistance(),customer2.getDistance());

        // 2-level comparison using if-else block
        if (timeCompare == 0) {
            return ((distanceCompare == 0) ? timeCompare : distanceCompare);
        } else {
            return timeCompare;
        }
    }
}
