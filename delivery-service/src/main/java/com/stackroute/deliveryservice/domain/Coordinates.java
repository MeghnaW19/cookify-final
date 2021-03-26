package com.stackroute.deliveryservice.domain;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Coordinates {
    private double latitude;
    private double longitude;
}
