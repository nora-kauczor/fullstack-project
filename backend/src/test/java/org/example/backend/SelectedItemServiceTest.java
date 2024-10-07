package org.example.backend;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class SelectedItemServiceTest {
private final SelectedItemRepo mockRepo = mock(SelectedItemRepo.class);
private final SelectedItemService service = new SelectedItemService(mockRepo);
    @Test
    void getAllSelectedItems_shouldReturnCorrectList_whenItemsExist() {
        SelectedItem testItem = new SelectedItem("123", "01", 100);
        List<SelectedItem> testItemList = List.of(testItem);
        when(mockRepo.findAll()).thenReturn(testItemList);
        assertEquals(testItemList, service.getAllSelectedItems());
        verify(mockRepo).findAll();
    }
        @Test
        void getAllSelectedItems_shouldReturnEmptyList_whenNoItemsExist() {
            when(mockRepo.findAll()).thenReturn(List.of());

            assertTrue(service.getAllSelectedItems().isEmpty());
            verify(mockRepo).findAll();
        }


}