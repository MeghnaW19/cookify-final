package com.stackroute.recommendationservice.domain;

import lombok.*;
import org.neo4j.ogm.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@NodeEntity(label = "User")
public class User {
    @Id
    String id;
    private String username;

    private String name;

    private String emailId;

    private String city;

    private String state;
    private String gender;
    private int age;

    private String image;
    private String address;
    private String country;
    private List<Recipe> recipesPublished=new ArrayList<Recipe>();
    private List<Recipe> recipesLiked=new ArrayList<Recipe>();
    private List<Recipe> recipesTried=new ArrayList<Recipe>();

    private List<String> cuisines=new ArrayList<String>();

}
