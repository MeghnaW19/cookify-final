package com.stackroute.recipeservice.domain;

import lombok.*;

import java.util.ArrayList;
import java.util.List;
@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Procedure {
    private List<Stage> stages= new ArrayList<Stage>();

}
