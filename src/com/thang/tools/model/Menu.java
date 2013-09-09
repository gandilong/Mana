package com.thang.tools.model;

public class Menu {

	private String id;
	private String text;
	private String group;
	private boolean checked=false;
	
	public Menu(){}
	
	public Menu(String id,String text,String name,boolean checked){
		this.id=id;
		this.text=text;
		this.group=name;
		this.checked=checked;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public String getGroup() {
		return group;
	}
	public void setGroup(String name) {
		this.group = name;
	}

	public boolean isChecked() {
		return checked;
	}
	public void setChecked(boolean checked) {
		this.checked = checked;
	}
	
	
	
	
}
