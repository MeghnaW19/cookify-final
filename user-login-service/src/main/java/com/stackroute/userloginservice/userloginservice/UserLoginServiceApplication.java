package com.stackroute.userloginservice.userloginservice;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
@Slf4j
public class UserLoginServiceApplication {

	public static void main(String[] args) { SpringApplication.run(UserLoginServiceApplication.class, args);
			log.info("User login service started");
	}

}
