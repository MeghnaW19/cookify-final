package com.stackroute.userloginservice.userloginservice.repository;

import com.stackroute.userloginservice.userloginservice.domain.UserLogin;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserLoginRepository extends CrudRepository<UserLogin, Integer> {

    UserLogin findByUsername(String username);
    UserLogin findByEmailId(String emailId);

}
