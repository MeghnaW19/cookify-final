package com.stackroute.recommendationservice.domain;

import lombok.*;
import org.neo4j.ogm.annotation.NodeEntity;

import java.time.LocalDateTime;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@NodeEntity
public class Comment {
    private String StringName;
    private String comment;
    private LocalDateTime time;

    private String StringImage;
}
