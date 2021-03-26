package com.stackroute.deliveryservice.domain;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class DeliveryGuyOptions {
    private String username;
    private String deliveryGuyUsername;
    private double distance;
    private double time;
}
