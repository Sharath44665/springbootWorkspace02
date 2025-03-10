package com.jobportal.jwt;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class AuthenticationResponse {
    private final String jwt;
    public AuthenticationResponse(String jwt){
        this.jwt=jwt;
    }

}
