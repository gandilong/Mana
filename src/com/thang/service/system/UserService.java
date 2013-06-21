package com.thang.service.system;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.thang.entity.system.User;

@Component("userService")
public class UserService {

		
	public User getUserById(String id){
		User u=new User();
		u.setUserName("administrator");
		u.setId("abcdefg");
		u.setLoginName("admin");
		u.setSex("1");
		u.setLoginPass("su");
		u.setSalt("admin");
		return u;
	}
	
	public User getUserByName(String loginName){
		User u=new User();
		u.setUserName("administrator");
		u.setId("abcdefg");
		u.setLoginName("admin");
		u.setSex("1");
		u.setLoginPass("su");
		u.setSalt("admin");
		return u;
	}
	
	public List<String> getRoles(String id){
		List<String> roles=new ArrayList<String>();
		//Role admin=new Role();
		//admin.setId("aa");
		//admin.setName("admin");
		roles.add("admin");
		return roles;
	}
	

}
