<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" %>
<%@ page import="java.sql.*" %>
<%@ include file="layout/db_connect.jsp" %>
   
<%
    String sql = " select sno, sname, substr(sno, 1, 1) as grade, substr(sno, 2, 2) as class, substr(sno, 4, 2) as num, "
    		   + " case sgender when 'M' then '남' "
    		   + "      		when 'F' then '여' else '?' end as sgender, "
    		   + " sphone, saddress "
    		   + " from student_tbl_03 ";

    PreparedStatement pstmt = conn.prepareStatement(sql);
    ResultSet rs = pstmt.executeQuery();
%>
   
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="./css/style.css">
<title>학사관리 프로그램</title>
<style>
</style>
</head>
<body>
<header>
    <jsp:include page="layout/header.jsp"></jsp:include>
</header>
<nav>
    <jsp:include page="layout/nav.jsp"></jsp:include>
</nav>
<main id="section">
    <h3 class="title">학생목록</h3>
    <div class="scroll">
        <table class="table_line">
            <tr>
                <th>학번</th>
                <th>이름</th>
                <th>학년</th>
                <th>반</th>
                <th>번호</th>
                <th>성별</th>
                <th>전화번호</th>
                <th>주소</th>
            </tr>
            <% while(rs.next()) { %>
            <tr align="center">
                <td> <%= rs.getString("sno") %> </td>
                <td> <%= rs.getString("sname") %> </td>
                <td> <%= rs.getString("grade") %> </td>
                <td> <%= rs.getString("class") %> </td>
                <td> <%= rs.getString("num") %> </td>
                <td> <%= rs.getString("sgender") %> </td>
                <td> <%= rs.getString("sphone") %> </td>
                <td> <%= rs.getString("saddress") %> </td>
            </tr>
            <% } %>
        </table>
    </div>
</main>
<footer>
    <jsp:include page="layout/footer.jsp"></jsp:include>
</footer>
</body>
</html>
