package com.alex.security.dto;

import lombok.Data;

@Data
public class AuthResponse {
    public AuthResponse(String token) {
        this.token = token;
    }

    private String token;
}



