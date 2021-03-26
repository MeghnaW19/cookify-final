package com.stackroute.recommendationservice.dto;


import lombok.*;
import org.neo4j.ogm.annotation.NodeEntity;
@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@NodeEntity
public class OperationDTO {
    private String username;
    private RecipeDTO recipe;
    private String operation;
}