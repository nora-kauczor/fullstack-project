package org.example.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class GroceriesService {
    private final GroceriesRepo groceriesRepo;

    public List<Grocery> getAllGroceries(){
        return groceriesRepo.findAll();
    }
}
