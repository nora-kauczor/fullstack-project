package org.example.backend;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface GroceryRepo extends MongoRepository<Grocery, String> {
}
