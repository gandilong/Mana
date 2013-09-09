package com.thang.entity.system;

import com.thang.model.mate.Table;

@Table("sys_user_role_info")
public class UserRole {

	private long id;
	private String user;
	private String role;
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	 
}
