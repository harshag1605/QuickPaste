package com.example.backend.controller;

import com.example.backend.model.Paste;
import com.example.backend.service.PasteService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/paste")
@CrossOrigin("*")
public class PasteController {

    private final PasteService service;

    public PasteController(PasteService service) {
        this.service = service;
    }

    @PostMapping
    public Paste createPaste(@RequestBody Paste paste) {
        return service.savePaste(paste);
    }

    @GetMapping("/{code}")
    public Paste getPaste(@PathVariable String code) {
        return service.getPaste(code);
    }
}