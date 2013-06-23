package com.thang.entity.system;


import com.thang.model.mate.Table;

@Table("sys_dept_info")
public class Dept {

	private long id;
	private String num;//部门编号
	private String name;//部门名称
	private String manager;//部门领导，用户ID
	private String opt;
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getManager() {
		return manager;
	}
	public void setManager(String manager) {
		this.manager = manager;
	}
	public String getOpt() {
		return opt;
	}
	public void setOpt(String opt) {
		this.opt = opt;
	}
	public String getNum(){
		return num;
	}
	public void setNum(String num){
		this.num=num;
	}
	
}
