package com.example.demo.user;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.user.security.JwtUtil;

@Service
public class UserService {
	
	@Autowired
	UserRepository repo;
	
	@Autowired
	private JwtUtil jwtUtil;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	User saveUser(User user) {
		String encodedPassword= passwordEncoder.encode(user.getPassword());
		user.setPassword(encodedPassword);
		user.setDateJoined(LocalDateTime.now());
		user.setRole("user");
		return repo.save(user);
	}
	
	public String login(UserCredentials credentials) {
		User user= repo.findByUsername(credentials.username());
		
		if(user==null) {
			throw new RuntimeException("User not found");
		}
		
		if(passwordEncoder.matches(credentials.password(), user.getPassword())) {
			String token= jwtUtil.generateToken(user.getUsername());
			return token;
		} else {
			throw new RuntimeException("Invalid password");
		}
	}
	
	public String adminLogin(UserCredentials credentials) {
		User user= repo.findByUsername(credentials.username());
		
		if(user==null) {
			throw new RuntimeException("User not found");
		}
		if(user.getRole().equalsIgnoreCase("admin")) {
			if(passwordEncoder.matches(credentials.password(), user.getPassword())) {
				String token= jwtUtil.generateToken(user.getUsername());
				return token;
			} else {
				throw new RuntimeException("Invalid password");
			}
		} else {
			throw new RuntimeException("Invalid user");
		}
		
		
	}
	
	public User getUserDetails(String username) {
		return repo.findByUsername(username);
	}
	
	List<User> getAllUsers() {
		return repo.findAll();
	}
	
	User updateUserDetails(User user) {
		User userDetails= repo.findByUsername(user.getUsername());
		user.setId(userDetails.getId());
		user.setPassword(userDetails.getPassword());
		user.setRole("user");
		return repo.save(user);
	}
	
	String updatePassword(ChangePassword password) {
		User userDetails= repo.findByUsername(password.username());
		if(passwordEncoder.matches(password.oldPassword(), userDetails.getPassword())) {
			String encodedPassword= passwordEncoder.encode(password.newPassword());
			userDetails.setPassword(encodedPassword);
			repo.save(userDetails);
			return "Password updated Successfully";
		}else {
//			throw new RuntimeException("Invalid password");
			return "Invalid old password";
		}
	}
	
	String changePassword(User user) {
		User userDetails= repo.findByEmail(user.getEmail());
		System.out.println(userDetails);
		if(userDetails!=null) {
			String encodedPassword= passwordEncoder.encode(user.getPassword());
			userDetails.setPassword(encodedPassword);
			repo.save(userDetails);
			return "Password changed successfully";
		} 
		else {
			return "Invalid email";
		}
	}
	
	public long getUsersCount() {
		return repo.count();
	}
	

}

