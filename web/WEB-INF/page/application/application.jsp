<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="../../../tools/include/headerExt.jsp" %>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Application Index</title>

        <script type="text/javascript" src='<c:url value="/tools/Thang/view/left/SystemLeft.js"></c:url>'></script>
        <script type="text/javascript" src='<c:url value="/tools/Thang/view/left/ArchiveLeft.js"></c:url>'></script>
        <script type="text/javascript" src='<c:url value="/tools/Thang/view/left/PersonLeft.js"></c:url>'></script>
        <script type="text/javascript" src='<c:url value="/tools/Thang/view/left/InfoLeft.js"></c:url>'></script>
        <script type="text/javascript" src='<c:url value="/tools/Thang/view/left/OfficeLeft.js"></c:url>'></script>
        <script type="text/javascript" src='<c:url value="/tools/Thang/view/left/HomeLeft.js"></c:url>'></script>

        <script type="text/javascript" src='<c:url value="/tools/Thang/view/center/Center.js"></c:url>'></script>

        <script type="text/javascript" src='<c:url value="/tools/Thang/view/System.js"></c:url>'></script>
        <script type="text/javascript" src='<c:url value="/tools/Thang/view/Archive.js"></c:url>'></script>
        <script type="text/javascript" src='<c:url value="/tools/Thang/view/Person.js"></c:url>'></script>
		    <script type="text/javascript" src='<c:url value="/tools/Thang/view/Office.js"></c:url>'></script>
		    <script type="text/javascript" src='<c:url value="/tools/Thang/view/Info.js"></c:url>'></script>
        <script type="text/javascript" src='<c:url value="/tools/Thang/view/Home.js"></c:url>'></script>

        <script type="text/javascript" src='<c:url value="/tools/Thang/view/Main.js"></c:url>'></script>

        <script type="text/javascript" src='<c:url value="/tools/application.js"></c:url>'></script>
        
        <style type="text/css">
               #header{
				           height: 44px;
					         background: url("${ctx}/tools/icons/main_title_bg.png") repeat-x; 
               }
		    </style>
        
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