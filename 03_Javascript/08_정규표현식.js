window.onload = () => {
    // 1. 정규 표현식 객체 생성
    let btn1 = document.getElementById('btn1');

    btn1.addEventListener('click', () => {
        let div1 = document.getElementById('div1');
        let str1 = 'javascript jqueryscript axios';
        let str2 = 'java jquery axios';
        // 생성자 함수를 이요한 정규 표현식 객체 생성
        let regExp1 = new RegExp('script');

        // 리터럴을 이용한 정규 표현식 객체 생성
        let regExp2 = /script/;

        console.log(regExp1, typeof(regExp1), regExp1 instanceof RegExp);
        console.log(regExp2, typeof(regExp2), regExp2 instanceof RegExp);

        // RegExp 객체에서 제공하는 메소드
        // test('문자열')
        //  매개값으로 전달되는 문자열에서 정규 표현식 패턴을 
        //  만족하는 값이 있으면 true, 없으면 false를 리턴한다.
        div1.innerHTML = `regExp1.test(str1) : ${regExp1.test(str1)}<br>`;
        div1.innerHTML += `regExp1.test(str2) : ${regExp1.test(str2)}<br><br>`;
        
        // exec('문자열')
        //  매개값으로 전달되는 문자열에서 정규 표현식 패턴을 만족하는 값을 리턴한다.
        div1.innerHTML += `regExp1.exec(str1) : ${regExp1.exec(str1)}<br>`;
        div1.innerHTML += `regExp1.exec(str2) : ${regExp1.exec(str2)}<br><br>`;
        
        // 문자열에서 정규 표현식 객체를 이용하는 메소드
        // match(정규표현식) 
        //   매개값으로 전달되는 정규표현식 패턴을 만족하는 값을 리턴한다.
        div1.innerHTML += `str1.match(regExp1) : ${str1.match(regExp1)}<br>`;
        div1.innerHTML += `str2.match(regExp1) : ${str2.match(regExp1)}<br><br>`;
        
        // search(정규표현식)
        //   매개 값으로 전달되는 정규 표현식 패턴을 만족하는 부분의 시작 인덱스를 리턴한다.
        div1.innerHTML += `str1.search(regExp1) : ${str1.search(regExp1)}<br>`;
        div1.innerHTML += `str2.search(regExp1) : ${str2.search(regExp1)}<br><br>`;
        
        // split(정규표현식)
        //  매개값으로 전달되는 정규 표현식 패턴을 만족하는 값을
        //  구분자로 하여 배열을 생성하고 리턴한다.
        div1.innerHTML += `str1.split(regExp1) : ${str1.split(regExp1)}<br>`;
        div1.innerHTML += `str2.split(regExp1) : ${str2.split(regExp1)}<br><br>`;
        
        // replace(정규표현식, '변경할 값')
        //  매개값으로 전달되는 정규 표현식 패턴을 만족하는 값을 '변경할 값'으로 변경한다.
        div1.innerHTML += `str1.replace(regExp1,'스크립트') : ${str1.replace(regExp1,'스크립트')}<br>`;
        div1.innerHTML += `str2.replace(regExp1,'스크립트') : ${str2.replace(regExp1,'스크립트')}<br><br>`;

    });

    // 2. 플래그 문자
    let btn2 = document.getElementById('btn2');

    btn2.addEventListener('click', () => {
        let str = 'JAvaScript JQuery Axios';
        let div2 = document.getElementById('div2');

        // replace()에서 '$&'는 패턴을 만족하는 문자열을 의미한다.
        div2.innerHTML = `/a/ : ${str.replace(/a/,'($&)')}<br>`;
        // g : 전역으로 비교를 수행한다.
        div2.innerHTML += `/a/g : ${str.replace(/a/g,'($&)')}<br>`;
        // i : 대소문자를 구분하지 않고 비교를 수행한다.
        div2.innerHTML += `/a/i : ${str.replace(/a/i,'($&)')}<br>`;
        // ig : 전역에서 대소문자 구분하지 않고 비교를 수행한다.
        div2.innerHTML += `/a/ig : ${str.replace(/a/ig,'($&)')}<br>`;
        
    });

     // 2. 플래그 문자
     let btn3 = document.getElementById('btn3');

     btn3.addEventListener('click', () => {
         let str = 'aaaaa aaaa a aaa aa';
         let div3 = document.getElementById('div3');

        //  반복 검색
        // {m,n}은 앞선 패턴이 최소 m번 최대 n번 반복되는 문자열을 의미한다. (띄어쓰기 X)
        div3.innerHTML = `/a{1,2}/g : ${str.replace(/a{1,2}/g, '($&)')}<br>`;
        // {3,3}
        div3.innerHTML += `/a{3}/g : ${str.replace(/a{3}/g, '($&)')}<br>`;
        // 앞선 패턴이 최소 2번 이상 반복되는 문자열을 의미한다.
        div3.innerHTML += `/a{2,}/g : ${str.replace(/a{2,}/g, '($&)')}<br>`;
        // +는 앞선 패턴이 최소 한 번 이상 반복되는 문자열을 의미한다. {1,}
        div3.innerHTML += `/a+/g : ${str.replace(/a+/g, '($&)')}<br>`;
        // ?는 앞선 패턴이 최대 한 번 이상 반복되는 문자열을 의미한디.{0,1}
        div3.innerHTML += `/a?/g : ${str.replace(/a?/g, '($&)')}<br><br>`;

        //문자열의 앞, 뒤 부분
        str = 'Javascript\nJquery\nShellscript\nAxios';

        // ^는 문자열의 시작을 의미한다.
        // m : 멀티라인 모든 라인을 다 체크하는걸 말함.
        div3.innerHTML += `/^j/ : ${str.replace(/^j/, '($&)')}<br>`;
        div3.innerHTML += `/^j/igm : ${str.replace(/^j/igm, '($&)')}<br>`;
        // $는 문자열의 마지막을 의미한다.
        div3.innerHTML += `/ipt$/igm : ${str.replace(/ipt$/igm, '($&)')}<br>`;

        // OR 검색
        str = '123 Javascript Jquery Axios';
        // [...] 내의 문자들 중 하나라도 존재할 경우를 의미한다.
        div3.innerHTML += `/[aj]/ig : ${str.replace(/[aj]/ig, '($&)')}<br>`;
        // [...] 내의 ^는 부정의 의미를 가진다.(not 즉 반대의 결과를 도출)
        div3.innerHTML += `/[^aj]/ig : ${str.replace(/[^aj]/ig, '($&)')}<br>`;
        // [...] 내의 -는 범위 지정을 의미한다.
        div3.innerHTML += `/[a-z]/g : ${str.replace(/[a-zj]/g, '($&)')}<br>`;
        div3.innerHTML += `/[A-Z]/g : ${str.replace(/[A-Zj]/g, '($&)')}<br>`;
        div3.innerHTML += `/[0-9]/g : ${str.replace(/[0-9j]/g, '($&)')}<br>`;
        div3.innerHTML += `/[0-9A-Z]/g : ${str.replace(/[0-9A-Zj]/g, '($&)')}<br><br>`;
        
        // 문자 클래스
        div3.innerHTML += `/[....]/g : ${str.replace(/..../g, '($&)')}<br>`;
        // 임의의 문자열 검색
        div3.innerHTML += `/..../g : ${str.replace(/..../g, '($&)')}<br><br>`;

        str = 'A1 B2 C3 d_4 e:5 ` ffgg77--__-- \t가\t나\n다';

        // \d : 숫자를 의미한다. ([0-9])
        div3.innerHTML += `/\\d/g : ${str.replace(/\d/g, '($&)')}<br>`;
        // \D : 숫자가 아닌 문자를 의미한다. ([^0-9])
        div3.innerHTML += `/\\D/g : ${str.replace(/\D/g, '($&)')}<br>`;
        // \w : 알파벳, 숫자, 언더바(_) 등을 의미한다. ([a-zA-Z0-9_])
        div3.innerHTML += `/\\w/g : ${str.replace(/\w/g, '($&)')}<br>`;
        // \W : 알파벳, 숫자, 언더바가 아닌 문자를 의미한다. ([^a-zA-Z0-9_])
        div3.innerHTML += `/\\W/g : ${str.replace(/\W/g, '($&)')}<br>`;
        // \s : 공백 문자를 의미한다. ([\n\t])
        div3.innerHTML += `/\\s/g : ${str.replace(/\s/g, '($&)')}<br>`;
        // \s : 공백 문자가 아닌 문자를 의미한다. (^[\n\t])
        div3.innerHTML += `/\\S/g : ${str.replace(/\S/g, '($&)')}<br>`;

        });
}