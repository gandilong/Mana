package com.thang.web.system;


import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


/**
 * 系统用户管理模块
 * @author gandilong
 *
 */
@Controller
public class AuthAction {


	@ResponseBody
	@RequestMapping("sys/auth")
	public String verify(@RequestParam(value="resource",required=true)String res){
		Subject sub=SecurityUtils.getSubject();
		if(sub.isPermitted(res)){
			return "1";
		}
		return "0";
	}
	
}
