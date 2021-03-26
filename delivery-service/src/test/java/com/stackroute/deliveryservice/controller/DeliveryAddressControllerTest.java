package com.stackroute.deliveryservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.deliveryservice.domain.*;
import com.stackroute.deliveryservice.service.DeliveryAddressService;
import com.stackroute.deliveryservice.service.DeliveryGuyDistanceTimeService;
import com.stackroute.deliveryservice.service.DeliveryGuyService;
import com.stackroute.deliveryservice.service.OrderDetailsService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import javax.ws.rs.core.MediaType;

import java.util.*;

import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@WebMvcTest
public class DeliveryAddressControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private DeliveryAddressService deliveryAddressService;
    @MockBean
    private DeliveryGuyDistanceTimeService deliveryGuyDistanceTimeService;
    @MockBean
    private DeliveryGuyService deliveryGuyService;
    @MockBean
    private OrderDetailsService orderDetailsService;

    @InjectMocks
    private DeliveryAddressController deliveryAddressController;

    private Address address =new Address();
    private Coordinates coordinates = new Coordinates();
    private DeliveryAddress deliveryAddress = new DeliveryAddress();
    private DeliveryGuy deliveryGuy = new DeliveryGuy();
    private DeliveryGuyDistanceTime deliveryGuyDistanceTime = new DeliveryGuyDistanceTime();
    private DeliveryGuyDTL deliveryGuyDTL = new DeliveryGuyDTL();
    private DeliveryGuyOptions deliveryGuyOptions = new DeliveryGuyOptions();
    private Ingredients ingredients = new Ingredients();
    private OrderDetails orderDetails = new OrderDetails();
    private List<Address> addressList = new ArrayList<Address>();
    private List<DeliveryGuyDistanceTime> deliveryGuyDistanceTimeList = new ArrayList<DeliveryGuyDistanceTime>();




    @Before
    public void setup() throws Exception {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(deliveryAddressController).build();
        deliveryAddress.setUsername("prashant");
        address.setAddressName("work");
        address.setCity("Mumbai");
        address.setLocation("Stackroute");
        address.setMobileNumber(999999999);
        address.setName("Prashant");
        address.setPin(431104);
        address.setSelectAddress(false);
        address.setState("Maharashtra");
        coordinates.setLatitude(12.666666);
        coordinates.setLongitude(12.666666);
        address.setCoordinates(coordinates);
        addressList.add(address);
        deliveryAddress.setAddresses(addressList);
        deliveryGuyDTL.setOrderId("orderId");
        deliveryGuyDistanceTime.setDeliveryUsername("antara");
        deliveryGuyDistanceTime.setDistance(12.3);
        deliveryGuyDistanceTime.setTime(10.45);
        deliveryGuyDistanceTimeList.add(deliveryGuyDistanceTime);



    }

    @Test
    public void postDeliveryAddress() throws Exception {
        when(deliveryAddressService.saveDeliveryAddress(deliveryAddress)).thenReturn(deliveryAddress);
        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/ds")
                .contentType(MediaType.APPLICATION_JSON).content(asJsonString(deliveryAddress)))
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void getDeliveryAddress() throws Exception {
        when(deliveryAddressService.getDeliveryAddress("prashant")).thenReturn(deliveryAddress);
        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/ds/prashant")
                .contentType(MediaType.APPLICATION_JSON).content(asJsonString(deliveryAddress)))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void addExtraAddress() throws Exception {
        when(deliveryAddressService.addExtraAddress(address,"prashant")).thenReturn(deliveryAddress);
        mockMvc.perform(MockMvcRequestBuilders.put("/api/v1/da/prashant")
                .contentType(MediaType.APPLICATION_JSON).content(asJsonString(deliveryAddress)))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }

//    @Test
//    public void deleteAddress() throws Exception {
//        when(deliveryAddressService.deleteAddress(address.getAddressName(),"prashant")).thenReturn(deliveryAddress);
//        mockMvc.perform(MockMvcRequestBuilders.delete("/api/v1/dl/prashant")
//                .contentType(MediaType.APPLICATION_JSON).content(asJsonString(deliveryAddress)))
//                .andExpect(MockMvcResultMatchers.status().isOk())
//                .andDo(MockMvcResultHandlers.print());
//    }

    @Test
    public void postDeliveryGuyDistanceTime() throws Exception {
        when(deliveryGuyDistanceTimeService.saveDeliveryDistanceTime(deliveryGuyDTL)).thenReturn(deliveryGuyDTL);
        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/ad")
                .contentType(MediaType.APPLICATION_JSON).content(asJsonString(deliveryGuyDTL)))
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andDo(MockMvcResultHandlers.print());
    }

    private static String asJsonString(final Object object) {
        try {
            return new ObjectMapper().writeValueAsString(object);
        } catch (Exception exception) {
            throw new RuntimeException(exception);
        }
    }
}
