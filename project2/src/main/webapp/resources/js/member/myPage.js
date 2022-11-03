// 비밀번호 변경 유효성 검사

// 비밀번호 변경 form 요소
const changePwForm = document.getElementById("changePwForm");

if(changePwForm != null){ // changePwForm 요소가 존재할 때만 수행
    // changePwForm이 없는 다른 페이지에서 오류가 나기 때문에 if문 추가
    changePwForm.addEventListener("submit", function(event){

        // ** 이벤트 핸들러 매개변수 event || e **
        // -> 현재 발생한 이벤트 정보를 가지고 있는 event 객체가 전달됨.

        console.log(event);
        
        const currentPw = document.getElementById("currentPw");
        const newPw = document.getElementById("newPw");
        const newPwConfirm = document.getElementById("newPwConfirm");
    
        // 현재 비밀번호가 작성되지 않았을 때
        if(currentPw.value.trim().length==0){
            // alert("현재 비밀번호를 입력해주세요.");
            // currentPw.focus();
            // currentPw.value="";
            alertAndFocus(currentPw, "현재 비밀번호를 입력해주세요.");

            // return false; 
            // -> 인라인 이벤트 모델의 onsubmit = "return 함수명()";에서만 가능
            event.preventDefault();
            // -> 이벤트를 수행하지 못하게 하는 함수
            // --> 기본 이벤트 삭제
            // 이벤트 구문은 해당 이벤트가 발생하는 함수 내에서 작성되는 것이 좋다
            return;
            // 따로 빼서 쓰면 그 함수만 종료하는 것이기 때문에 각각 함수별로 작성해주어야 한다
        }
        
        // 새 비밀번호가 작성되지 않았을 떄
        if(newPw.value.trim().length==0){
            // alert("새 비밀번호를 입력해주세요.");
            // newPw.focus();
            // newPw.value="";
            alertAndFocus(newPw, "새 비밀번호를 입력해주세요.");
            event.preventDefault();
            return;
        }
        
        // 새 비밀번호 확인이 작성되지 않았을 때
        if(newPwConfirm.value.trim().length==0){
            // alert("새 비밀번호 확인을 입력해주세요.");
            // newPwConfirm.focus();
            // newPwConfirm.value = "";

            alertAndFocus(newPwConfirm, "새 비밀번호 확인을 입력해주세요.");
            event.preventDefault();
            return;
        }

        // 비밀번호 정규식 검사

        // 새 비밀번호, 새 비밀번호 확인이 같은지 검사
        if(newPw.value != newPwConfirm.value){
            alert("새 비밀번호가 일치하지 않습니다.");
            newPwConfirm.focus();
            event.preventDefault(); // 기본 이벤트 제거
            return; // 함수 종료
        }
    });
}

// 경고창 출력 + 포커스 이동 + 값 삭제
function alertAndFocus(input, str){
    alert(str);
    input.focus();
    input.value="";
}



// 회원 탈퇴 유효성 검사
// - 인라인 이벤트 모델 또는 표준 이벤트 모델로 작성

// 1) 비밀번호 미작성 -> "비밀번호를 입력해주세요" alert 출력 후 focus 이동
                    // + 내용도 같이 삭제
// 2) 동의 체크가 되지 않은 경우 
//    -> "탈퇴를 동의하시면 체크를 눌러주세요". alert 출력 후 focus 이동
// 3) 1번, 2번이 모두 유효할 때 정말 탈퇴를 진행할 것인지 확인하는 confirm 출력
//    (확인 클릭 -> 탈퇴 / 취소 -> 탈퇴 취소)

function memberDeleteValidate(){
    const memberPw = document.querySelector("[name='memberPw']");
    const agree = document.querySelector("[name='agree']");

    if(memberPw.value.trim().length==0){
        alert("비밀번호를 입력해주세요");
        memberPw.focus();
        memberPw.value="";
        return false;
    }

    if(!agree.checked){
        alert("탈퇴를 동의하시면 체크를 눌러주세요");
        agree.focus();
        return false;
    }

    if(!confirm("정말 탈퇴하시겠습니까?")){
        alert("탈퇴가 취소되었습니다");
        return false;
    }
    
    return true;
}

// const memberDeleteForm = document.getElementById("memberDeleteForm");

// if(memberDeleteForm != null) {
//     memberDeleteForm.addEventListener("submit", function(event){
//         const memberPw = document.getElementById("memberPw");

//         if(memberPw.value.trim().length==0){
//             alert("비밀번호를 입력해주세요");
//             memberPw.focus();
//             memberPw.value="";
//             event.preventDefault();
//             return;
//         }
        
//         const agree = document.getElementById("agree");

//         if(!agree.checked){
//             alert("탈퇴를 동의하시면 체크를 눌러주세요");
//             agree.focus();
//             event.preventDefault();
//             return;
//         }
        
//         // 정말 탈퇴할 것인지 검사
//         if(!confirm("정말 탈퇴하시겠습니까?")){ // 탈퇴 취소
//             alert("탈퇴 취소");
//             event.preventDefault();
//             return;
//         }

//     })
// }