package com.prodapt.learningspring;

import static org.springframework.security.config.Customizer.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

import com.prodapt.learningspring.service.CustomUserDetailsService;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {
    
    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception{
        auth.userDetailsService(customUserDetailsService);
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http
            .authorizeHttpRequests((requests) -> requests
            .requestMatchers("/forum/register","/forum/post/{id}","/forum/{id}/comments","/forum/post/{id}/comments","/forum/post/{postId}/add-comment","/forum/users").permitAll()
            .anyRequest().authenticated())
            .logout(withDefaults());
            // .formLogin(withDefaults());

            http
                .csrf().disable()
                .httpBasic().disable()
                .formLogin().disable()
                .logout().disable();


        
        return http.build();
    }

}
