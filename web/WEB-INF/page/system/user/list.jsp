<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>user list page</title>
    <script type="text/javascript">
        Ext.onReady(function(){
	       
          var userForm=new Thang.view.system.form.UserForm({id:'userForm'});

          var userGrid=new Thang.view.system.grid.UserGrid({
          	                                 renderTo:Ext.get('userGrid'),
          	                                 store:new Ext.data.JsonStore({
        		                                           autoDestroy:true,
        		                                           autoLoad:true,
        		                                           url:'sys/user/list',
        		                                           baseParams:{'dept_id':<%=request.getAttribute("dept_id")%>},
        		                                           storeId:'UserManagerStore',
        		                                           root:'data',
        		                                           idProperty:'id',
        		                                           fields:['id','userName','sex','loginName','birth','opt']
        	                                     }),//store end
                                             tbar:[{
                                                        text:Ext.bigFont('新增',true),
                                                        iconCls:'icon-add',
                                                        handler:function(btn,evnt){
                                                            var f=userForm.findByType('form')[0].getForm().reset();
                                                            userForm.show();//这个里是调用上面的userForm实例
                                                        }
                                                      },'-',{
                                                        text:Ext.bigFont('删除',true),
                                                        iconCls:'icon-delete'
                                                      },'-',{
                                                         text:Ext.bigFont('修改',true),
                                                         iconCls:'icon-calculator_edit'
                                                   }]
          	                               });//user manager end

          });//on ready end

         
        console.log('user list page load...');
     
    </script>
</head>
<body>
     <div id="userGrid"></div>
     <input id="_dept_id" type="hidden" value="<%=request.getAttribute("dept_id")%>"></input>
</body>
</html>