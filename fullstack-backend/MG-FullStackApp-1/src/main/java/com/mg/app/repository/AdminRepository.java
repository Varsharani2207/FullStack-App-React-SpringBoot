package com.mg.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mg.app.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {

	Admin findByUsernameAndPassword(String username, String password);

}
