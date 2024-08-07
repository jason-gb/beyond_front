//HTML 태그(요소)에 접근(아이디로 접근)
// document.getElementById('heading').style.backgroundColor = 'red';

// 1. 변수
// 1) 변수 선언
// 전역 변수
str1 = '전역 변수';
var str2 = 'var 전역 변수'
let str3 = 'let 전역 변수'


// 자바스크립트에서 페이지가 모두 로드되면 실행될 함수를 구현할 때 사용한다.
window.onload = function(){
    // document.getElementById('heading').style.backgroundColor = 'red';

    // 지역 변수
    var str4 = 'var 지역 변수';
    let str5 = 'let 지역 변수';
    str6 = '전역 변수';
    var str7;

    // 전역 변수와 동일한 이름의 지역 변수를 선언
    // 전역 변수와 지역 변수가 동일한 이름인 경우, 함수 내부에서 지역 변수가 우선권을 가진다.
    var str2 = 'var 지역 변수'

    console.log(str1);
    console.log(str2);
    console.log(str3);
    console.log(str4);
    console.log(str5);
    console.log(str6);
    console.log(str7);
    console.log('-----------------------------------------------');

    //var, let, const의 차이
    // 1) 중복 선언
    // var 키워드로 선언된 변수는 중복 선언이 가능하다.
    var num = 0;
    console.log(num);

    var num = 10;
    console.log(num);

    // -let, const 키워드로 선언된 변수는 중복 선언이 불가능하다.
    let num2 = 10;
    console.log(num2);
    // let num2 = 20;
    // console.log(num2);

    const num3 = 20;// 선언과 동시에 초기화 해야 한다.
    // num3 = 30; //상수는 값의 재할당이 불가능하다.
    console.log(num3);

    // const num3 = 30;
    // console.log(num3);
    
    console.log('-----------------------------------------------');
    
    // 2) 유효 범위(scope)
    // 함수에서 var 키워드로 선언된 변수는 함수 유효 범위를 갖는다.
    if(true){
        var num4 = 40;

        console.log(num4)
    }
    console.log(num4);

    // 함수에서 let,const 키워드로 선언된 변수는 블록 유효 범위를 갖는다.
    if(true){
        let num5 = 10;
        const num6 = 20;

        console.log(num5)
        console.log(num6)
    }
    // console.log(num5)
    // console.log(num6)

    // 3) 호이스팅
    //  - var 키워드로 선언한 변수는 변수 호이스팅으로 인해 undefined가 출력된다.
    console.log(num7);
    var num7 = 60;
    console.log(num7);

    // - let, const 키워드로 선언한 변수는 변수 호이스팅이 발생하지 않는 것처럼 동작한다.
    // console.log(num8);
    // let num8 = 80;  
    
    // console.log(num9);
    // const num9 = 100;
    
    // 4) 전역 변수 동작 방식
    //      - var 키워드로 선언한 전역 변수는 window 객체 내부에 포함된다.
    //      - let, const 키워드로 선언한 전역 변수는 window 객체에 포함되지 않는다.
    
    console.log(window.str1);
    console.log(window.str2);
    console.log(window.str3);// undefined
}

// 2. 자료형
function typeTest(){
    // alert('typeTest() - 함수 호출!');
    let name = '홍길동';
    let age = 34; // js는 number 타입 하나만 존재
    let height = 175.8;
    let check = false;// boolean
    let hobbies = ['축구', '야구', '농구']; //array

    // object
    let user = {
        id: 'hong123',
        name: '홍길동',
        age: 34,
        height: 175.8,
        // hobbies: ['축구','야구','농구']
        // hobbies: hobbies
        // 위에 미리 정의해놓은 hobbies 사용
        // 변수명이 같으면 한번만 정의 ㄱㄴ
        hobbies
    };

    // new Object();// {} 로 쓰는 것도 가능

    //function
    let addFunc = function(x, y){
        return x + y;
    }

    console.log(hobbies);
    console.log(user);
    console.log(addFunc);// return값을 받고 싶으면 함수 이름만 줘야함 addFunc() => x
    console.log(addFunc(10, 20));

    let div1 = document.getElementById('div1');

    // div1.innerText = '<h4>안녕하세요.</h4>';
    div1.innerHTML = '<h4>안녕하세요.</h4>';
    // typeof 연산자는 값의 자료형을 확인하는 연산자이다.
    div1.innerHTML += `name : ${name}, type: ${typeof(name)}<br>`;
    div1.innerHTML += `age : ${age}, type: ${typeof(age)}<br>`;
    div1.innerHTML += `height : ${height}, type: ${typeof(height)}<br>`;
    div1.innerHTML += `check : ${check}, type: ${typeof(check)}<br>`;
    div1.innerHTML += `hobbies : ${hobbies}, type: ${typeof(hobbies)}<br>`;
    div1.innerHTML += `user : ${user}, type: ${typeof(user)}<br>`;
    div1.innerHTML += `addFunc : ${addFunc}, type: ${typeof(addFunc)}<br>`;

}

// 3. 데이터 형 변환 
function castingTest(){
    let div2 = document.getElementById('div2');

    // 1) 문자열과 숫자의 '+' 연산
    div2.innerHTML += `7 + 7 = ${7 + 7}<br>`;
    div2.innerHTML += `7 + '7' = ${7 + '7'}<br>`;
    div2.innerHTML += `7 * '7' = ${7 * '7'}<br>`;
    div2.innerHTML += `7 - '7' = ${7 - '7'}<br>`;
    div2.innerHTML += `7 / '3' = ${7 / '3'}<br>`;
    div2.innerHTML += `7 / 'a' = ${7 / 'a'}<br><br>`;

    //2) 문자열 -> 숫자
    // new Number();//생성자 함수(대문자로 시작)
    div2.innerHTML += `${Number('5')}, type: ${typeof(Number('5'))}<br>`;
    div2.innerHTML += `${parseInt('5')}, type: ${typeof(parseInt('5'))}<br>`;
    div2.innerHTML += `${parseFloat('3.14')}, type: ${typeof(parseFloat('3.14'))}<br><br>`;

    //3) 숫자 -> 문자열
    div2.innerHTML += `${String(32)}, type: ${typeof(String(32))}<br>`;
    div2.innerHTML += `${32 + ''}, type: ${typeof(32 + '')}<br>`
    

}

// 4. 연산자
function opTest() {
    let div3 = document.getElementById('div3');
    
    // == 연산자 테스트
    div3.innerHTML += `5 == 5 : ${5 == 5}<br>`;
    div3.innerHTML += `5 == '5' : ${5 == '5'}<br>`;
    
    // === 연산자 테스트
    div3.innerHTML += `5 === 5 : ${5 === 5}<br>`;
    div3.innerHTML += `5 === '5' : ${5 === '5'}<br>`;
    
    // != 연산자
    div3.innerHTML += `5 != 6 : ${5 != 6}<br>`;
    div3.innerHTML += `5 != 5 : ${5 != 5}<br>`;
    
    // != 연산자
    div3.innerHTML += `5 != 6 : ${5 != 6}<br>`;
    div3.innerHTML += `5 != 5 : ${5 != 5}<br>`;

}

// 5. 제어문
function forTest(){
    let div4 = document.getElementById('div4');
    let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    let user = {
        name: '홍길동',
        age: '43',
        height: '175.8'
    };

    // for 구문
    // for(let i = 0; i < array.length; i++){
    //     div4.innerHTML += `${array[i]}`;
    // }

    // for in 구문
    // 배열의 경우 반복 변수에 array의 index 값을 순서대로 담아서 반복한다.
    // for (const i in array) {
    //     div4.innerHTML += `${array[i]}`;
    // }

    // for of 구문
    // 배열의 경우 반복 변수에 array의 value 값의 순서대로 담아서 반복한다.
    for (const value of array) {
        div4.innerHTML += `${value}`;
    }

    div4.innerHTML += '<br><br>';

    // for in 구문
    // 객체의 경우 반복 변수에 user의 속성명을 key에 순서대로 담아서 반복한다.
    for (const key in user) {
        div4.innerHTML += `key : ${key}, type :${typeof(key)}, value:${user[key]}<br>`;
    }

    // for of 구문
    // 객체의 경우 for of 구문을 사용할 수 없다.
    for (const value in user) {
        console.log(value);
    }



}