package com.thang.web.system;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.thang.executor.DBExecutor;

/**
 * 系统用户管理模块
 * @author gandilong
 *
 */
@Controller
public class AuthAction {

	@Autowired
	private DBExecutor dbe;
	ObjectMapper mapper = new ObjectMapper();
	  

	
}
