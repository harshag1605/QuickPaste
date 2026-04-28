package com.example.backend.model;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "pastes")
public class Paste {

	@Id
	private String id;

	@Indexed(unique = true)
	private String shareId;

	private String title;
	private String content;
	private String language;
	private LocalDateTime createdAt;
	private LocalDateTime expiresAt;
	private Visibility visibility;
}
