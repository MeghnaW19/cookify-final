package com.stackroute.userprofileservice.service;

import com.stackroute.userprofileservice.domain.Recipe;
import com.stackroute.userprofileservice.domain.User;

public interface UserService {
    public User saveuser(User user);

    public User getUserByUserName(String username);

    public User updateuser(User user);

    public User savetryrecipe(String username, Recipe recipe);

    public User savelikedrecipe(String username, Recipe recipe);

    public void updaterating(String username,String recipeid,float ratingvalue);
}
