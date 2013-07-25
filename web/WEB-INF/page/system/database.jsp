<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/include/taglibs.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>数据库管理</title>
</head>
<body>
     
     
     <table height="100%">
          <tbody>
              <tr>
                   <td>
                       <table width="650" height="100%">
				           <thead>
				               <tr>
				                   <th colspan="3" style="font-family: sans-serif;font-size: 13px">
				                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;支持主流数据库：Oracle,MySQL,SQLServer
				                   </th>
				               </tr>
				           </thead>
				           <tbody>
				               <tr>
				                   <td>&nbsp;</td>
				                   <td align="right">
				                         <img alt="database" src='<c:url value="/tools/image/database.png" />'/> 
				                   </td>
				                   <td>
				                         <img alt="database" src='<c:url value="/tools/image/dbase.png" />'/>
				                   </td>
				               </tr>
				           </tbody>
				           <tfoot>
				               &nbsp;
				           </tfoot>
				     </table>
                   </td>
                   <td style="font-family: sans-serif;font-size: 13px">
                       <label>数据库管理：</label>
                       <p>
                           在这里您可以手工备份数据库中的数据，也可以配置自动备份数据库。<br/>
                           在数据出现问题时，也以通过以前备份的数据文件来恢复数据库。
                       </p>
                   </td>
              </tr>
          </tbody>
     </table>
</body>
</html>