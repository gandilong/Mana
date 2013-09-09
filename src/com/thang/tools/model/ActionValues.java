package com.thang.tools.model;

import java.util.Enumeration;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;

public class ActionValues extends HashMap<String, Object> {

	
	private static final long serialVersionUID = 1L;
	
	
	public ActionValues(){}
	
	@SuppressWarnings("unchecked")
	public ActionValues(HttpServletRequest request){
		String name=null;
		Enumeration<String> paramNames=request.getParameterNames();
		Enumeration<String> attrNames=request.getAttributeNames();
		
		while(paramNames.hasMoreElements()){
			name=paramNames.nextElement();
			if(request.getParameterValues(name).length>1){
				put(name, request.getParameterValues(name));
			}else{
				put(name, request.getParameter(name));	
			}
		}
		
		while(attrNames.hasMoreElements()){
			name=attrNames.nextElement();
			put(name,request.getAttribute(name));
		}
	}

}
