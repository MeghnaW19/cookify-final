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
public class DeliveryGuy {
    @Id
    private String deliveryUsername;
    private long mobileNumber;
    private Coordinates coordinates;
    private boolean status;
}
