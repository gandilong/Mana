package com.thang.web.system;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestMethod;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.JsonGenerator;
import com.thang.entity.system.Dept;
import com.thang.entity.system.Role;
import com.thang.entity.system.User;
import com.thang.entity.system.UserRole;
import com.thang.executor.DBExecutor;
import com.thang.model.Condition;
import com.thang.tools.model.Tree;

/**
 * 系统用户管理模块
 * @author gandilong
 *
 */
@Controller
public class UserAction {

	@Autowired
	private DBExecutor dbe;
	ObjectMapper mapper = new ObjectMapper();
	

    
    //返回部门的查询数据
    @RequestMapping("sys/dept/list")
	public void deptList(HttpServletResponse response){
		List<Dept> depts=dbe.list(Dept.class,new Condition(Dept.class,true));
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

    //返回部门的树结构数据
	@RequestMapping("sys/dept/tree")
	public void deptTreeList(HttpServletResponse response){
		List<Dept> depts=dbe.list(Dept.class);
		List<Tree> tree=null;
        response.setContentType("text/html;charset=UTF-8");
        if(null!=depts&&depts.size()>0){
        	tree=new ArrayList<Tree>();
        	for(Dept dept:depts){
    		    tree.add(new Tree(String.valueOf(dept.getId()),dept.getName(),true,false));	
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
	
         
    //保存用户信息操作
    @ResponseBody
    @RequestMapping(value="sys/user/save",method = RequestMethod.POST)
    public String userSave(User user,Model model){
        try{
            if(0!=user.getId()){
               dbe.update(user);
            }else{
               dbe.insert(user);    
            }
        	
        }catch(Exception e){
           return "{success:false,msg:'1'}";
        }
        return "{success:true,msg:'0'}";
    }

   
    //保存部门信息操作
    @ResponseBody
    @RequestMapping(value="sys/dept/save",method = RequestMethod.POST)
    public String deptSave(Dept dept,Model model){
        try{
            if(0!=dept.getId()){
               dbe.update(dept);
            }else{
               dbe.insert(dept);    
            }
        }catch(Exception e){
           return "{success:false,msg:'1'}";
        }
        return "{success:true,msg:'0'}";
    }

    //删除用户信息操作
    @ResponseBody
    @RequestMapping(value="sys/user/delete",method = RequestMethod.POST)
    public String userDelete(@RequestParam("user_id")long user_id,Model model){
        try{
            dbe.delete(User.class,user_id);
        }catch(Exception e){
           return "{success:false,msg:'1'}";
        }
        return "{success:true,msg:'0'}";
    }

    //删除部门信息操作
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


	
    //返回指定部门的用户
	@RequestMapping("sys/user/list")
	public void deptUserList(@RequestParam("dept_id") String dept_id,HttpServletResponse response){
		List<User> users=dbe.list(User.class, new Condition(User.class,true).eq("dept", dept_id));
        response.setContentType("text/html;charset=UTF-8");
        if(null!=users&&users.size()>0){
    		try {
    			JsonGenerator json=mapper.getFactory().createGenerator(response.getWriter());
        		json.writeStartObject();
                json.writeObjectField("data",users);
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
	}

    //返回用户列表menu所需要的数据。
    @RequestMapping("sys/user/menu")
    public void userMenu(@RequestParam("user_id") String user_id,@RequestParam("dept_id") long dept_id,@RequestParam("role_id") long role_id,HttpServletResponse response){

        List<UserRole> user_roles=dbe.list(UserRole.class,new Condition(UserRole.class,false).eq("user",user_id));
        
        List<Role>  roles=dbe.list(Role.class,new Condition(Role.class,false).in("id",null));
        List<Dept> depts=dbe.list(Dept.class);
        List<Tree> deptTree=null;
        List<Tree> authTree=null;
        response.setContentType("text/html;charset=UTF-8");
        if(null!=depts&&depts.size()>0){
            deptTree=new ArrayList<Tree>();
            for(Dept dept:depts){
                if(dept_id==dept.getId()){
                    deptTree.add(new Tree(String.valueOf(dept.getId()),dept.getName(),true,true)); 
                }else{
                    deptTree.add(new Tree(String.valueOf(dept.getId()),dept.getName(),true,false)); 
                }
                
            }
            
            try {
                JsonGenerator json=mapper.getFactory().createGenerator(response.getWriter());
                json.writeStartObject();
                json.writeObjectField("dept",deptTree);
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


        List<User> users=dbe.list(User.class, new Condition(User.class,true).eq("dept", dept_id));
        response.setContentType("text/html;charset=UTF-8");
        if(null!=users&&users.size()>0){
            try {
                JsonGenerator json=mapper.getFactory().createGenerator(response.getWriter());
                json.writeStartObject();
                json.writeObjectField("data",users);
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
    }

	
}
