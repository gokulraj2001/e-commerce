package com.example.demo.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	UserService service;
	
	@PostMapping("/signup")
	public User signUp(@RequestBody User user) {
		return service.saveUser(user);
	}
	
	@PostMapping("/signin")
	public String signIn(@RequestBody UserCredentials credentials) {
		return service.login(credentials);
	}
	
	@PostMapping("/forgotpassword")
	public String changePassword(@RequestBody User user) {
		return service.changePassword(user);
	}
	
	@PostMapping("/adminsignin")
	public String adminsignIn(@RequestBody UserCredentials credentials) {
		return service.adminLogin(credentials);
	}
	
	

}