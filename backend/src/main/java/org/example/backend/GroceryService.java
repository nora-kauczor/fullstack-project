package org.example.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@RequiredArgsConstructor
@Service
public class GroceryService {
    private final GroceryRepo groceryRepo;

    public List<Grocery> getAllGroceries(){
        return groceryRepo.findAll();
    }

    public Grocery getGroceryById(String groceryId){
        return groceryRepo.findById(groceryId).orElseThrow(NoSuchElementException::new);
    }

    public Grocery updateQuantity(String groceryId, int quantity){
        Grocery originalGrocery = groceryRepo.findById(groceryId).orElseThrow(NoSuchElementException::new);
        return groceryRepo.save(new Grocery(groceryId, originalGrocery.name(), originalGrocery.price(), quantity));
    }
}
