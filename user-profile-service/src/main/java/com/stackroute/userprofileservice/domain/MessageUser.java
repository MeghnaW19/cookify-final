package com.stackroute.userprofileservice.domain;


import lombok.*;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Getter
@Setter
public class MessageUser {

    private String username;
    private String name;
    private int age;
    private String gender;
    private String emailId;
    private String country;
    private String state;
    private String city;
    private List<String> cuisines;
}
