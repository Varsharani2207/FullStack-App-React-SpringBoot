package com.mg.app.model;

import java.util.List;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

@Entity
public class Admin {
	
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long id;
		
		private String username;
		private String email;
		private String password;
		private String phone;
		private String gender;
		//private String hearAbout;
	    @ElementCollection
	    @CollectionTable(name = "hear_about", joinColumns = @JoinColumn(name = "id"))
	    @Column(name = "hear_about")
	    private List<String> hearAbout;
	    
		private String city;
		private String state;
		
		public Admin() {
			super();
		}
		public Admin(Long id, String username, String email, String password, String phone, String gender,
				List<String> hearAbout, String city, String state) {
			super();
			this.id = id;
			this.username = username;
			this.email = email;
			this.password = password;
			this.phone = phone;
			this.gender = gender;
			this.hearAbout = hearAbout;
			this.city = city;
			this.state = state;
		}
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getUsername() {
			return username;
		}
		public void setUsername(String username) {
			this.username = username;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getPhone() {
			return phone;
		}
		public void setPhone(String phone) {
			this.phone = phone;
		}
		public String getGender() {
			return gender;
		}
		public void setGender(String gender) {
			this.gender = gender;
		}
		public List<String> getHearAbout() {
			return hearAbout;
		}
		public void setHearAbout(List<String> hearAbout) {
			this.hearAbout = hearAbout;
		}
		public String getCity() {
			return city;
		}
		public void setCity(String city) {
			this.city = city;
		}
		public String getState() {
			return state;
		}
		public void setState(String state) {
			this.state = state;
		}
		

				
}