package com.thang.web;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class IndexAction {

	@RequestMapping(value="index",method=RequestMethod.GET)	
	public String index(){
		return "redirect:app";
	}
	
	@RequestMapping(value="login",method=RequestMethod.GET)	
	public String login(){
		return "login";
	}
	
	@ResponseBody
	@RequestMapping(value="login",method = RequestMethod.POST)
	public String login(@RequestParam("username")String uname,@RequestParam("password")String upass) {
		UsernamePasswordToken token=new UsernamePasswordToken(uname, upass);
		Subject sub=SecurityUtils.getSubject();
		sub.login(token);
		if(!sub.isAuthenticated()){
			return "{success:true,msg:'authenticated fail'}";
		}
		return "{success:true}";
	}
	
	@RequestMapping(value="cli",method=RequestMethod.GET)	
	public String client(){
		return "client/main";
	}
	
	@RequestMapping(value="app",method=RequestMethod.GET)	
	public String application(){
		return "application/application";
	}
	
	@RequestMapping(value="sys",method=RequestMethod.GET)	
	public String system(){
		return "system/system";
	}
	
	
}
