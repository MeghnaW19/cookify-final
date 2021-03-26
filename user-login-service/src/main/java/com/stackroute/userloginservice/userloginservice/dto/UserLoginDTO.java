package com.stackroute.userloginservice.userloginservice.dto;

import lombok.*;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Getter
@Setter

public class UserLoginDTO {
    private String username;
    private String password;
    private String name;
    private int age;
    private String gender;
    private String emailId;
    private String country;
    private String state;
    private String city;
    private List<String> cuisines;
    private String role;

    @Override
    public String toString() {
        return "UserLoginDTO{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", name='" + name + '\'' +
                ", age=" + age +
                ", gender='" + gender + '\'' +
                ", emailId='" + emailId + '\'' +
                ", country='" + country + '\'' +
                ", state='" + state + '\'' +
                ", city='" + city + '\'' +
                ", cuisines=" + cuisines +
                ", role='" + role + '\'' +
                '}';
    }
}
