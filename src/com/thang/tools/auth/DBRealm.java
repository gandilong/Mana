package com.thang.tools.auth;

import java.util.List;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.thang.entity.system.Resource;
import com.thang.entity.system.Role;
import com.thang.entity.system.RoleResource;
import com.thang.entity.system.User;
import com.thang.entity.system.UserRole;
import com.thang.executor.DBExecutor;
import com.thang.model.Condition;

@Component("dbRealm")
public class DBRealm extends AuthorizingRealm{

    private DBExecutor dbe;
    

	/**
	 * 授权查询回调函数, 进行鉴权但缓存中无用户的授权信息时调用.
	 */
	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principal) {
		ShiroUser shiroUser = (ShiroUser) principal.getPrimaryPrincipal();
		User user =dbe.get(User.class,shiroUser.getId());
		SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
		List<String> roles_id=dbe.columns("role", new Condition(UserRole.class).eq("user", user.getId()));
		info.addRoles(dbe.columns("name", new Condition(Role.class).in("id", roles_id)));
		List<String> resources_id=dbe.columns("resource",new Condition(RoleResource.class).in("role",roles_id));
		info.addStringPermissions(dbe.columns("name",new Condition(Resource.class).in("id",resources_id)));
		return info;
	}

	/**
	 * 认证回调函数,登录时调用.
	 */
	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authcToken) throws AuthenticationException {
		UsernamePasswordToken token = (UsernamePasswordToken) authcToken;
		User user=null;
		List<User> users=dbe.list(new Condition(User.class).eq("loginName", token.getUsername()));
		if(null!=users&&users.size()>0){
			user=users.get(0);
			if(null!=user){
			    return new SimpleAuthenticationInfo(new ShiroUser(String.valueOf(user.getId()), user.getUserName(), user.getLoginName()),user.getLoginPass(),getName());
			}
		}
		return null;
	}

	@Autowired
	public void setDbe(DBExecutor dbe) {
		this.dbe = dbe;
	}
	
	
	
	
}
