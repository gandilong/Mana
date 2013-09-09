package com.thang.tools.model;

public class DeptPojo {

	private long id;
	private String num;
	private String name;
	private String manager;
	private String opt;
	
	public DeptPojo(){}
	
	public DeptPojo(long id,String num,String name,String manager,String opt){
		this.id=id;
		this.num=num;
		this.name=name;
		this.manager=manager;
		this.opt=opt;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getNum(){
		return num;
	}
	public void setNum(String num){
		this.num=num;
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
	
}
