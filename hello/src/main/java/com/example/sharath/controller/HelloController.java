package com.example.sharath.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class HelloController {
    @GetMapping("/api/hello")
    public String sayHello(){
        return "hello from spring boot sharath";
    }
}
