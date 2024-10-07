package org.example.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class SelectedItemService {
    private final SelectedItemRepo selectedItemRepo;

    public List<SelectedItem> getAllGroceries(){
        return selectedItemRepo.findAll();
    }
}
