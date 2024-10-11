package org.example.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/groceries/auth/me")
@RequiredArgsConstructor
public class UserController {

    private final UserRepo userRepo;

    @GetMapping
    public AppUser getMe(@AuthenticationPrincipal OAuth2User user) {
        return user == null ?
                new AppUser("NotFound", "anonymousUser", null)
                :
                userRepo.findById(user.getName()).orElseThrow();
    }

}
