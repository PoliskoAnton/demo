package com.alex.security.web;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api")
public class DemoController {
    @GetMapping("/hello")
    public String hello() { return "Hello, authenticated user!"; }
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/admin/secret")
    public String amin() { return "Top secret for ADMIN"; }
}