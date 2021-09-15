package com.Rastaurant.dto;

public class LoginHelper {

	private String email;
	private String password;
	private String role;
	
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	@Override
	public String toString() {
		return "LoginHelper [email=" + email + ", password=" + password + ", role=" + role + "]";
	}
	
}
