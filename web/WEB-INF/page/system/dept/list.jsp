<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>dept list page</title>
    <script type="text/javascript">
            Ext.onReady(function(){
                    
                 new Thang.view.model.DeptManager({
          	                                 renderTo:Ext.get('deptGrid'),
          	                                 store:new Ext.data.JsonStore({
        		                                           autoDestroy:true,
        		                                           autoLoad:true,
        		                                           url:'sys/dept/list',
        		                                           //baseParams:{'dept_id':<%=request.getAttribute("dept_id")%>},
        		                                           storeId:'DeptManagerStore',
        		                                           root:'data',
        		                                           idProperty:'id',
        		                                           fields:['id','num','name','manager','opt']
        	                                     })//store end
          	                               });//deptmanager end

             });//onready end
    </script>
</head>
<body>
     <div id="deptGrid"></div>
</body>
</html>