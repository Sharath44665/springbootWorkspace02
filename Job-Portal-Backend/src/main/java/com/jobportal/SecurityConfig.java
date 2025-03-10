package com.jobportal;

import com.jobportal.jwt.JwtAuthenticationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class SecurityConfig {
    @Autowired
    private AuthenticationEntryPoint point;


   @Autowired
   private JwtAuthenticationFilter filter;
    


    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http ) throws Exception{
//        http.authorizeHttpRequests((req) -> req.requestMatchers("/**").permitAll().anyRequest().authenticated());
//        http.csrf(csrf -> csrf.disable());
//        return http.build();

        http.csrf(csrf-> csrf.disable())
                .authorizeRequests()
                .requestMatchers("auth/login", "/users/register", "/users/verify-otp/**", "/users/send-otp/**").permitAll()
                .anyRequest()
                .authenticated()
                    .and().exceptionHandling(ex -> ex.authenticationEntryPoint(point))
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        http.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);
        return http.build();


    }

}
