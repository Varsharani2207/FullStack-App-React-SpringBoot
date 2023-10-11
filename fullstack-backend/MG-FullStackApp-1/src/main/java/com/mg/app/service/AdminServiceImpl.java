package com.mg.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mg.app.dto.LoginDto;
import com.mg.app.model.Admin;
import com.mg.app.repository.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	private AdminRepository adminrepo;
	
	@Override
	public Admin authenticate(LoginDto credential) {
		// TODO Auto-generated method stub
		return adminrepo.findByUsernameAndPassword(credential.getUsername(), credential.getPassword());
	}

}
