package com.stackroute.userprofileservice.domain;

import lombok.*;

import java.time.LocalDateTime;
import java.util.Date;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Getter
@Setter
public class Rating {


    private String username;
    private int rating;
    private LocalDateTime time;
}
