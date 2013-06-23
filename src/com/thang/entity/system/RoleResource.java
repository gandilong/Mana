package com.thang.entity.system;

import com.thang.model.mate.Table;

@Table("sys_role_resource_info")
public class RoleResource {

	private long id;
	private String role;
	private String resource;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getResource() {
		return resource;
	}
	public void setResource(String resource) {
		this.resource = resource;
	}
	
	 
	
}
