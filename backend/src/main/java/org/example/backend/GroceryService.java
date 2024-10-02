package org.example.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class GroceryService {
    private final GroceryRepo groceryRepo;

    public List<Grocery> getAllGroceries(){
        return groceryRepo.findAll();
    }
}
