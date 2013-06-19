package com.thang.dao;

import java.util.List;

import org.apache.commons.beanutils.BeanUtils;
import org.apache.log4j.Logger;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Criterion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.thang.tools.util.HibernateUtils;

@Component
public class BaseDao {

	private HibernateUtils hibernateUtils=null;
	private static Logger logger=Logger.getLogger(BaseDao.class);
	
	public String insertOrUpdate(Object obj){
		String id=null;
		Session session=hibernateUtils.currentSession();
		Transaction trans=session.beginTransaction();
		session.saveOrUpdate(obj);
		trans.commit();
		try {
			id=String.valueOf(BeanUtils.getProperty(obj, "id"));
		} catch (Exception e) {
			e.printStackTrace();
			logger.error(e.getMessage());
			logger.error("保存出错！");
		} 
		return id;
	}
	
	public void delete(Object obj){
		Session session=hibernateUtils.currentSession();
		Transaction trans=session.beginTransaction();
		session.delete(obj);
		trans.commit();
	}
	
	@SuppressWarnings("unchecked")
	public <T>T get(String id,Class<T> cls){
		T obj=null;
		Session session=hibernateUtils.currentSession();
		obj=(T)session.get(cls, id);
		return obj;
	}
	
	@SuppressWarnings("unchecked")
	public <T>T get(long id,Class<T> cls){
		T obj=null;
		Session session=hibernateUtils.currentSession();
		obj=(T)session.get(cls,id);
		return obj;
	}
	
	@SuppressWarnings("unchecked")
	public <T>List<T> list(Class<T> cls){
		List<T> list=null;
		Session session=hibernateUtils.currentSession();
		list=session.createCriteria(cls).list();
		return list;
	}
	
	@SuppressWarnings("unchecked")
	public <T>List<T> query(Class<T> cls,Criterion criterion){
		List<T> list=null;
		Session session=hibernateUtils.currentSession();
		Criteria criter=session.createCriteria(cls);
		criter.add(criterion);
		list=criter.list();
		return list;
	}
	
	public void closeSession(){
		hibernateUtils.closeSession();
	}

	public HibernateUtils getHibernateUtils() {
		return hibernateUtils;
	}

	@Autowired
	public void setHibernateUtils(HibernateUtils hibernateUtils) {
		this.hibernateUtils = hibernateUtils;
	}
	
	
}
