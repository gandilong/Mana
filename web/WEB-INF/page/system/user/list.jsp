<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>user list page</title>
    <script type="text/javascript">
        Ext.onReady(function(){
	       
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
        	                                     })//store end
          	                               });//user manager end

          });//on ready end
        console.log('user list page load...');
     
    </script>
</head>
<body>
     <div id="userGrid"></div>
</body>
</html>