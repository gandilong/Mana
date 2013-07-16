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
import com.thang.entity.system.Role;
import com.thang.entity.system.RoleResource;
import com.thang.entity.system.UserRole;
import com.thang.executor.DBExecutor;
import com.thang.model.Condition;
import com.thang.model.Page;
import com.thang.tools.model.Menu;

/**
 * 系统用户管理模块
 * @author gandilong
 *
 */
@Controller
public class AuthAction {

	@Autowired
	private DBExecutor dbe;
	ObjectMapper mapper = new ObjectMapper();
	  
    //返回部门的查询数据
    @RequestMapping("sys/role/list")
	public void roleList(Page page,HttpServletResponse response){
		List<Role> roles=dbe.list(Role.class,new Condition(Role.class,page));
		response.setContentType("text/html;charset=UTF-8");
    	try {
    		JsonGenerator json=mapper.getFactory().createGenerator(response.getWriter());
    		json.writeStartObject();
            json.writeObjectField("data",roles);
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
    @RequestMapping("sys/role/menu")
    public void roleMenu(HttpServletResponse response){
    	List<Role> roles=dbe.list(Role.class);
    	List<Menu> menu=null;
    	if(null!=roles&&roles.size()>0){
    		menu=new ArrayList<Menu>();
    		for(Role role:roles){
                menu.add(new Menu(String.valueOf(role.getId()),role.getTitle(),null,false)); 
           }
    	}
    	response.setContentType("text/html;charset=UTF-8");
    	try {
    		mapper.writeValue(response.getWriter(),menu);
    	} catch (JsonGenerationException e) {
    		e.printStackTrace();
    	} catch (JsonMappingException e) {
    		e.printStackTrace();
    	} catch (IOException e) {
    		e.printStackTrace();
    	}
    }

    @ResponseBody
    @RequestMapping(value="sys/role/save",method = RequestMethod.POST)
    public String roleSave(Role role,Model model){
        try{
            if(0!=role.getId()){
               dbe.update(role);
            }else{
               dbe.insert(role);    
            }
            
        }catch(Exception e){
           return "{success:false,msg:'1'}";
        }
        return "{success:true,msg:'0'}";
    }

    @ResponseBody
    @RequestMapping(value="sys/role/delete",method = RequestMethod.POST)
    public String roleDelete(@RequestParam("role_id")long role_id,Model model){
        try{
            dbe.delete(Role.class,role_id);
        }catch(Exception e){
           return "{success:false,msg:'1'}";
        }
        return "{success:true,msg:'0'}";
    }

    //1表示存在，0表示不存在
    @ResponseBody
    @RequestMapping(value="sys/role/exist",method = RequestMethod.POST)
    public String roleExist(@RequestParam("name")String name,Page page,Model model){
        try{
            if(null!=name&&name.length()>0){
                List<Role> list=dbe.list(Role.class,new Condition(Role.class,page).eq("name",name));
                if(null!=list&&list.size()>0){
                    return "{success:true,msg:'1'}";
                }
            }
            
        }catch(Exception e){
           return "{success:false,msg:'1'}";
        }
        return "{success:true,msg:'0'}";
    }

    /**
     * 查询登陆用户的所有权数据。
     * @param response
     * @return
     */
   @RequestMapping("sys/user/auth")
   public void userRoleResource(@RequestParam("user_id")String user_id, HttpServletResponse response){
	   List<String> roles_id=dbe.columns(UserRole.class, "role", new Condition(UserRole.class).eq("user", user_id));
	   if(null!=roles_id&&roles_id.size()>0){
		   List<RoleResource> roleR=null;
		   response.setContentType("text/html;charset=UTF-8");
		   if(roles_id.contains("1")){//判断是否是管理员角色
			   try {
		   		    mapper.writeValue(response.getWriter(),"*_*");
		   	   } catch (JsonGenerationException e) {
		   		   e.printStackTrace();
		   	   } catch (JsonMappingException e) {
		   		   e.printStackTrace();
		   	   } catch (IOException e) {
		   		   e.printStackTrace();
		   	   }
		   }else{
		       roleR=dbe.list(RoleResource.class, new Condition(RoleResource.class).in("role", roles_id.toArray()));
		       try {
		   		    mapper.writeValue(response.getWriter(),roleR);
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

	
}
