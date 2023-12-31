package com.mg.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.mg.app")
public class MgFullStackApp1Application {

	public static void main(String[] args) {
		SpringApplication.run(MgFullStackApp1Application.class, args);
	}

}
