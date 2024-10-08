package org.example.backend;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class GroceryServiceTest {
    private final GroceryRepo mockGroceryRepo = mock(GroceryRepo.class);
    private final GroceryService groceryService = new GroceryService(mockGroceryRepo);

    @Test
    void getAllGroceries_shouldReturnCorrectList_ifItemsExist() {
        Grocery apple = new Grocery("01", "Apple", 0.5, 0);
        List<Grocery> testGroceries = List.of(apple);

        when(mockGroceryRepo.findAll()).thenReturn(testGroceries);

        assertEquals(testGroceries, groceryService.getAllGroceries());
        verify(mockGroceryRepo).findAll();

    }

    @Test
    void getAllGroceries_shouldReturnEmptyList_ifNoItemsExist() {
        when(mockGroceryRepo.findAll()).thenReturn(List.of());

        assertTrue(groceryService.getAllGroceries().isEmpty());
        verify(mockGroceryRepo).findAll();
    }

    @Test
    void getGroceryById_shouldReturnCorrectGrocery_ifGroceryExists(){
        Grocery apple = new Grocery("01", "apple", 0.5, 2);
        when(mockGroceryRepo.findById("01")).thenReturn(Optional.of(apple));

        assertEquals(apple, groceryService.getGroceryById("01"));
        verify(mockGroceryRepo).findById("01");
    }

    @Test
    void getGroceryById_shouldThrowException_ifGroceryDoesntExist(){
        assertThrows(NoSuchElementException.class, () -> groceryService.getGroceryById("01"));
    }

    @Test
    void updateQuantity_shouldReturnUpdatedGrocery(){
        Grocery apple = new Grocery("01", "apple", 0.5, 2);
        int newQuantity = 4;
        Grocery newApple = new Grocery("01", apple.name(), apple.price(), newQuantity);

        when(mockGroceryRepo.findById("01")).thenReturn(Optional.of(apple));
        when(mockGroceryRepo.save(newApple)).thenReturn(newApple);

        assertEquals(newApple, groceryService.updateQuantity(apple.id(), newQuantity));
        verify(mockGroceryRepo).findById("01");
        verify(mockGroceryRepo).save(newApple);
    }
}