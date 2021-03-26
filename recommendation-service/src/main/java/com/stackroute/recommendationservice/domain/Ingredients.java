package com.stackroute.recommendationservice.domain;


import lombok.*;
import org.neo4j.ogm.annotation.NodeEntity;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@NodeEntity
public class Ingredients {

    private String name;
    private String category;
    private double quantity;
    private String unit;


}
