package org.example.backend;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface SelectedItemRepo extends MongoRepository<SelectedItem, String> {
}
