package com.stackroute.userprofileservice.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class Stage {
//    private int stageId;
    private String stageName;
    private List<Step> steps=new ArrayList<Step>();
    private int duration;
    private String image;


}
