package com.thang.tools.model;

public class Tree {

	private String id;
	private String text;
	private boolean leaf=false;
	private boolean checked=false;
	
	public Tree(){}
	
	public Tree(String id,String text,boolean leaf,boolean checked){
		this.id=id;
		this.text=text;
		this.leaf=leaf;
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
	public boolean isLeaf() {
		return leaf;
	}
	public void setLeaf(boolean leaf) {
		this.leaf = leaf;
	}

	public boolean isChecked() {
		return checked;
	}
	public void setChecked(boolean checked) {
		this.checked = checked;
	}
	
	
	
	
}
