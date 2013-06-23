package com.thang.entity.application;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

public class Insend {

	private String id;
	private String title;
	private String author;
	private String createTime;
	
	@Id
	@GeneratedValue(generator="uuidGenerator")      
	@GenericGenerator(name="uuidGenerator",strategy="uuid")
	@Column(name="id", unique=true, nullable=false)
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getCreateTime() {
		return createTime;
	}
	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}
	
}
