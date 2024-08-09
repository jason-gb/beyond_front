// 1. 이벤트 핸들러 등록
// 1) 인라인 방식
function eventTest(){
    alert('버튼 클릭!!')
}

window.onload = () => {
    // 2) 프로퍼티 방식
    let btn1 = document.getElementById('btn1');

    btn1.onclick = function (event) {
        console.log(event);
        console.log(event.target);
        console.log(this);
    };

    btn1.onclick = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(this);

        // 이벤트 핸들러 제거
        btn1.onclick = null;
    };

    // 3) 메소드 방식
    let btn2 = document.getElementById('btn2');

    btn2.addEventListener('click', function(event) {
        console.log(event);
        console.log(event.target);
        console.log(this);
        console.log('------------------------------------')
    });

    btn2.addEventListener('click', (event) => {
        console.log(event);
        console.log(event.target);
        console.log(this);
    });

    // 2) 기본 이벤트 제거 2
    let btnSubmit = document.getElementById('btnSubmit');

        btnSubmit.onclick = () => {
            let password1 = document.getElementById('password1').value;
            let password2 = document.getElementById('password2').value;
    
            if (password1 !== password2.value) {
                alert('비밀번호가 일치하지 않습니다.');
                password2.value = '';
                password2.focus();

                return false;
            }
    
            return true;
        };

    // 3) 기본 이벤트 제거 3
    let btnSubmit2 = document.getElementById('btnSubmit2');
    
    btnSubmit2.addEventListener('click',(event) => {
        let userId = document.getElementById('userId').value;
        let regExp = /^[a-zA-Z0-9]{5,12}$/;

        if (!regExp.test(userId)) {
            alert('아이디를 정상적으로 입력해 주세요.');

            event.preventDefault();
        }
    });
    
}