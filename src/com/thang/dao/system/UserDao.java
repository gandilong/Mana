package com.thang.dao.system;


import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.ResultSetHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import javax.sql.DataSource;
import com.thang.entity.system.User;

@Component
public class UserDao {

    private List<User> list=null;
	private QueryRunner qr=null;
	private  BeanListHandler<User> beanListHandle=null;
	private  Logger logger=Logger.getLogger(UserDao.class);

    @Autowired
    public void UserDao(DataSource ds){
        qr=new QueryRunner(ds);
		beanListHandle=new BeanListHandler<User>(User.class);
    }

    //得到所有用户
	public List<User> getUsers(){
		try {
			list=qr.query("select * from "+Table.User_Table+" order by id asc",beanListHandle);
		} catch (SQLException e) {
			logger.error("select table User error! "+e.getMessage());
			e.printStackTrace();
		}
		return list;
	}
	
	
	//得到某一用户
	public User getUser(long id) throws SQLException{
		User user=null;
		user=qr.query("select * from "+Table.User_Table+" t where t.id=?",new ResultSetHandler<User>(){
			public User handle(ResultSet rs) throws SQLException {
				User u=new User();
				if(null!=rs&&true==rs.next()){
					u.setId(rs.getLong("id"));
					u.setUname(rs.getString("uname"));
					u.setUpass(rs.getString("upass"));
					u.setBirth(rs.getString("birth"));
					u.setEmail(rs.getString("email"));
					u.setGrade(rs.getString("grade"));
					u.setOpt(rs.getString("opt"));
				}
				return u;
			}
		},Long.valueOf(id));
		
		return user;
	}
	
	//得到某一用户的相关信息
	public Info getUserInfo(long id) throws SQLException{
		Info info=null;
		info=qr.query("select * from "+Table.User_Info_Table+" t where t.uid=?",new ResultSetHandler<Info>(){
			public Info handle(ResultSet rs) throws SQLException {
				// TODO Auto-generated method stub
				Info i=new Info();
				if(null!=rs&&true==rs.next()){
					i.setId(rs.getLong("id"));
					i.setSection(rs.getString("section"));
					i.setSalary(rs.getString("salary"));
					i.setYear(rs.getString("year"));
					i.setPhone(rs.getString("phone"));
					i.setEducation(rs.getString("education"));
					i.setUid(rs.getString("uid"));
				}
				return i;
			}
		},Long.valueOf(id));
		
		return info;
	}
	
	//得到某一用户的部门信息
	public Section getUserSection(long sid) throws SQLException{
		Section section=null;
		section=qr.query("select * from "+Table.Section_Table+" t ,"+Table.User_Info_Table+" i where t.id=i.section and i.uid=?",new ResultSetHandler<Section>(){
			public Section handle(ResultSet rs) throws SQLException {
				// TODO Auto-generated method stub
				Section s=new Section();
				if(null!=rs&&true==rs.next()){
					s.setId(rs.getLong("id"));
					s.setSection_name(rs.getString("section_name"));
					s.setSection_person(rs.getString("section_person"));
				}
				return s;
			}
		},Long.valueOf(sid));
		
		return section;
	}
	
	//得到某一部门的所有用户信息
	public List<User> getSectionUsers(long sid){
		try {
			list=qr.query("select * from "+Table.User_Table+" t "+Table.User_Info_Table+" i "+Table.Section_Table+" s where t.id=i.uid and i.section=?",beanListHandle,Long.valueOf(sid));
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			logger.equals("select table User error! "+e.getMessage());
			e.printStackTrace();
		}
		
		return list;
	}
	
 
	public boolean save(User u) throws SQLException{
		return qr.update("insert into user(id,uname,upass,birth,email,grade,opt) values(?,?,?,?,?,?,?)",u.getId()==0?null:u.getId(),u.getUname(),u.getUpass(),u.getBirth(),u.getEmail(),u.getGrade(),u.getOpt())>0?true:false;
	}
	
	public boolean update(User u) throws SQLException{
		return qr.update("update user set uname=?,upass=?,birth=?,email=?,grade=?,opt=? where id=?",u.getUname(),u.getUpass(),u.getBirth(),u.getEmail(),u.getGrade(),u.getOpt(),u.getId())>0?true:false;
	}
	
	public boolean deleteUserById(long id) throws SQLException{
		return qr.update("delete from user where id=?",id>0?id:0)>0?true:false;
	}
	
    public boolean deleteUser(User u){
		return true;
	}

}