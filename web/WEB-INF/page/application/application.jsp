<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="../../../tools/include/headerExt.jsp" %>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Application Index</title>
        <script type="text/javascript" src='<c:url value="/tools/comp/BaseView.js"></c:url>'></script>
		<script type="text/javascript" src='<c:url value="/tools/comp/HomeView.js"></c:url>'></script>
		<script type="text/javascript" src='<c:url value="/tools/comp/SystemView.js"></c:url>'></script>
        <script type="text/javascript" src='<c:url value="/tools/comp/MainView.js"></c:url>'></script>
        
        <style type="text/css">
               #header{
				      height: 44px;
					  background: url("${ctx}/tools/icons/main_title_bg.png") repeat-x; 
               }
		</style>
        <script type="text/javascript">
        <!--
              Ext.onReady(function(){
                          var mainView=new Thang.view.MainView({id:'mainView'});            
                          //var wmsg=new Thang.XMsg();
                          //wmsg.show();
						  new Ext.Viewport({
										       layout:'border',
											   items:[{
													      height: 48,
                                                          region:'north',
                                                          xtype:'box',
                                                          el:'header',
                                                          border:false,
                                                          margins: '0 0 5 0'
													  },mainView]
										   });
			  });
        //-->
        </script>
        
    </head>
    <body>
        
        <div id="header">
             <div style="float:left;">
                  <img style="margin-left:5px" src="${ctx}/tools/icons/office.png" height="48" width="50"></img>
             </div>
			 
             <div style="float:left;width:93%; margin-top: 7px;margin-left: 10px;margin-right:5px;color: #CCC;">
			      <span style="float:left;font-size:30px;text-shadow:#0CF;color:#000;font-weight:500">信息办公系统</span>
                  <span style="margin-right:5px;float:right;margin-top:10px">
                      <a href="javascript:void(0)" style="padding:5px;font-size:12px"><shiro:principal></shiro:principal></a> | 
                      <a href="javascript:void(0)" style="padding:5px;font-size:12px">帮助</a>
                 </span>
            </div>
         </div>
        
        
    </body>
</html>