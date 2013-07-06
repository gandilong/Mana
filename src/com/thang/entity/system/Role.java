package com.thang.entity.system;


import com.thang.model.mate.Table;


@Table("sys_role_info")
public class Role {

	private String id;
	private String name;
	private String opt;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
    public String getOpt() {
		return opt;
	}
	public void setOpt(String opt) {
		this.name = opt;
	}


	
}
