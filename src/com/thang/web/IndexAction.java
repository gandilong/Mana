package com.thang.web;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class IndexAction {

    /**
     *应用系统索引动作
     */
	@RequestMapping(value="index",method=RequestMethod.GET)	
	public String index(){
		return "redirect:app";
	}
	
	/**
     *返回登陆页面
     */
	@RequestMapping(value="login",method=RequestMethod.GET)	
	public String login(){
		return "login";
	}
	
	/**
     *系统登陆验证
     */
	@RequestMapping(value="login",method = RequestMethod.POST)
	public String login(@RequestParam("username")String uname,@RequestParam("password")String upass) {
		UsernamePasswordToken token=new UsernamePasswordToken(uname, upass);
		Subject sub=SecurityUtils.getSubject();
		sub.login(token);
		if(!sub.isAuthenticated()){
			return "redirect:login";
		}
		return "redirect:app";
	}
	
	/**
     *返回前端系统主页面
     */
	@RequestMapping(value="cli",method=RequestMethod.GET)	
	public String client(){
		return "client/main";
	}
	
    /**
     *返回应用系统主页面
     */
	@RequestMapping(value="app",method=RequestMethod.GET)	
	public String application(){
		return "application/application";
	}
	
	/**
     *返回后台系统主页面
     */
	@RequestMapping(value="sys",method=RequestMethod.GET)	
	public String system(){
		return "system/system";
	}
	
	
}
