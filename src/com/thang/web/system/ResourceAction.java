package com.thang.web.system;

import java.io.IOException;
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
import com.thang.entity.system.Resource;
import com.thang.entity.system.Role;
import com.thang.executor.DBExecutor;
import com.thang.model.Condition;
import com.thang.model.Page;

@Controller
public class ResourceAction {

	@Autowired
	private DBExecutor dbe;
	ObjectMapper mapper = new ObjectMapper();
	
	/**
	 * 返回角色的查询数据 
	 * @param page
	 * @param response
	 */
    @RequestMapping("sys/resource/list")
	public void resourceList(Page page,HttpServletResponse response){
		List<Resource> res=dbe.list(Resource.class,new Condition(Resource.class,page));
		response.setContentType("text/html;charset=UTF-8");
    	try {
    		JsonGenerator json=mapper.getFactory().createGenerator(response.getWriter());
    		json.writeStartObject();
            json.writeObjectField("data",res);
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
    @RequestMapping(value="sys/resource/save",method = RequestMethod.POST)
    public String roleSave(Resource res,Model model){
        try{
           dbe.insertOrUpdate(res);
        }catch(Exception e){
           return "{success:false,msg:'1'}";
        }
        return "{success:true,msg:'0'}";
    }

    @ResponseBody
    @RequestMapping(value="sys/resource/delete",method = RequestMethod.POST)
    public String roleDelete(@RequestParam("resource_id")long resource_id,Model model){
        try{
            dbe.delete(Resource.class,resource_id);
        }catch(Exception e){
           return "{success:false,msg:'1'}";
        }
        return "{success:true,msg:'0'}";
    }
    
    /**
     * 判断资源是否存在
     * 1表示存在，0表示不存在
     * @param name
     * @param page
     * @param model
     * @return
     */
    @ResponseBody
    @RequestMapping(value="sys/resource/exist",method = RequestMethod.POST)
    public String roleExist(@RequestParam(value="id",required=true)String id,@RequestParam(value="name",required=true)String name,Page page,Model model){
        try{
        	Resource res=dbe.get(Resource.class, id);
        	if(null!=res&&name.equals(res.getName())){//loginName no change
        		return "{success:true,msg:'0'}";
        	}
            List<Resource> list=dbe.list(Resource.class,new Condition(Resource.class,page).eq("name",name).ne("id", id));
            if(null!=list&&list.size()>0){
                return "{success:true,msg:'1'}";
            }
        }catch(Exception e){
           return "{success:false,msg:'1'}";
        }
        return "{success:true,msg:'0'}";
    }
	
}
