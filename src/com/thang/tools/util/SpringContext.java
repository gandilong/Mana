package com.thang.tools.util;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.BeanFactoryAware;

public class SpringContext implements BeanFactoryAware{

	private static BeanFactory factory; 
	
	
	public static <T> T getBean(String beanName,Class<T> cls){
		T bean=null;
		if(null!=SpringContext.getFactory()){
			bean=(T)SpringContext.getFactory().getBean(beanName,cls);
		}
		return bean;
	}
	
	
	public static BeanFactory getFactory() {
		return factory;
	}

	@Override
	public void setBeanFactory(BeanFactory beanFactory) throws BeansException {
		SpringContext.factory=beanFactory;
	}

}
