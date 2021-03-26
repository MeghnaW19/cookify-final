package com.stackroute.deliveryservice.domain;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class OrderDetails {
    @Id
    private String orderId;
    private String username;
    private Address address;
    private List<Ingredients> ingredients;
    private String deliveryUsername;
    private DeliveryGuy deliveryGuy;
    private String status;

}
