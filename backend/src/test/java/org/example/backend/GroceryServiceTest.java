package org.example.backend;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class GroceryServiceTest {
    private final GroceryRepo mockGroceryRepo = mock(GroceryRepo.class);
    private final GroceryService groceryService = new GroceryService(mockGroceryRepo);

    @Test
    void getAllGroceries_shouldReturnCorrectList_whenItemsExist() {
        Grocery apple = new Grocery("01", "Apple", 0.5, 0);
        List<Grocery> testGroceries = List.of(apple);

        when(mockGroceryRepo.findAll()).thenReturn(testGroceries);

        assertEquals(testGroceries, groceryService.getAllGroceries());
        verify(mockGroceryRepo).findAll();

    }

    @Test
    void getAllGroceries_shouldReturnEmptyList_whenNoItemsExist() {
        when(mockGroceryRepo.findAll()).thenReturn(List.of());

        assertTrue(groceryService.getAllGroceries().isEmpty());
        verify(mockGroceryRepo).findAll();
    }
}