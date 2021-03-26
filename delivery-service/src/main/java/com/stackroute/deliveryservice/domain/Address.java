package com.stackroute.deliveryservice.domain;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class Address {
    @Id
    private String addressName;
    private String name;
    private String location;
    private String city;
    private String state;
    private int pin;
    private long mobileNumber;
    private Coordinates coordinates;
    private boolean selectAddress;
}
