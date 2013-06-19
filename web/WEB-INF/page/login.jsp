<%@include file="../../tools/include/headerExt.jsp" %>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>登陆</title>
        <script type="text/javascript" src='<c:url value="/tools/comp/LoginWindow.js"></c:url>'></script>
        <script type="text/javascript">
        <!--
              Ext.onReady(function(){
                          var win=new Thang.window.LoginWindow({
                                     id:'loginWin',
                                     modal:true,
                                     login:function(){
                                            console.log('login action');
                                            return;
                                           if(this.getForm().isValid()){
                                             this.getForm().submit({
                                                       url:'login?rememberMe=true',
                                                       success: function(form, action) {
                                                        window.location.href=utils.hostURL+'/web/app';
                                                       },
                                                       failure: function(form, action) {
                                                           switch (action.failureType) {
                                                                case Ext.form.Action.CLIENT_INVALID:
                                                                     Ext.Msg.alert('失败', '表单值无效！');
                                                                     break;
                                                                case Ext.form.Action.CONNECT_FAILURE:
                                                                     Ext.Msg.alert('失败', '请求失败！');
                                                                     break;
                                                                case Ext.form.Action.SERVER_INVALID:
                                                                     Ext.Msg.alert('失败', action.result.msg);
                                                            }
                                                        }
                                                   });//submit end
                                           }// if  end
                                         }//login end

                                   }).show();     
                   win.login();

			  });
        //-->
        </script>
        
    </head>
    <body>
    <%-- 
       <form action="login" method="post">
           UserName:<input name="username" type="text" /><br/>
           Password:<input name="password" type="password"/><br/>
           <input type="checkbox" name="rememberMe" value="true"/>
           <input type="submit" value="submit"/>
       </form>
       --%>
    </body>
</html>