package com.stackroute.recipeservice.domain;

import lombok.*;

import java.time.LocalDateTime;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Rating {
    private String username;
    private int rating;
    private LocalDateTime time;


}
