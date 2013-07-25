package com.thang.web.system;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
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
import com.thang.entity.system.RoleResource;
import com.thang.entity.system.User;
import com.thang.entity.system.UserRole;
import com.thang.executor.DBExecutor;
import com.thang.model.Condition;
import com.thang.model.Page;
import com.thang.tools.auth.ShiroUser;

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
	

	/**
	 * 得到自己的ID
	 * @return
	 */
	@ResponseBody
	@RequestMapping("/sys/user/id")
	public String getUserId(){
		Subject sub=SecurityUtils.getSubject();
		ShiroUser suser=(ShiroUser)sub.getPrincipal();
		return suser.getId();
	}
    
    
         
	/**
	 * 保存用户信息操作
	 * @param user
	 * @param model
	 * @return
	 */
    @ResponseBody
    @RequestMapping(value="sys/user/save",method = RequestMethod.POST)
    public String userSave(User user,Model model){
        try{
            dbe.insertOrUpdate(user);
        }catch(Exception e){
           return "{success:false,msg:'1'}";
        }
        return "{success:true,msg:'0'}";
    }


    /**
     * 删除用户信息操作
     * @param user_id
     * @param model
     * @return
     */
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

    

    /**
     * 返回指定部门的用户
     * @param dept_id
     * @param page
     * @param response
     */
	@RequestMapping("sys/user/list")
	public void deptUserList(@RequestParam("dept_id") String dept_id,Page page,HttpServletResponse response){
		List<User> users=dbe.list(new Condition(User.class,page).eq("dept", dept_id));
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
	
	/**
	 * 判断用户是否存在
	 * 1表示存在，0表示不存在
	 * @param name
	 * @param page
	 * @param model
	 * @return
	 */
    @ResponseBody
    @RequestMapping(value="sys/user/exist",method = RequestMethod.POST)
    public String roleExist(@RequestParam(value="id",required=true)String id,@RequestParam(value="name",required=true)String name,Page page,Model model){
        try{
            	User user=dbe.get(User.class, id);
            	if(null!=user&&name.equals(user.getLoginName())){//loginName no change
            		return "{success:true,msg:'0'}";
            	}
                List<User> list=dbe.list(new Condition(User.class,page).eq("loginName",name).ne("id", id));
                if(null!=list&&list.size()>0){
                    return "{success:true,msg:'1'}";
                }
        }catch(Exception e){
           return "{success:false,msg:'1'}";
        }
        return "{success:true,msg:'0'}";
    }
    
    /**
     * 查询用户所具有的权限
     * @param user_id
     * @param response
     */
    @RequestMapping("sys/user/auth")
    public void userRoleResource(@RequestParam("user_id")String user_id, HttpServletResponse response){
 	   List<String> roles_id=dbe.columns("role", new Condition(UserRole.class).eq("user", user_id));
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
 		       roleR=dbe.list(new Condition(RoleResource.class).in("role", roles_id.toArray()));
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
