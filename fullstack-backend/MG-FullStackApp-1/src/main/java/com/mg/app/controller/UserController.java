package com.mg.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mg.app.exception.UserNotFoundExcpetion;
import com.mg.app.model.User;
import com.mg.app.repository.UserRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	@PostMapping("/addUser")
	User addNewUser(@RequestBody User newUser) {
		return userRepository.save(newUser);
	}
	
	@GetMapping("/getUsers")
	List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
	@GetMapping("/getUser/{id}")
	User getUserById(@PathVariable Long id) {
		return userRepository.findById(id).orElseThrow(()-> new UserNotFoundExcpetion(id));
				
	}
	
	@PutMapping("/getUser/{id}")
	User updateUser(@RequestBody User newUser,@PathVariable Long id) {
		return userRepository.findById(id).map(user->{
			user.setName(newUser.getName());
			user.setEmail(newUser.getEmail());
			user.setPhone(newUser.getPhone());
			user.setGender(newUser.getGender());
			user.setHearAbout(newUser.getHearAbout());
			user.setCity(newUser.getCity());
			return userRepository.save(user);
		}).orElseThrow(()-> new UserNotFoundExcpetion(id));
		
	}
	
	@DeleteMapping("/getUser/{id}")
	String deleteUser(@PathVariable Long id) {
		if(!userRepository.existsById(id)) {
			throw new UserNotFoundExcpetion(id);
		}
		userRepository.deleteById(id);
		return "User with Id :  "+id+"  is deleted!!!";
				}
}
