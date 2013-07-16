package com.thang.web.system;

import java.io.IOException;
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
import com.thang.entity.system.Role;
import com.thang.executor.DBExecutor;
import com.thang.model.Condition;

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
	public void roleList(HttpServletResponse response){
		List<Role> roles=dbe.list(Role.class,new Condition(Role.class,true));
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
    public String roleExist(@RequestParam("name")String name,Model model){
        try{
            if(null!=name&&name.length()>0){
                List<Role> list=dbe.list(Role.class,new Condition(Role.class,true).eq("name",name));
                if(null!=list&&list.size()>0){
                    return "{success:true,msg:'1'}";
                }
            }
            
        }catch(Exception e){
           return "{success:false,msg:'1'}";
        }
        return "{success:true,msg:'0'}";
    }

   

	
}
