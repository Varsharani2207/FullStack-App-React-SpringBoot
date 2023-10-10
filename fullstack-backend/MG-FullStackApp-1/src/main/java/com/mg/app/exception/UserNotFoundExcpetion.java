package com.mg.app.exception;

public class UserNotFoundExcpetion  extends RuntimeException{
	
	
	public UserNotFoundExcpetion(long id) {
		super("Could not found the user Id : "+id);
		// TODO Auto-generated constructor stub
	}

	
}
