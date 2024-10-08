package org.example.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/{groceryId}")
    public Grocery getGroceryById(@PathVariable String groceryId){
        return groceryService.getGroceryById(groceryId);
    }


    @PutMapping("/update/{groceryId}")
    public Grocery updateQuantity(@PathVariable String groceryId, @RequestParam int quantity) {
        return groceryService.updateQuantity(groceryId, quantity);
    }
}
