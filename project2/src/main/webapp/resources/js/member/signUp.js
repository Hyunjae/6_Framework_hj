
// JS 객체를 이용한 유효성 검사 결과 저장 객체
// JS 객체 ={"K":V, "K":V, ...} (Map 형식)

// 변수명.key 또는 변수명["key"]를 이용하면 객체 속성 접근 가능
const checkObj = {
    "memberEmail" : false, 
    "memberPw" : false,
    "memberPwConfirm" : false,
    "memberNickName" : false,
    "memberTel" : false
}

// 회원 가입 양식이 제출되었을 때
document.getElementById("signUp-frm").addEventListener("submit", function(event){

    // checkObj에 속성 중 하나라도 false가 있다면 제출 이벤트 제거

    // for in 구문 : 객체의 key 값을 순서대로 접근하는 반복문
    // [작성법]
    // for(let 변수명 in 객체명)
    //         변수명 == key
    // -> 객체에서 순서대로 key를 하나씩 꺼내 왼쪽 변수에 저장

    // checkObj 속성 하나를 꺼내 값을 검사했는데 false인 경우
    for(let key in checkObj){
        
        let str;
        
        if(!checkObj[key]) {
            switch(key){
                case "memberEmail" : str="이메일이 유효하지 않습니다."; break;
                case "memberPw" : str="비밀번호가 유효하지 않습니다."; break;
                case "memberPwConfirm" : str="비밀번호 확인이 유효하지 않습니다."; break;
                case "memberNickName" : str="닉네임이 유효하지 않습니다."; break;
                case "memberTel" : str="전화번호가 유효하지 않습니다."; break;
            }
            alert(str); // 대화상자 출력

            // 유효하지 않은 입력으로 포커스 이동
            document.getElementById(key).focus();
            event.preventDefault(); // 제출 이벤트 제거
            return; // 함수 종료
        }
    }

})


// 이메일 유효성 검사
const memberEmail = document.getElementById("memberEmail"); // input
const emailMessage = document.getElementById("emailMessage"); //span

memberEmail.addEventListener("keyup", function(){
    // 문자가 입력되지 않은 경우
    if(memberEmail.value.trim().length == 0){
        emailMessage.innerText = "메일을 받을 수 있는 이메일을 입력해주세요.";
        memberEmail.value = "";

        // confirm, error 클래스 제거 -> 검정 글씨로 만들기
        emailMessage.classList.remove("confirm", "error");

        // 유효성 검사 확인 객체에 현재 상태 저장
        checkObj.memberEmail = false;
        return;
    }

    // 정규표현식을 이용한 유효성 검사
    const regEx = /[A-Za-z\d\-\_]{4,10}@[가-힣\w\-\_]+(\.\w+){1,3}$/;

    if(regEx.test(memberEmail.value)){ // 유효한 경우

        emailMessage.innerText = "유효한 이메일 형식입니다.";
        emailMessage.classList.add("confirm");
        emailMessage.classList.remove("error");
        checkObj.memberEmail = true;

        
    } else { // 유효하지 않은 경우
        emailMessage.innerText = "유효하지 않은 이메일 형식입니다.";
        emailMessage.classList.add("error");
        emailMessage.classList.remove("confirm");
        checkObj.memberEmail = false;
    }

});


// 비밀번호 유효성 검사
const memberPw = document.getElementById("memberPw");
const memberPwConfirm = document.getElementById("memberPwConfirm");
const pwMessage = document.getElementById("pwMessage");

memberPw.addEventListener("input", function(){
    // 비밀번호가 입력되지 않은 경우
    if(memberPw.value.trim().length==0) {
        pwMessage.innerText = "영어,숫자,특수문자(!,@,#,-,_) 6~20글자 사이로 입력해주세요.";
        memberPw.value ="";
        pwMessage.classList.remove("confirm", "error"); // 검정글씨

        checkObj.memberPw = false;
        return;
    }

    // 비밀번호 정규표현식 검사
    const regEx = /^[a-zA-Z\d!@#\-\_]{6,20}$/;

    if(regEx.test(memberPw.value)){ // 유효한 비밀번호
        
        checkObj.memberPw = true;
        // 유효한 비밀번호 + 확인 작성 X
        if(memberPwConfirm.value.trim().length == 0){
            pwMessage.innerText = "유효한 비밀번호 형식입니다.";
            pwMessage.classList.add("confirm");
            pwMessage.classList.remove("error");
        } else { // 유효한 비밀번호 + 확인작성 O -> 같은지 비교
                // 비밀번호가 입력될 때 비밀번호 확인에 작성된 값과 일치하는 경우
            if(memberPw.value == memberPwConfirm.value) {
                pwMessage.innerText = "비밀번호가 일치합니다.";
                pwMessage.classList.add("confirm");
                pwMessage.classList.remove("error");
                checkObj.memberPwConfirm = true;
            } else {
                pwMessage.innerText = "비밀번호가 일치하지 않습니다.";
                pwMessage.classList.add("error");
                pwMessage.classList.remove("confirm");
                checkObj.memberPwConfirm = false;
            }
        }
        
    } else { // 유효하지 않음
        pwMessage.innerText = "유효하지 않은 비밀번호 형식입니다.";
        pwMessage.classList.add("error");
        pwMessage.classList.remove("confirm");
        checkObj.memberPw = false;
    }

});

// 비밀번호 확인 유효성 검사
memberPwConfirm.addEventListener("input", function(){
    // 비밀번호와 비밀번호 확인이 같은지 검사
    
    // 비밀번호가 유효할 경우에만 비밀번호 vs 확인 같은지 비교
    if(checkObj.memberPw){ // 비밀경우가 유효한 경우
        if(memberPw.value == memberPwConfirm.value) {
            pwMessage.innerText = "비밀번호가 일치합니다."
            pwMessage.classList.add("confirm");
            pwMessage.classList.remove("error");
            checkObj.memberPwConfirm = true;
        } else {
            pwMessage.innerText = "비밀번호가 일치하지 않습니다.";
            pwMessage.classList.add("error");
            pwMessage.classList.remove("confirm");
            checkObj.memberPwConfirm = false;
        }
    } else { // 비밀번호가 유효하지 않은 경우
        checkObj.memberPwConfirm = false;
    }

});


// 닉네임 유효성 검사
const memberNickName = document.getElementById("memberNickname");
const nickMessage = document.getElementById("nickMessage");

memberNickName.addEventListener("input", function(){
    // 닉네임에 문자가 입력되지 않은 경우
    if(memberNickName.value.trim().length==0){
        nickMessage.innerText = "한글,영어,숫자로만 2~10글자";
        nickMessage.classList.remove("confirm","error");
        checkObj.memberNickName = false;
        return;
    }

    // 닉네임 정규표현식 검사
    const regEx = /^[가-힣\w]{2,10}/;

    if(regEx.test(memberNickName.value)){ // 유효한 경우
        
        // ** 닉네임 중복검사 코드 추가 예정 **
        
        nickMessage.innerText = "유효한 닉네임 형식 입니다.";
        nickMessage.classList.add("confirm");
        nickMessage.classList.remove("error");
        checkObj.memberNickName = true;
    } else{ // 유효하지 않을 경우
        nickMessage.innerText = "유효하지 않은 닉네임 형식 입니다.";
        nickMessage.classList.remove("confirm");
        nickMessage.classList.add("error");
        checkObj.memberNickName = false;
    }
});


// 전화번호 유효성 검사
const memberTel = document.getElementById("memberTel"); // input
const telMessage = document.getElementById("telMessage"); // span

memberTel.addEventListener("input", function(){

    // 문자가 입력되지 않은 경우
    if(memberTel.value.trim().length == 0){
        telMessage.innerText = "전화번호를 입력해주세요.('-' 제외)";
        telMessage.classList.remove("confirm","error");
        checkObj.memberTel = false;
        return;
    }

    // 전화번호 정규표현식 검사
    const regEx = /^0(1[01679]|2|[3-6][1-5]|70)[1-9]\d{2,3}\d{4}$/;

    if(regEx.test(memberTel.value)){
        telMessage.innerText="유효한 전화번호 형식입니다.";
        telMessage.classList.add("confirm");
        telMessage.classList.remove("error");
        checkObj.memberTel = true;
    } else {
        telMessage.innerText="유효하지 않은 전화번호 형식입니다.";
        telMessage.classList.add("error");
        telMessage.classList.remove("confirm");
        checkObj.memberTel = false;

    }

});