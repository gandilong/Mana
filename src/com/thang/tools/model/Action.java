package com.thang.tools.model;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.ModelAttribute;

import com.thang.tools.util.JsonUtils;

public class Action {

	private HttpServletRequest request;
	private HttpServletResponse response;
	private ActionValues values;
	
	@ModelAttribute
	public void init(HttpServletRequest request,HttpServletResponse response){
		this.request=request;
		this.response=response;
		this.values=new ActionValues(request);
		response.setContentType("text/html;charset=UTF-8");
	}
	
	
	protected void printJSON(Object obj){
		PrintWriter out=null;
		try{
			out=response.getWriter();
			out.print(JsonUtils.toJsonStr(obj));
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			out.close();
		}
	}
	
    protected void printJSON(String name,Object obj){
		PrintWriter out=null;
		try{
			out=response.getWriter();
			out.print(JsonUtils.toJsonStr(name, obj));
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			out.close();
		}
	}
    
    public HttpServletRequest getRequest() {
		return request;
	}
    
    public HttpServletResponse getResponse() {
		return response;
	}
	
    public ActionValues getValues() {
		return values;
	}
	
}
