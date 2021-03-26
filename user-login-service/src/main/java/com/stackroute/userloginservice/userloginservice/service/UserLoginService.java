package com.stackroute.userloginservice.userloginservice.service;

import java.util.List;

import com.stackroute.userloginservice.userloginservice.dto.UserLoginDTO;
import com.stackroute.userloginservice.userloginservice.repository.UserLoginRepository;
import com.stackroute.userloginservice.userloginservice.domain.UserLogin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class UserLoginService implements UserDetailsService {

    @Autowired
    private UserLoginRepository userDao;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    /** To set grantedAuthorities in userDetails object which is used to create token
    Role is mentioned in grantedAuthorities **/
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserLogin user = userDao.findByUsername(username);

        /** Remember that Spring needs roles to be in this format: "ROLE_" + userRole (i.e. "ROLE_ADMIN")
        So, we need to set it to that format, so we can verify and compare roles (i.e. hasRole("ADMIN")). **/
        List<GrantedAuthority> grantedAuthorities = AuthorityUtils
                .commaSeparatedStringToAuthorityList("ROLE_" + user.getRole());

        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
                grantedAuthorities);
    }

    /** save registration details **/
    public UserLogin save(UserLoginDTO user) {
        UserLogin newUser = new UserLogin();
        newUser.setUsername(user.getUsername());
        newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
        newUser.setName(user.getName());
        newUser.setAge(user.getAge());
        newUser.setGender(user.getGender());
        newUser.setEmailId(user.getEmailId());
        newUser.setCountry(user.getCountry());
        newUser.setState(user.getState());
        newUser.setCity(user.getCity());
        newUser.setRole("USER");
        return userDao.save(newUser);
    }

    /** to get user id for interested cuisine view **/
    public UserLogin getUser(int id){
        return userDao.findById(id).get();

    }
}
