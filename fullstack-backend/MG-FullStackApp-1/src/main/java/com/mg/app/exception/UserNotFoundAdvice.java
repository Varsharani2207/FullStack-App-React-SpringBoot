package com.mg.app.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class UserNotFoundAdvice {

	@ResponseBody
	@ResponseStatus(HttpStatus.NOT_FOUND)
	@ExceptionHandler(UserNotFoundExcpetion.class)
	public Map<String,String> exceptionHanadler(UserNotFoundExcpetion e){
		Map<String,String> errorMap=new HashMap<>();
		
		errorMap.put("error Messagae", e.getMessage() );
		return errorMap;
	}
}
