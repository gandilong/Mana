package com.thang.web.system;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DatabaseAction {

	@RequestMapping("sys/database")
	public String index(){
		return "system/database";
	}
	
}
