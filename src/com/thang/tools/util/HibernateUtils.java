package com.thang.tools.util;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

public class HibernateUtils {

	private static SessionFactory sessionFactory=null;
	private static final ThreadLocal<Session> threadLocal=new ThreadLocal<Session>();
	
	public Session currentSession(){
		Session currentSession=(Session)threadLocal.get();
		if(null==currentSession){
			currentSession=sessionFactory.openSession();
			threadLocal.set(currentSession);
		}
		return currentSession;
	}
	
	public void closeSession(){
		Session currentSession=(Session)threadLocal.get();
		if(null!=currentSession){
			currentSession.close();
		}
		threadLocal.set(null);
	}
	
	public static SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	public static void setSessionFactory(SessionFactory sessionFactory) {
		HibernateUtils.sessionFactory = sessionFactory;
	}
	
}
