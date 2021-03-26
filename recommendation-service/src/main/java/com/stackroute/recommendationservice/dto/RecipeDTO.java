package com.stackroute.recommendationservice.dto;

import com.stackroute.recommendationservice.domain.Comment;
import com.stackroute.recommendationservice.domain.Ingredients;
import com.stackroute.recommendationservice.domain.Procedure;
import com.stackroute.recommendationservice.domain.Rating;
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

    private List<Comment> comments;
    private List<Rating> ratings;


}
