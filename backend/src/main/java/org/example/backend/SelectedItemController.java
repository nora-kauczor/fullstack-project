package org.example.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/shopping-list")
@RequiredArgsConstructor
public class SelectedItemController {
    private final SelectedItemService selectedItemService;

    @GetMapping
    public List<SelectedItem> getAllGroceries(){
        return selectedItemService.getAllGroceries();
    }
}
