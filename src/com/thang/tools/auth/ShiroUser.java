package com.thang.tools.auth;

import java.io.Serializable;

public class ShiroUser implements Serializable{

	private static final long serialVersionUID = -503766579236177390L;
	private String id;
	private String userName;
	private String loginName;
	
	
	
	public ShiroUser(String id, String userName, String loginName) {
		super();
		this.id = id;
		this.userName = userName;
		this.loginName = loginName;
	}
	
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getLoginName() {
		return loginName;
	}
	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}
	
	/**
	 * 本函数输出将作为默认的<shiro:principal/>输出.
	 */
	@Override
	public String toString() {
		return loginName;
	}
	
	/**
	 * 重载hashCode,只计算loginName;
	 */
	@Override
	public int hashCode() {
		return loginName.hashCode();
	}

	
	/**
	 * 重载equals,只计算loginName;
	 */
	@Override
	public boolean equals(Object obj) {
		if (this == obj){
			return true;
		}else if (obj == null){
			return false;
		}else if (getClass() != obj.getClass()){
			return false;
		}
		ShiroUser other = (ShiroUser) obj;
		if(loginName == null){
			if (other.loginName != null){
				return false;
		    }else if(!loginName.equals(other.loginName)){
			    return false;
		    }
		}
		return true;
	}
	
}
