package com.stackroute.recipeservice.domain;

import lombok.*;

import java.time.LocalDateTime;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class Comment {
    private String username;
    private String comment;
    private LocalDateTime time;

    private String userImage;
}
