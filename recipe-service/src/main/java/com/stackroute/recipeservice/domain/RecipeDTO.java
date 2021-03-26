package com.stackroute.recipeservice.domain;



import lombok.*;



import java.math.BigDecimal;
import java.math.BigInteger;

import java.util.ArrayList;
import java.util.List;
@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class RecipeDTO {

    public String id;

    private int servesFor;

    private String recipeName;

    private String publishedBy;
    private List<Ingredients> ingredients=new ArrayList<Ingredients>();
    private Procedure procedure;
    private String cuisine;
    private String course;
    private String images;
    private int cookingTime;
    private float rating;
    private BigDecimal price;
    private BigInteger publishedOn;
    private List<Comment> comments;
    private List<Rating> ratings;


    float ratingDuplicate;
    int ratingCount;
}
