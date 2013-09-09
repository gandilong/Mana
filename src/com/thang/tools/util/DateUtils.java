package com.thang.tools.util;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.TimeZone;
public class DateUtils {
	
	public final static String YYYY_MM="yyyy-MM"; 
	public final static String YYYY_MM_DD="yyyy-MM-dd"; 
	public final static String YYYY_MM_DD_HH_mm_ss="yyyy-MM-dd HH:mm:ss"; 
	public final static String YYYY_MM_DD_HH_mm_ss_SS="yyyy-MM-dd HH:mm:ss SS"; 
	public final static SimpleDateFormat sdf=new SimpleDateFormat();
	
	public final static Calendar car=Calendar.getInstance();
	
	static {
		//设置时区为本地默认时区
		sdf.setTimeZone(TimeZone.getDefault());
		car.setTimeZone(TimeZone.getDefault());
	}
	
	/**
	 * ===============================================
	 *         常用方法返回类型为字符串
	 * ================================================
	 */
	
	
	/**
	 * 返回以 YYYY-MM 为格式的时间字符串
	 * @return String
	 */
	public static String getSysmonth(){
		return formatDate(YYYY_MM, null);
	}
	
	public static String getSysmonth(int k){
		return formatDate(YYYY_MM,addMonth(k));
	}
	
	/**
	 * 返回以 YYYY-MM-DD 为格式的时间字符串
	 * @return String
	 */
	public static String getSysdate(){
		return formatDate(YYYY_MM_DD, null);
	}
	
	public static String getSysdate(int k){
		return formatDate(YYYY_MM_DD, addDay(k));
	}
	
	/**
	 * 返回以 YYYY-MM-DD HH:mm 为格式的时间字符串
	 * @return String
	 */
    public static String getSystime(){
		return formatDate(YYYY_MM_DD_HH_mm_ss, null);
	}
    
    /**
     * 返回自定义格式的时间字符串
     * @param format
     * @return String
     */
    public static String formatDate(String format,Date date){
    	sdf.applyPattern(format);
    	if(null!=date){
    		return sdf.format(new Date());
    	}
		return sdf.format(new Date());
	}
  
    public static Date parseDate(String date,String formater){
    	try{
   	        sdf.applyPattern(formater);
   	        return sdf.parse(date);
    	}catch(Exception e){
    		e.printStackTrace();
    	}
    	return null;
   }
    
    /**
     * 返回当前年
     * @return String
     */
    public static String getYear(){
		return getYear(0);
	}
    
    /**
     * 得到指定年，0代表当年,-1代表上一年，1代表下一年。依次类推。
     * @param k
     * @return
     */
    public static String getYear(int k){
    	sdf.applyPattern("yyyy");
    	return sdf.format(addYear(k));
    }
   /**
    * 返回当前月份
    * @return String
    */
    public static String getMonth(){
		return getMonth(0);
	}
    
    /**
     * 得到指定月，0代表当月,-1代表上一月，1代表下一月。依次类推。
     * @param k
     * @return
     */
    public static String getMonth(int k){
    	sdf.applyPattern("MM");
    	return sdf.format(addMonth(k));
    }
    
    /**
     * 返回当天是当月的第几号
     * @return String
     */
    public static String getDay(){
		return getDay(0);
	}
    
    public static String getDay(int k){
    	sdf.applyPattern("dd");
		return sdf.format(addDay(k));
	}
    
    /**
     * 返回当前小时
     * @return String
     */
    public static String getHour(){
    	sdf.applyPattern("HH");
		return sdf.format(new Date());
	}
    
   /**
    * 返回当前分钟
    * @return String
    */
    public static String getMinute(){
    	sdf.applyPattern("mm");
		return sdf.format(new Date());
	}
    /**
     * 返回当天为星期几，如：（星期一，星期二...）
     * @return String
     */
    public static String getWeekDayCN(){
    	sdf.applyPattern("EEEE");
		return sdf.format(new Date());
    } 
    /**
     * 返回当天为星期几，如(1,2,3,4,5,6,7)
     * @return int
     */
    public static int getWeekDayNUM(){
        car.setTimeInMillis(System.currentTimeMillis());
        return (car.get(Calendar.DAY_OF_WEEK)-1)==0?7:(car.get(Calendar.DAY_OF_WEEK)-1);
    } 
    
    /**
	 * ===============================================
	 *         常用方法返回类型为日期类型
	 * ================================================
	 */
    
    /**
     * 得到上一年的日期
     * @return Date
     */
    public static Date getLastYear(){
    	car.setTimeInMillis(System.currentTimeMillis());
        return addYear(-1);
    }
    
    /**
     * 得到上个月的日期
     * @return Date
     */
    public static Date getLastMonth(){
    	car.setTimeInMillis(System.currentTimeMillis());
        return addMonth(-1);
    }
    
    /**
     * 得到昨天的日期
     * @return Date
     */
    public static Date getLastDate(){
    	car.setTimeInMillis(System.currentTimeMillis());
        return addDay(-1);    	
    }
    
    
    /**
	 * ===============================================
	 *         工具方法
	 * ================================================
	 */
    
    public static Date addDay(int k){
    	car.add(Calendar.DAY_OF_MONTH,k);
    	return car.getTime();
    }
    
    public static Date addMonth(int k){
    	car.add(Calendar.MONTH,k);
    	return car.getTime();
    }
    
    public static Date addYear(int k){
    	car.add(Calendar.YEAR,k);
    	return car.getTime();
    }
    
    public static void main(String[] args) {
		System.out.println(DateUtils.formatDate(DateUtils.YYYY_MM_DD_HH_mm_ss,DateUtils.getLastDate()));
	}
    
   
}
