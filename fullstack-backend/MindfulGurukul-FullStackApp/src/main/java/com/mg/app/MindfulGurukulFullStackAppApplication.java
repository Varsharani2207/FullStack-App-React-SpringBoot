package com.mg.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.mg.app")
public class MindfulGurukulFullStackAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(MindfulGurukulFullStackAppApplication.class, args);
	}

}
