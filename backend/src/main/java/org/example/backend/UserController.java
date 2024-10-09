package org.example.backend;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/groceries/auth/me")
public class UserController {

    @GetMapping
    public String getMe(@AuthenticationPrincipal OAuth2User user)
    {
        return user == null ? "" : user.getAttributes()
                .get("login")
                .toString();
    }

}
