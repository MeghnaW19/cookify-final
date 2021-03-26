package com.stackroute.recipeservice.domain;


import lombok.*;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class Ratingdata {
    private float finalRating;
    private String recipeId;

}
