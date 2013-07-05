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
import com.thang.entity.system.Role;
import com.thang.entity.system.User;
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
		List<Role> roles=dbe.list(Role.class);
        System.out.println(roles.get(0).getName());
        System.out.println(roles.get(0).getOpt());
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

    

	
}
