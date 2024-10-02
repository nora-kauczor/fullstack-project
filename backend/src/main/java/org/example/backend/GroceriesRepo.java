package org.example.backend;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface GroceriesRepo extends MongoRepository<Grocery, String> {
}
