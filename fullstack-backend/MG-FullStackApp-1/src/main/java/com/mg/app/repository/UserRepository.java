package com.mg.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mg.app.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
