package org.example.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class SelectedItemControllerTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private SelectedItemRepo repo;

    @Test
    void getAllSelectedItems() throws Exception {
        SelectedItem testItem = new SelectedItem("123", "01", 100);
        repo.save(testItem);
        mvc.perform(MockMvcRequestBuilders.get("/api/shopping-list")).andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().json("""
                        [
                        { "id": "123", "groceryId" : "01", "quantity": 100
                        }
                        ]
                        """));
    }
}