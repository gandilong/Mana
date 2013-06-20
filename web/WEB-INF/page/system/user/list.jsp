<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>user list page</title>
    <script type="text/javascript">
        Ext.onReady(function(){
	         /*
	          var store=new Ext.data.JsonStore({
	        	  autoDestroy: true,
	        	  url:'sys/user/list',
	        	  storeId:'userStore',
	        	  autoLoad:false,
	        	  root:'data',
	        	  idProperty:'id',
	        	  fields:['id','userName','loginName','birth','sex','opt']
	          });
	          
	          store.setBaseParam('dept_id',<%=request.getAttribute("dept_id")%>);
	          store.load();
	          var grid=new Ext.grid.GridPanel({
	        	  store:store,
	        	  sm: new Ext.grid.CheckboxSelectionModel({header:'ID'}),//new Ext.grid.RowSelectionModel({singleSelect:true}),
	        	  cm: new Ext.grid.ColumnModel({
	        		  columns: [
	        		            {id: 'id',header:'ID',width: '.3',sortable: true, dataIndex: 'id'},
	        		            {header: '用户名',width:'.2',dataIndex: 'userName'},
	        		            {header: '登陆名',width:'.2',dataIndex: 'loginName'},
	        		            {header: '出生日期',width:'.2',dataIndex: 'birth'},
	        		            {header: '性别',width:'.1',dataIndex: 'sex'},
	        		            {header: '备注', dataIndex: 'opt'}
	        		        ]
	        	  }),
	        	  height:470,
	        	  frame: true,
	        	  layout:'fit',
	        	  renderTo:Ext.get("userGrid")
	          });
	          
	          
	          
	          var winForm=new Ext.Window({
	              layout:'fit',
	              title:'用户信息',
	              autoShow:false,
	              items:[{
	                  xtype:'form',
	                  defaultType:'textfield',
	                  items:[{
	                      label:'用户名',
	                      name:'userName',
	                  },{
	                      label:'登陆名',
	                      name:'loginName'
	                  },{
	                      label:'登陆密码',
	                      name:'loginPass'
	                  },{
	                      label:'性别',
	                      name:'sex',
	                      xtype:'combo',
	                      data:[[0, '女'],[1, '男']]
	                  },{
	                      label:'出生日期',
	                      name:'birth'
	                  }]
	              }]
	          });
	*/
          new Thang.view.model.UserManager({
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
        	                                     })
          	                               });

        });
        console.log('user list page load...');
     
    </script>
</head>
<body>
     <div id="userGrid"></div>
</body>
</html>