package com.example.demo.user;

import java.util.List;

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
@RequestMapping("/api")
public class AppController {
	
	@Autowired
	UserService service;
	
	@GetMapping("/count")
	public long getUsersCount() {
		return service.getUsersCount();
	}
	
	@GetMapping("/customers")
	public List<User> getAllUsers() {
		return service.getAllUsers();
	}
	
	@GetMapping("/{username}")
	public User getUserDetails(@PathVariable String username) {
		return service.getUserDetails(username);
	}
	
	@PostMapping("/update")
	public User updateUserDetails(@RequestBody User user) {
		return service.updateUserDetails(user);
	}
	
	@PostMapping("/updatepassword")
	public String updatepassword(@RequestBody ChangePassword password) {
		return service.updatePassword(password);
	}
}
