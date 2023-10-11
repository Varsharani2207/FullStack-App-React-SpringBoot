package com.mg.app.service;

import org.springframework.stereotype.Service;

import com.mg.app.dto.LoginDto;
import com.mg.app.model.Admin;

@Service
public interface AdminService {
	Admin authenticate(LoginDto credential) ;
}
