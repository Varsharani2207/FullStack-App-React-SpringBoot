package com.mg.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class User {

	@javax.persistence.Id
	@GeneratedValue
	private Long id;
	
	private String name;
	private String email;
	private String phone;
	private String gender;
	private String hearAbout;
	private String city;
	private String state;
	
}
