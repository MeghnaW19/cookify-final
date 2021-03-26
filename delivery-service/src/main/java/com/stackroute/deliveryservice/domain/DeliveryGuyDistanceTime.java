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
public class DeliveryGuyDistanceTime {
    public String deliveryUsername;
    public double distance;
    public double time;
}
