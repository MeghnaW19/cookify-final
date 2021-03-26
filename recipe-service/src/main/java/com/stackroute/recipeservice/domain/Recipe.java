package com.stackroute.recipeservice.domain;


import lombok.*;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;


@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class Recipe
{


    @Id
    String id;
    
    String recipeName;
    String publishedBy;
    BigInteger publishedOn;
    float  rating;
    int ratingCount=0;
    String duration;
    String cuisine;
    int servesFor;
    BigDecimal price;
    String course;
    String recipeImage;
    String description;
    int cookingTime;

    float ratingduplicate;
    List<Ingredients> ingredients=new ArrayList<Ingredients>();
    Procedure procedure;

    private List<Comment> comments=new ArrayList<Comment>();;
    private List<Rating> ratings=new ArrayList<Rating>();;

}
