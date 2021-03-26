package com.stackroute.deliveryservice.domain;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class DeliveryGuyDTL {
    @Id
    public String orderId;
    public List<DeliveryGuyDistanceTime> deliveryGuyDistanceTime = new ArrayList<DeliveryGuyDistanceTime>();
}
