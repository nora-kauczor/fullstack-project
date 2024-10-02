package org.example.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/groceries")
@RequiredArgsConstructor
public class GroceryController {
    private final GroceryService groceryService;

    @GetMapping
    public List<Grocery> getAllGroceries(){
        return groceryService.getAllGroceries();
    }


}
