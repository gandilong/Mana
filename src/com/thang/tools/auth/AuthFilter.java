package com.thang.tools.auth;

import org.apache.shiro.web.env.WebEnvironment;
import org.apache.shiro.web.filter.mgt.FilterChainResolver;
import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
import org.apache.shiro.web.servlet.AbstractShiroFilter;
import org.apache.shiro.web.util.WebUtils;

import com.thang.tools.util.SpringContext;

public class AuthFilter extends AbstractShiroFilter {

	
	@Override
	public void init() throws Exception {
		super.init();
		WebEnvironment webEn=WebUtils.getWebEnvironment(getServletContext());
		DefaultWebSecurityManager webSec=(DefaultWebSecurityManager)webEn.getWebSecurityManager();
		setSecurityManager(webSec);
		webSec.setRealm(SpringContext.getBean("dbRealm", DBRealm.class));
		FilterChainResolver resolver=webEn.getFilterChainResolver();
		if(null!=resolver){
			setFilterChainResolver(resolver);
		}
		
	}
	
}
