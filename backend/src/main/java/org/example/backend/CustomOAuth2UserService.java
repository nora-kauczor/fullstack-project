package org.example.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    private final UserRepo userRepo;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User user = super.loadUser(userRequest);

        AppUser gitHubUser = userRepo.findById(user.getName()).orElseGet(() ->
                {
                    AppUser newUser = new AppUser(
                            user.getName(),
                            user.getAttributes().get("login").toString(),
                            user.getAttributes().get("avatar_url").toString()
                    );
                    return userRepo.save(newUser);
                }
        );
        return new DefaultOAuth2User(Collections.emptyList(),
                user.getAttributes(), "login");
    }
}
