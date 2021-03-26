package com.stackroute.zuulapi.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.http.HttpServletResponse;

@EnableWebSecurity    // Enable security config. This annotation denotes config for spring security.
public class SecurityTokenConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private JwtConfig jwtConfig;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                // make sure we use stateless session; session won't be used to store user's state.
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                // handle an authorized attempts
                .exceptionHandling().authenticationEntryPoint((req, rsp, e) -> rsp.sendError(HttpServletResponse.SC_ACCEPTED))
                .and()
                // Add a filter to validate the tokens with every request
                .addFilterAfter(new JwtTokenAuthenticationFilter(jwtConfig), UsernamePasswordAuthenticationFilter.class)
                // authorization requests config
                .authorizeRequests().antMatchers("/userLogin/register", "/userLogin/authenticate","/userLogin/user","/userLogin/user/{id}","/recipeService/api/v1/recipedetail/{id}","/recipeService/api/v1/recipes","/recommendationService/api/v1/ingredientsGrouped/{id}","/recommendationService/api/v1/allIngredients/{id}","/recommendationService/api/v1/recipes/trending","/recommendationService/api/v1/recipes/latest","/recommendationService/api/v1/recipes/popular","/recommendationService/api/v1/numberOfTried/{recipeId}","/recipeService/api/v1/recipes/{recipeName}","/recipeService/api/v1/uploadFile").permitAll()
                // must be a delivery person if trying to access delivery area (authentication is also required here)
                .antMatchers("/userLogin/testRole", "/deliveryService/api/v1/dd","deliveryService/odg/{deliveryUsername}").hasRole("DELIVER")
                // Any other request must be authenticated
                .anyRequest().authenticated();
    }

    @Bean
    public JwtConfig jwtConfig() {
        return new JwtConfig();
    }
}
