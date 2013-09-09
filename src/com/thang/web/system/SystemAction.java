package com.thang.web.system;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.thang.entity.system.Dept;
import com.thang.entity.system.User;
import com.thang.executor.DBExecutor;
import com.thang.tools.dao.BaseDao;

@Controller
public class SystemAction {

	private BaseDao dao=null;
	private DBExecutor dbe;
	
	@RequestMapping("sys/init/db")
	@ResponseBody
	public String initDB(){
		System.out.println("==============init start=========================");
		
		
	
		Dept dept=new Dept();
		dept.setNum("0");
		dept.setManager("1");
		dept.setName("Administrator");
		dept.setOpt("系统最高管理部门");
		dbe.insert(dept);
		
	    User user=new User();
	    user.setLoginName("admin");
	    user.setLoginPass("su");
	    user.setDept(String.valueOf(dept.getId()));
	    dbe.insert(user);
	    
	  
	    
	    System.out.println("==============init stop=========================");
	    return "{success:true}";
	}
	
	public BaseDao getDao() {
		return dao;
	}
    @Autowired
	public void setDao(BaseDao dao) {
		this.dao = dao;
	}
    @Autowired
	public void setDbe(DBExecutor dbe) {
		this.dbe = dbe;
	}
    
	
}
