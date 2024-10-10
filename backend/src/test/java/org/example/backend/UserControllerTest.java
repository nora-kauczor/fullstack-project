package org.example.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.oidcLogin;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class UserControllerTest {

    @Autowired
    private MockMvc mvc;


    // MIT CREDENTIALS
    @Test
    void getMe() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/api/groceries/auth/me")
                        .with(oidcLogin().userInfoToken(token -> token
                                .claim("login", "test-username"))) )
                .andExpect(status().isOk())
                .andExpect(content().string("test-username"));
    }
}