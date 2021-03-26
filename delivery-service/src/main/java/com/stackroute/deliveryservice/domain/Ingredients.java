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
public class Ingredients {
    private String name;
    private double quantity;
    private String unit;

}
