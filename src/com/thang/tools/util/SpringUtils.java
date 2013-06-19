package com.thang.tools.util;

import javax.servlet.ServletContext;

import org.springframework.context.ApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

public class SpringUtils {

	private static ApplicationContext applicationContext=null;
	
	private static void init(ServletContext context){
		applicationContext=WebApplicationContextUtils.getWebApplicationContext(context);
	}
	
	public static ApplicationContext getApplicationContext(ServletContext context){
		if(null!=applicationContext){
			return applicationContext;
		}else{
			init(context);
		}
		return WebApplicationContextUtils.getWebApplicationContext(context);
	}
	
	public static Object getBean(ServletContext context,String id){
		return getApplicationContext(context).getBean(id);
	}
	
	public static Object getBean(ServletContext context,Class<?> cls){
		return getApplicationContext(context).getBean(cls);
	}
	
	public static Object getBean(String id){
		if(null!=applicationContext){
			return applicationContext.getBean(id);
		}
		return null;
	}
	
	
}
