package com.stackroute.userloginservice.userloginservice.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Getter
@Setter

@Entity
@Table(name = "Registration_Details")
public class UserLogin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String username;
    @Column
    @JsonIgnore
    private String password;
    @Column
    private String name;
    @Column
    private int age;
    @Column
    private String gender;
    @Column
    private String emailId;
    @Column
    private String country;
    @Column
    private String state;
    @Column
    private String city;
    @Column
    private String role = "USER";

}
