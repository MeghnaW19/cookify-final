package com.stackroute.userprofileservice.domain;

import lombok.*;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Getter
@Setter
public class Recipe {

  
    private String id;
    
    private String recipeName;
    private String publishedBy;
    private  BigInteger publishedOn;
    private  float  rating;
    private  int ratingCount=0;
    private String duration;
    private  String cuisine;
    private int servesFor;
    private  BigDecimal price;
    private  String course;
    private  String recipeImage;
    private  String description;
    private  int cookingTime;
    private float ratingduplicate;
    private  List<Ingredients> ingredients=new ArrayList<Ingredients>();
    private  Procedure procedure;
    private List<Comment> comments;
    private List<Rating> ratings;
}
