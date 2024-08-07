// 함수
// 1. 함수 선언
// 1) 선언적 함수
function funcTest() {
    console.log('funcTest() - 호출');

    // return 'funcTest() - 호출';
    // return;
}

// 2) 익명 함수
let btn1 = document.getElementById('btn1');

// btn1.onclick = function() {
//     alert('버튼 클릭!');
// };

btn1.addEventListener('click', function() {
    document.getElementById('p1').innerHTML = '익명 함수 실행';
});
// 함수 정의와 동시에 즉시 실행되는 함수. 괄호로 묶으면 선언시 단 한번 실행시킨다.
(
    function (a, b) {
        document.getElementById('p1').innerHTML = `${a} + ${b} = ${a + b}`;
    }
)(30, 70);