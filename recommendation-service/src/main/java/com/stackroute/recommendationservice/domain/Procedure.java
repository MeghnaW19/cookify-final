package com.stackroute.recommendationservice.domain;

import java.util.ArrayList;
import java.util.List;

public class Procedure {
    private List<Stage> stages= new ArrayList<Stage>();

    public List<Stage> getStages() {
        return stages;
    }

    public void setStages(List<Stage> stages) {
        this.stages = stages;
    }
}
