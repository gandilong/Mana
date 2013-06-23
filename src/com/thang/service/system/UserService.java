package com.thang.service.system;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.thang.entity.system.User;
import com.thang.executor.DBExecutor;
import com.thang.model.Condition;

@Component("userService")
public class UserService {

	@Autowired
	private DBExecutor dbe;
		
	public User getUserById(String id){
		return dbe.get(User.class,id);
	}
	
	public User getUserByName(String loginName){
		List<User> users=dbe.list(User.class, new Condition(User.class).eq("loginName", loginName));
		if(null!=users&&users.size()>0){
			return users.get(0);
		}
		return null;
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
