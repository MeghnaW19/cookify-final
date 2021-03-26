package com.stackroute.userprofileservice.domain;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document
@NoArgsConstructor
@AllArgsConstructor
@Data
@Getter
@Setter
public class User {

    @Id
    private String id;

    private String username;
    private String name;
    private String emailId;
    private String city;
    private String gender;
    private String image;
    private int age;
    private String country;
    private String state;

    private List<Recipe> recipesPublished = new ArrayList<Recipe>();
    private List<Recipe> recipesLiked = new ArrayList<Recipe>();
    private List<Recipe> recipesTried = new ArrayList<Recipe>();


    private String address;
    private String deliveryStatus;

    private String cookingStatus;

    private List<String> cuisines = new ArrayList<String>();
}

