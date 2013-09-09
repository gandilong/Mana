package com.thang.web;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.LockedAccountException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.thang.tools.auth.ShiroUser;

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
	public String login(@RequestParam(value="username")String uname,@RequestParam(value="password")String upass,@RequestParam(value="remeberme",required=false)boolean remeberme ,Model model) {
		UsernamePasswordToken token=new UsernamePasswordToken(uname, upass);
		Subject sub=SecurityUtils.getSubject();
		if(remeberme){
			token.setRememberMe(true);
		}
		if(!sub.isAuthenticated()){
			try{
				   sub.login(token);
				}catch(UnknownAccountException unkonw){
					model.addAttribute("error", "1");
					return "login";
				}catch(IncorrectCredentialsException ic){
					model.addAttribute("error", "1");//用户名或密码无效！
					return "login";
				}catch(LockedAccountException lae){
					model.addAttribute("error", "2");//账户己停用！
					return "login";
				}catch(AuthenticationException ae){
					model.addAttribute("error", "3");//认证失败！
					return "login";
				}
		}
		
		model.addAttribute("user", ((ShiroUser)sub.getPrincipal()).getId());
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
