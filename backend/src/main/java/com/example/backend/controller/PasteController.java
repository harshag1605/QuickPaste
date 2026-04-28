package com.example.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dto.PasteRequest;
import com.example.backend.model.Paste;
import com.example.backend.service.PasteService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/pastes")
@RequiredArgsConstructor
public class PasteController {

	private final PasteService pasteService;

	@PostMapping
	public ResponseEntity<Paste> createPaste(@Valid @RequestBody PasteRequest request) {
		Paste createdPaste = pasteService.createPaste(request);
		return ResponseEntity.status(HttpStatus.CREATED).body(createdPaste);
	}

	@GetMapping("/{shareId}")
	public ResponseEntity<Paste> getPasteByShareId(@PathVariable String shareId) {
		return ResponseEntity.ok(pasteService.getPasteByShareId(shareId));
	}

	@PutMapping("/{id}")
	public ResponseEntity<Paste> updatePaste(@PathVariable String id, @Valid @RequestBody PasteRequest request) {
		return ResponseEntity.ok(pasteService.updatePaste(id, request));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deletePaste(@PathVariable String id) {
		pasteService.deletePaste(id);
		return ResponseEntity.noContent().build();
	}
}
