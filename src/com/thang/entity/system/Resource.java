package com.thang.entity.system;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="sys_resource_info")
public class Resource {

	private String id;
	private String name;
	private int leaf;//0 is leaf and 1 has leaf
	private Resource parent;
	private String url;
	private String opt;
	
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
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
}
