<%@include file="/include/headerExt.jsp" %>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>登陆</title>
        <script type="text/javascript" src='<c:url value="/tools/Thang/xcomp/WLogin.js"></c:url>'></script>
        <script type="text/javascript" src='<c:url value="/tools/Thang/xcomp/WMsg.js"></c:url>'></script>
        <script type="text/javascript">
        <!--
              Ext.onReady(function(){
                          var win=new Thang.WLogin();
                          win.show();
                          var result='${error}';
                          if(''!=result){
                        	  var content='<br/><br/><br/><br/><span style="font-size:13px;margin-left:50px;margin-top:80px"><b>用&nbsp;&nbsp;户&nbsp;&nbsp;名&nbsp;&nbsp;或&nbsp;&nbsp;密&nbsp;&nbsp;码&nbsp;&nbsp;无&nbsp;&nbsp;效！</b></span>';
                        	  new Thang.WMsg({title:'<span style="font-size:13px;">认证失败</span>',html:content}).show();
                          }
                          
			  });
        //-->
        </script>
    </head>
    <body>
    </body>
</html>