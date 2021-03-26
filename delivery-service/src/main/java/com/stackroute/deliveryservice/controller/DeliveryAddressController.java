package com.stackroute.deliveryservice.controller;


import com.stackroute.deliveryservice.domain.*;
import com.stackroute.deliveryservice.service.DeliveryAddressService;
import com.stackroute.deliveryservice.service.DeliveryGuyDistanceTimeService;
import com.stackroute.deliveryservice.service.DeliveryGuyService;
import com.stackroute.deliveryservice.service.OrderDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("api/v1")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class DeliveryAddressController {

    //Services declared
    private DeliveryAddressService deliveryAddressService;
    private OrderDetailsService orderDetailsService;
    private DeliveryGuyService deliveryGuyService;
    private DeliveryGuyDistanceTimeService deliveryGuyDistanceTimeService;
    private ResponseEntity responseEntity;

    //services initialized using autowired
    @Autowired
    public DeliveryAddressController(DeliveryAddressService deliveryAddressService, OrderDetailsService orderDetailsService,DeliveryGuyService deliveryGuyService,DeliveryGuyDistanceTimeService deliveryGuyDistanceTimeService){
        this.deliveryAddressService = deliveryAddressService;
        this.orderDetailsService = orderDetailsService;
        this.deliveryGuyService = deliveryGuyService;
        this.deliveryGuyDistanceTimeService = deliveryGuyDistanceTimeService;
    }



    //Saving address for first time user
    @PostMapping("ds")
    public ResponseEntity<?> saveDeliveryAddress(@RequestBody DeliveryAddress deliveryAddress){


            DeliveryAddress savedDel = deliveryAddressService.saveDeliveryAddress(deliveryAddress);
            responseEntity = new ResponseEntity<>(savedDel, HttpStatus.CREATED);


        return responseEntity;
    }


    //save order details when order given
    @PostMapping("od")
    public ResponseEntity<?> saveOrderDetails(@RequestBody OrderDetails orderDetails){


            OrderDetails savedOrder = orderDetailsService.setOrder(orderDetails);
            responseEntity = new ResponseEntity<OrderDetails>(savedOrder, HttpStatus.CREATED);


        return responseEntity;
    }

    //assigning the nearest delivery guy
    @PostMapping("ods")
    public ResponseEntity<?> assignDeliveryGuy(@RequestBody DeliveryGuyDTL deliveryGuyDTL){




            List<DeliveryGuyDistanceTime> deliveryGuyDistanceTimes = deliveryGuyDTL.getDeliveryGuyDistanceTime();
            String orderIdd = deliveryGuyDTL.getOrderId();
            OrderDetails assignedOrder = orderDetailsService.assignDeliveryGuy(deliveryGuyDistanceTimes, orderIdd);
            responseEntity = new ResponseEntity<OrderDetails>(assignedOrder, HttpStatus.OK);


        return responseEntity;

    }


    //save the online delivery guys
    @PostMapping("dg")
    public ResponseEntity<?> saveDeliveryGuys(@RequestBody DeliveryGuy deliveryGuy){


            DeliveryGuy savedDeliveryGuy = deliveryGuyService.saveActiveDeliveryGuy(deliveryGuy);
            responseEntity = new ResponseEntity<DeliveryGuy>(savedDeliveryGuy, HttpStatus.CREATED);

        return responseEntity;
    }


   //save the online delivery guy distance time obtained from bing API
    @PostMapping("ad")
    public ResponseEntity<?> saveDeliveryGuyDistanceTime(@RequestBody DeliveryGuyDTL deliveryGuyDTL){


            DeliveryGuyDTL savedDeliveryGuyDistanceTimes = deliveryGuyDistanceTimeService.saveDeliveryDistanceTime(deliveryGuyDTL);
            responseEntity = new ResponseEntity<DeliveryGuyDTL>(savedDeliveryGuyDistanceTimes, HttpStatus.CREATED);

        return responseEntity;
    }


    // get all addresses for a given user
    @GetMapping("ds/{username}")
    public ResponseEntity<?> getAllDeliveryAddress(@PathVariable("username") String username){


            responseEntity = new ResponseEntity<DeliveryAddress>(deliveryAddressService.getDeliveryAddress(username), HttpStatus.OK);

        return responseEntity;
    }

    //get order details for  user using username
    @GetMapping("od/{username}")
    public ResponseEntity<?> getOrderDetails(@PathVariable("username") String username){




            responseEntity = new ResponseEntity<OrderDetails>(orderDetailsService.getOrder(username), HttpStatus.OK);

        return responseEntity;
    }

    //get order details for delivery guy using delivery guy name
    @GetMapping("odg/{deliveryUsername}")
    public ResponseEntity<?> getOrderDetailsForDelivery(@PathVariable("deliveryUsername") String deliveryUsername){




            responseEntity = new ResponseEntity<OrderDetails>(orderDetailsService.getOrderDelivery(deliveryUsername), HttpStatus.OK);


        return responseEntity;
    }

    //get all online delivery guys to find there distance and time using bing API
    @GetMapping("dg")
    public ResponseEntity<?> getAllActiveDeliveryGuys(){


            responseEntity = new ResponseEntity<List<DeliveryGuy>>(deliveryGuyService.getAllActiveDeliveryGuy(), HttpStatus.OK);

        return responseEntity;
    }

    // add extra address to  user
    @PutMapping ("da/{username}")
    public  ResponseEntity<?> addExtraAddress(@RequestBody Address address, @PathVariable("username") String username){


            DeliveryAddress daoDeliveryAddress = deliveryAddressService.addExtraAddress(address, username);


            responseEntity = new ResponseEntity<DeliveryAddress>(daoDeliveryAddress, HttpStatus.OK);

        return responseEntity;
    }

    //delete address of user
    @DeleteMapping ("dl/{username}")
    public  ResponseEntity<?> deleteAddress(@PathVariable("username") String username, @RequestParam String addressName){


            DeliveryAddress DaoDeliveryAddress = deliveryAddressService.deleteAddress(addressName, username);


            responseEntity = new ResponseEntity<DeliveryAddress>(DaoDeliveryAddress, HttpStatus.OK);

        return responseEntity;
    }

    //remove the offline delivery guys from the list
    @DeleteMapping("dg")
    public ResponseEntity<?> deleteDeliveryGuy(@RequestBody DeliveryGuy deliveryGuy){


            DeliveryGuy daoDeliveryGuy = deliveryGuyService.deleteInactiveDeliveryGuy(deliveryGuy);
            responseEntity = new ResponseEntity<DeliveryGuy>(daoDeliveryGuy, HttpStatus.OK);

        return  responseEntity;

    }


    //delete the order details for orders which are delivered
    @DeleteMapping("dd")
    public ResponseEntity<?> deleteDeliveryDetails(@RequestBody OrderDetails orderDetails){

            OrderDetails daoOrderDetails = orderDetailsService.deleteOrder(orderDetails);
            responseEntity = new ResponseEntity<OrderDetails>(daoOrderDetails, HttpStatus.OK);

        return responseEntity;
    }



}
