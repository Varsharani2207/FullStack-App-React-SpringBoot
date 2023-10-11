package com.mg.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mg.app.dto.LoginDto;
import com.mg.app.exception.UserNotFoundExcpetion;
import com.mg.app.model.Admin;
import com.mg.app.repository.AdminRepository;
import com.mg.app.repository.UserRepository;
import com.mg.app.service.AdminService;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("admin")
public class AdminController {
	
	@Autowired
	private AdminRepository adminRepository;
	
	@Autowired
	private AdminService adminService;
	
	
	@PostMapping("/save")
	Admin addNewUser(@RequestBody Admin newAdmin) {
		return adminRepository.save(newAdmin);
	}
	
	@PostMapping("/authenticate")
	public ResponseEntity<?> authenticate(@RequestBody LoginDto logindto){
		Admin admin =adminService.authenticate(logindto);
		return admin==null?new ResponseEntity<>("Invalid Credentials",HttpStatus.INTERNAL_SERVER_ERROR):ResponseEntity.ok(adminService.authenticate(logindto));
	}
	@GetMapping("/getalladmin")
	List<Admin> getAllUsers(){
		return adminRepository.findAll();
	}
	
		

}
