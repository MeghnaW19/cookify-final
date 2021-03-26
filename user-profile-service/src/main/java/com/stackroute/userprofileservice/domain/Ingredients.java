package com.stackroute.userprofileservice.domain;


import lombok.*;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Ingredients {

    private String name;
    private String category;
    private double quantity;
    private String unit;


}
