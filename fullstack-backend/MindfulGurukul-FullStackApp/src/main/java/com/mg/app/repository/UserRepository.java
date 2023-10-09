package com.mg.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mg.app.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
