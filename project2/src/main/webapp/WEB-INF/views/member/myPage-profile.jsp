<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>마이페이지</title>
    <link rel="stylesheet" href="/resources/css/main-style.css">
    <link rel="stylesheet" href="/resources/css/myPage-style.css">
    <script src="https://kit.fontawesome.com/f7459b8054.js" crossorigin="anonymous"></script>
</head>
<body>
    <main>
        <jsp:include page="/WEB-INF/views/common/header.jsp" />

        <section class="myPage-content">

            <jsp:include page="/WEB-INF/views/member/sideMenu.jsp" />

            <section class="myPage-main">
                <h1 class="myPage-title">프로필</h1>
                <span class="myPage-subject">
                    프로필 이미지를 변경할 수 있습니다.
                </span>

                <%-- 현재경로 : /member/myPage/profile
                    요청경로(상대경로) : /member/myPage/updateProfile
                    제일 끝에 있는 주소를 요청 주소로 바꾸는 것
                --%>

                <%-- 
                    form 태그의 enctype 속성
                    - 서버로 제출되는 데이터의 인코딩 방법을 지정

                    1) application/x-www-form-urlencoded (기본값)
                        -> 모든 문자를 서버로 전송하기 전에 인코딩
                        == 제출되는 데이터를 모두 문자 형식으로 인코딩
                        (그래서 request.getParameter("")도 다 String으로 받아온 것)
                        == 문자형식만 제출 가능(파일 X)
                    
                    2) multipart/form-data (무조건 POST 방식만 가능)
                        -> 모든 문자를 인코딩 하지 않음
                        == 제출되는 데이터를 인코딩하지 않음
                        == 파일은 파일, 문자열은 문자열
                        (단, 서버에서 파일/문자열에 대한 별도 처리가 필요)
                    -> 추가적인 라이브러리 사용
                --%>
                <form action="updateProfile" method="post" name="myPage-frm"
                enctype="multipart/form-data"
                onsubmit="return profileValidate()">

                    <div class="profile-image-area">
                        <c:if test="${empty loginMember.profileImage}">
                            <img id="profile-image" src="/resources/images/user.png">
                        </c:if>
                        <c:if test="${!empty loginMember.profileImage}">
                            <img id="profile-image" src="${loginMember.profileImage}">
                        </c:if>
                    </div>
                    <span id="delete-image">&times;</span>

                    <div class="profile-btn-area">
                        <label for="image-input">이미지 선택</label>

                        <!-- accept 속성 : 업로드 가능한 파일 타입을 제한하는 속성 -->
                        <input type="file" name="profileImage" id="image-input" accept="image/*">
                        <button>변경하기</button>
                    </div>

                    <div class="myPage-row">
                        <label>이메일</label>
                        <span>${loginMember.memberEmail}</span>
                    </div>

                    <div class="myPage-row">
                        <label>가입일</label>
                        <span>${loginMember.enrollDate}</span>
                    </div>
                    
                </form>

            </section>


        </section>

    </main>
    
    <jsp:include page="/WEB-INF/views/common/footer.jsp" />
    <!-- 다음 주소 api 추가 -->
    <script src="/resources/js/member/myPage.js"></script>

</body>
</html>