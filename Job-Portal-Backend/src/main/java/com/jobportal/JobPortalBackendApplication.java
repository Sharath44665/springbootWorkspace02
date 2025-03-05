package com.jobportal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling	
public class JobPortalBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(JobPortalBackendApplication.class, args);
	}

}
