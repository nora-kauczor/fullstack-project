package org.example.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class GroceryControllerTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private GroceryRepo groceryRepo;

    @DirtiesContext
    @Test
    void getAllGroceries() throws Exception {
        Grocery apple = new Grocery("01", "Apple", 0.5);
        groceryRepo.save(apple);
        mvc.perform(MockMvcRequestBuilders.get("/api/groceries")).andExpect(status().isOk())
                .andExpect(content().json("""
                    [
                    {
                        "id": "01",
                        "name": "Apple",
                        "price": 0.5
                    }]
                """));
    }
}