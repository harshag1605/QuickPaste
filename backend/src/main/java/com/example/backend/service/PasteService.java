package com.example.backend.service;

import java.security.SecureRandom;
import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.example.backend.dto.PasteRequest;
import com.example.backend.exception.PasteNotFoundException;
import com.example.backend.model.Paste;
import com.example.backend.model.Visibility;
import com.example.backend.repository.PasteRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PasteService {

	private static final String SHARE_ID_CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	private static final int SHARE_ID_LENGTH = 8;
	private static final int MAX_SHARE_ID_ATTEMPTS = 10;

	private final PasteRepository pasteRepository;
	private final SecureRandom secureRandom = new SecureRandom();

	public Paste createPaste(PasteRequest request) {
		Paste paste = Paste.builder()
				.shareId(generateUniqueShareId())
				.title(request.getTitle())
				.content(request.getContent())
				.language(defaultIfBlank(request.getLanguage(), "text"))
				.createdAt(LocalDateTime.now())
				.expiresAt(request.getExpiresAt())
				.visibility(request.getVisibility() == null ? Visibility.PUBLIC : request.getVisibility())
				.build();

		return pasteRepository.save(paste);
	}

	public Paste getPasteByShareId(String shareId) {
		Paste paste = pasteRepository.findByShareId(shareId)
				.orElseThrow(() -> new PasteNotFoundException("Paste not found for shareId: " + shareId));

		if (paste.getExpiresAt() != null && paste.getExpiresAt().isBefore(LocalDateTime.now())) {
			throw new PasteNotFoundException("Paste has expired for shareId: " + shareId);
		}

		return paste;
	}

	public Paste updatePaste(String id, PasteRequest request) {
		Paste paste = pasteRepository.findById(id)
				.orElseThrow(() -> new PasteNotFoundException("Paste not found for id: " + id));

		paste.setTitle(request.getTitle());
		paste.setContent(request.getContent());
		paste.setLanguage(defaultIfBlank(request.getLanguage(), "text"));
		paste.setExpiresAt(request.getExpiresAt());
		paste.setVisibility(request.getVisibility() == null ? Visibility.PUBLIC : request.getVisibility());

		return pasteRepository.save(paste);
	}

	public void deletePaste(String id) {
		if (!pasteRepository.existsById(id)) {
			throw new PasteNotFoundException("Paste not found for id: " + id);
		}

		pasteRepository.deleteById(id);
	}

	private String generateUniqueShareId() {
		for (int attempt = 0; attempt < MAX_SHARE_ID_ATTEMPTS; attempt++) {
			String shareId = randomShareId();
			if (!pasteRepository.existsByShareId(shareId)) {
				return shareId;
			}
		}

		throw new IllegalStateException("Could not generate a unique share ID");
	}

	private String randomShareId() {
		StringBuilder builder = new StringBuilder(SHARE_ID_LENGTH);
		for (int i = 0; i < SHARE_ID_LENGTH; i++) {
			int index = secureRandom.nextInt(SHARE_ID_CHARS.length());
			builder.append(SHARE_ID_CHARS.charAt(index));
		}
		return builder.toString();
	}

	private String defaultIfBlank(String value, String defaultValue) {
		return value == null || value.isBlank() ? defaultValue : value;
	}
}
