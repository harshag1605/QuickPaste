package com.example.backend.dto;

import java.time.LocalDateTime;

import com.example.backend.model.Visibility;

import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class PasteRequest {

	@Size(max = 120, message = "Title must be at most 120 characters")
	private String title;

	@NotBlank(message = "Content is required")
	@Size(max = 10000, message = "Content must be at most 10000 characters")
	private String content;

	@Size(max = 40, message = "Language must be at most 40 characters")
	private String language;

	@Future(message = "Expiry date must be in the future")
	private LocalDateTime expiresAt;

	private Visibility visibility;
}
