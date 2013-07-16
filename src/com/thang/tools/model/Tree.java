package com.thang.tools.model;

public class Tree {

	private String id;
	private String text;
	private boolean leaf=false;
	
	public Tree(){}
	
	public Tree(String id,String text,boolean leaf){
		this.id=id;
		this.text=text;
		this.leaf=leaf;
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

}
