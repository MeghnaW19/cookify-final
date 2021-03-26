package com.stackroute.userprofileservice.domain;


import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Getter
@Setter
public class UserOperationRecipe {
    private String username;
    private Recipe recipe;
    private String operation;
}
