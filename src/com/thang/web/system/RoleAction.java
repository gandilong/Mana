package com.thang.web.system;

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

import com.thang.entity.system.Role;
import com.thang.executor.DBExecutor;
import com.thang.model.Condition;
import com.thang.model.Page;
import com.thang.tools.model.Action;
import com.thang.tools.model.Menu;

@Controller
public class RoleAction extends Action{

	@Autowired
	private DBExecutor dbe;
	
	 
	/**
	 * 返回角色的查询数据 
	 * @param page
	 * @param response
	 */
    @RequestMapping("sys/role/list")
	public void roleList(Page page,HttpServletResponse response){
		List<Role> roles=dbe.list(new Condition(Role.class,page));
		response.setContentType("text/html;charset=UTF-8");
    	printJSON("data",roles);
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
    	printJSON(menu);
    }

    @ResponseBody
    @RequestMapping(value="sys/role/save",method = RequestMethod.POST)
    public String roleSave(Role role,Model model){
        try{
           dbe.insertOrUpdate(role);
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

    /**
     * 判断角色是否存在
     * 1表示存在，0表示不存在
     * @param name
     * @param page
     * @param model
     * @return
     */
    @ResponseBody
    @RequestMapping(value="sys/role/exist",method = RequestMethod.POST)
    public String roleExist(@RequestParam(value="id",required=true)String id,@RequestParam(value="name",required=true)String name,Page page,Model model){
        try{
        	Role role=dbe.get(Role.class, id);
        	if(null!=role&&name.equals(role.getName())){//loginName no change
        		return "{success:true,msg:'0'}";
        	}
            List<Role> list=dbe.list(new Condition(Role.class,page).eq("name",name).ne("id", id));
            if(null!=list&&list.size()>0){
                return "{success:true,msg:'1'}";
            }
        }catch(Exception e){
           return "{success:false,msg:'1'}";
        }
        return "{success:true,msg:'0'}";
    }
}
