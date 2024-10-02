package org.example.backend;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class GroceriesServiceTest {
    private final GroceriesRepo mockGroceriesRepo = mock(GroceriesRepo.class);
    private final GroceriesService groceriesService = new GroceriesService(mockGroceriesRepo);

    @Test
    void getAllGroceries_shouldReturnCorrectList_whenItemsExist() {
        Grocery apple = new Grocery("01", "Apple", 0.5);
        List<Grocery> testGroceries = List.of(apple);

        when(mockGroceriesRepo.findAll()).thenReturn(testGroceries);

        assertEquals(testGroceries, groceriesService.getAllGroceries());
        verify(mockGroceriesRepo).findAll();

    }

    @Test
    void getAllGroceries_shouldReturnEmptyList_whenNoItemsExist() {
        when(mockGroceriesRepo.findAll()).thenReturn(List.of());

        assertTrue(groceriesService.getAllGroceries().isEmpty());
        verify(mockGroceriesRepo).findAll();
    }
}