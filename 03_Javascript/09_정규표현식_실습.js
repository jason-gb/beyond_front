window.onload = () => {

    let submit = document.getElementById('submit');

    submit.addEventListener('click', () => {
        let userId = document.getElementById('userId').value;
        let regExp = /^[a-z][a-z0-9]{3,11}$/;

        if(!regExp.test(userId)){
            alert('아이디를 정상적으로 입력해 주세요.');
            userId.focus();
        }
    });

}