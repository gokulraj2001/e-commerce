package com.example.demo.user;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

//@Data
@Getter
@Setter
@ToString
@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String name;
	@Column(unique = true)
	private String username;
	private String email;
	private String mobile;
	private String password;
	private String role;
	@JsonFormat(pattern = "yyyy/MM/dd HH:mm:ss")
	private LocalDateTime dateJoined;
	public User(String name, String username, String email, String mobile, String password, String role,
			LocalDateTime dateJoined) {
		super();
		this.name = name;
		this.username = username;
		this.email = email;
		this.mobile = mobile;
		this.password = password;
		this.role = role;
		this.dateJoined = dateJoined;
	}
	public User(int id) {
		this.id = id;
	}
	
	
	public User() {
	}
	
	
	
}
