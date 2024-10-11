package org.example.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.SecurityFilterChain;

import java.util.Collections;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final UserRepo userRepo;

    @Value("${app.url}")
    private String appUrl;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(requests -> requests
                        .requestMatchers("/api/groceries/update/*").authenticated()
                        .requestMatchers("/api/groceries").permitAll()
                        .anyRequest().permitAll())
                .sessionManagement(session -> session.sessionCreationPolicy(
                        SessionCreationPolicy.ALWAYS))
                .logout(logout -> logout
                        .logoutSuccessUrl(appUrl)
                        .logoutUrl("/api/auth/logout"))
                .oauth2Login(login -> login.defaultSuccessUrl(appUrl + "/shoppinglist"))
                .build();
    }

}
