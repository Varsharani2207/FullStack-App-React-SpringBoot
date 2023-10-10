package com.mg.app.model;

import java.util.List;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.JoinColumn;

@Entity
public class User {
		@javax.persistence.Id
		@GeneratedValue
		private Long id;
		
		private String name;
		private String email;
		private String phone;
		private String gender;
		//private String hearAbout;
	    @ElementCollection
	    @CollectionTable(name = "hear_about", joinColumns = @JoinColumn(name = "id"))
	    @Column(name = "hear_about")
	    private List<String> hearAbout;
	    
		private String city;
		private String state;
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
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