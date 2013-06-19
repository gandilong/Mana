package com.thang.web.system;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.thang.dao.BaseDao;
import com.thang.entity.system.Dept;
import com.thang.entity.system.User;

@Controller
public class SystemAction {

	private BaseDao dao=null;
	
	@RequestMapping("sys/init/db")
	@ResponseBody
	public String initDB(){
		System.out.println("==============init start=========================");
		Dept dept=new Dept();
		dept.setName("Administrator");
		dept.setOpt("系统最高管理部门");
		
		dao.insertOrUpdate(dept);
		
	    User user=new User();
	    user.setLoginName("admin");
	    user.setLoginPass("su");
	    user.setDept(dept);
	    
	    dao.insertOrUpdate(user);
	    
	    dept.setManager(user);
	    Set<User> set=new HashSet<User>();
	    set.add(user);
	    dept.setUsers(set);
	    dao.insertOrUpdate(dept);
	    System.out.println("==============init stop=========================");
	    dao.closeSession();
	    return "{success:true}";
	}
	
	public BaseDao getDao() {
		return dao;
	}
    @Autowired
	public void setDao(BaseDao dao) {
		this.dao = dao;
	}
	
}
