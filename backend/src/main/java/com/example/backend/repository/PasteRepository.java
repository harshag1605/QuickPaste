package com.example.backend.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.backend.model.Paste;

public interface PasteRepository extends MongoRepository<Paste, String> {

	Optional<Paste> findByShareId(String shareId);

	boolean existsByShareId(String shareId);
}
