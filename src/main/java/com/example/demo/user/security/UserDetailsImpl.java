package com.example.demo.user.security;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class UserDetailsImpl implements UserDetails {
	
	private String username;
	private String password;
	String role;
	
	

	public UserDetailsImpl(String username, String password, String role) {
		super();
		this.username = username;
		this.password = password;
		this.role = role;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		
		List<SimpleGrantedAuthority> simpleGrantedAuthority= Arrays.stream(role.split(","))
				.map(String::trim)
				.map(String::toUpperCase)
				.map(role->"ROLE_"+role)
				.map(SimpleGrantedAuthority::new)
				.collect(Collectors.toList());
		return simpleGrantedAuthority;
	}

	@Override
	public String getPassword() {
		
		return password;
	}

	@Override
	public String getUsername() {
		
		return username;
	}

	@Override
	public boolean isAccountNonExpired() {
		
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		
		return true;
	}

	@Override
	public boolean isEnabled() {
		
		return true;
	}


	

}
