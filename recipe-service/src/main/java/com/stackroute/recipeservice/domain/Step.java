package com.stackroute.recipeservice.domain;

import lombok.*;

@Data
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Step {
    private int id;
    private String stepContent;
}
