package com.thang.web.system;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.thang.entity.system.Dept;
import com.thang.entity.system.User;
import com.thang.executor.DBExecutor;
import com.thang.model.Condition;
import com.thang.model.Page;
import com.thang.tools.model.Tree;

@Controller
public class DeptAction {

	@Autowired
	private DBExecutor dbe;
	ObjectMapper mapper = new ObjectMapper();
	
	/**
	 * 保存部门信息操作
	 * @param dept
	 * @param model
	 * @return
	 */
    @ResponseBody
    @RequestMapping(value="sys/dept/save",method = RequestMethod.POST)
    public String deptSave(Dept dept,Model model){
        try{
            dbe.insertOrUpdate(dept);
        }catch(Exception e){
           return "{success:false,msg:'1'}";
        }
        return "{success:true,msg:'0'}";
    }
    
    /**
     * 删除部门信息操作
     * @param user_id
     * @param model
     * @return
     */
    @ResponseBody
    @RequestMapping(value="sys/dept/delete",method = RequestMethod.POST)
    public String deptDelete(@RequestParam("user_id")long user_id,Model model){
        try{
            dbe.delete(User.class,user_id);
        }catch(Exception e){
           return "{success:false,msg:'1'}";
        }
        return "{success:true,msg:'0'}";
    }
    
    /**
     * 返回部门的查询数据
     * @param response
     * @param page
     */
    @RequestMapping("sys/dept/list")
	public void deptList(HttpServletResponse response,Page page){
		List<Dept> depts=dbe.list(Dept.class,new Condition(Dept.class,page));
		response.setContentType("text/html;charset=UTF-8");
    	try {
    		JsonGenerator json=mapper.getFactory().createGenerator(response.getWriter());
    		json.writeStartObject();
            json.writeObjectField("data",depts);
    		json.writeEndObject();
            json.close();
    	} catch (JsonGenerationException e) {
    		e.printStackTrace();
    	} catch (JsonMappingException e) {
    		e.printStackTrace();
    	} catch (IOException e) {
    		e.printStackTrace();
    	}
	}

    /**
     * 返回部门的树结构数据
     * @param response
     */
	@RequestMapping("sys/dept/tree")
	public void deptTreeList(HttpServletResponse response){
		List<Dept> depts=dbe.list(Dept.class);
		List<Tree> tree=null;
        response.setContentType("text/html;charset=UTF-8");
        if(null!=depts&&depts.size()>0){
        	tree=new ArrayList<Tree>();
        	for(Dept dept:depts){
    		    tree.add(new Tree(String.valueOf(dept.getId()),dept.getName(),true));	
    		}
        	
    		try {
    			mapper.writeValue(response.getWriter(),tree);
    		} catch (JsonGenerationException e) {
    			e.printStackTrace();
    		} catch (JsonMappingException e) {
    			e.printStackTrace();
    		} catch (IOException e) {
    			e.printStackTrace();
    		}
        	
        }
	}
}
