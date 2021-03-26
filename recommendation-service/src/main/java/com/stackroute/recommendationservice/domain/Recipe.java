package com.stackroute.recommendationservice.domain;

import lombok.*;
import org.neo4j.ogm.annotation.*;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;
@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@NodeEntity(label="Recipe")
public class Recipe {
    @Id
    private String id;
    private String recipeName;
    private int servesFor;
    private String publishedBy;
    private List<Ingredients> ingredients=new ArrayList<Ingredients>();
    private Procedure procedure;
    private String cuisine;
    private String course;
    private String recipeImage;
    private int cookingTime;
    private float rating;
    private Date publishedOn;
    private long timeStamp;

    public Recipe(String id, String recipeName, int servesFor, String publishedBy, String cuisine, String course, String recipeImage,int cookingTime,float rating) {
        this.id = id;
        this.recipeName = recipeName;
        this.servesFor = servesFor;
        this.publishedBy = publishedBy;
        this.cuisine = cuisine;
        this.course = course;
        this.recipeImage=recipeImage;
        this.cookingTime = cookingTime;
        this.rating=rating;
    }

    public Recipe(String id, String recipeName, int servesFor, String publishedBy, List<Ingredients> ingredients, Procedure procedure, String cuisine, String course, String recipeImage, int cookingTime, float rating) {
        this.id = id;
        this.recipeName = recipeName;
        this.servesFor = servesFor;
        this.publishedBy = publishedBy;
        this.ingredients = ingredients;
        this.procedure = procedure;
        this.cuisine = cuisine;
        this.course = course;
        this.recipeImage = recipeImage;
        this.cookingTime = cookingTime;
        this.rating = rating;
    }

    public Recipe(String id, float rating) {
        this.id = id;
        this.rating = rating;
    }
}
