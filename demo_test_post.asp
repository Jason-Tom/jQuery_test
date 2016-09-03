<%
header("Content-Type:application/json;charset=utf-8");
header("Access-Control-Allow-Origin:*"); 
header("Access-Control-Allow-Methods:POST,GET"); 
dim fname,city
fname=Request.Form("name")
city=Request.Form("city")
Response.Write("Dear " & fname & ". ")
Response.Write("Hope you live well in " & city & ".")
%>