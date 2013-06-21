package com.thang.web.system;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
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
import com.thang.dao.BaseDao;
import com.thang.entity.system.Dept;
import com.thang.entity.system.User;
import com.thang.tools.model.Tree;
import com.thang.tools.model.DeptPojo;

/**
 * 系统用户管理模块
 * @author gandilong
 *
 */
@Controller
public class UserAction {

	private BaseDao dao;
	ObjectMapper mapper = new ObjectMapper();
	

    //返回部门的列表页面。
    @RequestMapping("sys/dept")
    public String deptListPage(){
         return "system/dept/list";
    }

    //返回部门的查询数据
    @ResponseBody
    @RequestMapping("sys/dept/list")
	public void deptList(HttpServletResponse response){
		List<Dept> data=dao.list(Dept.class);
		List<DeptPojo> result=null;
        if(null!=data&&data.size()>0){
        	result=new ArrayList<DeptPojo>();
        	for(Dept dept:data){
                if(null!=dept.getManager()){
                   result.add(new DeptPojo(dept.getId(),dept.getNum(),dept.getName(),dept.getManager().getUserName(),dept.getOpt()));
                }else{
                    result.add(new DeptPojo(dept.getId(),dept.getNum(),dept.getName(),"",dept.getOpt()));
                }
               
        	}
            dao.closeSession();
    		try {
    			JsonGenerator json=mapper.getFactory().createGenerator(response.getWriter());
    			json.writeStartObject();
                json.writeObjectField("data",result);
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

    //返回部门的树结构数据
	@RequestMapping("sys/dept/tree")
	@ResponseBody
	public void deptTreeList(HttpServletResponse response){
		List<Tree> tree=null;
		List<Dept> data=dao.list(Dept.class);
        if(null!=data&&data.size()>0){
        	tree=new ArrayList<Tree>();
        	for(Dept dept:data){
    		    tree.add(new Tree(String.valueOf(dept.getId()),dept.getName(),true));	
    		}
        	
    		try {
    			mapper.writeValue(response.getWriter(),tree);
    			dao.closeSession();
    		} catch (JsonGenerationException e) {
    			e.printStackTrace();
    		} catch (JsonMappingException e) {
    			e.printStackTrace();
    		} catch (IOException e) {
    			e.printStackTrace();
    		}
        	
        }
	}
	
    //返回到用户的列表页面
	@RequestMapping("sys/user")
	public String userListPage(@RequestParam("dept_id") String dept_id,Model model){
        model.addAttribute("dept_id",dept_id);
		return "system/user/list";
	}
     
    //保存用户信息操作
    @ResponseBody
    @RequestMapping(value="sys/user/save",method = RequestMethod.POST)
    public String userSave(User user,Model model){
        try{
            dao.insertOrUpdate(user);
        }catch(Exception e){
           return "{success:false,msg"+e.getMessage()+"}";
        }
        return "{success:true,msg:'保存成功'}";
    }


	
    //返回用户的的查询列表数据
    @ResponseBody
	@RequestMapping("sys/user/list")
	public void userList(@RequestParam("dept_id") long dept_id,HttpServletResponse response){
		Dept data=dao.get(dept_id,Dept.class);
		Map<String,Set<User>> users=new HashMap<String,Set<User>>();
		users.put("data",data.getUsers());
        if(null!=data){
    		try {
    			mapper.writeValue(response.getWriter(),users);
    			dao.closeSession();
    		} catch (JsonGenerationException e) {
    			e.printStackTrace();
    		} catch (JsonMappingException e) {
    			e.printStackTrace();
    		} catch (IOException e) {
    			e.printStackTrace();
    		}
        	
        }
	}

	
	public BaseDao getDao() {
		return dao;
	}
    @Autowired
	public void setDao(BaseDao dao) {
		this.dao = dao;
	}
	
}
