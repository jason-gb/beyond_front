
window.onload = function() {
    let btn1 = document.getElementById('btn1');
    
    // btn1.onclick = function() {
    //     alert('버튼 클릭!')
    // };
    
    btn1.addEventListener('click', function(){
        let array1 = [];
        let array2 = new Array();
        let array3 = new Array(3);
        let array4 = new Array('a','b','c','d');
        let array5 = Array.of('a','b','c','d');
        let array6 = ['a','b','c','d'];
        let div1 = document.getElementById('div1');

        console.log(array1,array2,array3);
        console.log(array4, array5, array6);

        array1[0] ='사과';
        array1[1] ='포도';
        array1[2] ='딸기';

        for (const value of array1) {
           div1.innerHTML += `value : ${value}<br>`;
        }
        
        array2[0] = '홍길동';
        array2[1] = 34;
        array2[2] = false;
        array2[3] = {};
        array2[4] = [1, 2, 3, 4];
        array2[5] = function(){};

        console.log(array2);

       for (const value of array2) {
        div1.innerHTML += `value : ${value}, type : ${typeof(value)}<br>`;
       }

    });

    // 2. 배열의 메소드
    let btn2 = document.getElementById('btn2');

    btn2.addEventListener('click', function(){
         let div2 = document.getElementById('div2');

         // 1) indexOf()
        //  let array = ['귤','사과','자몽','망고','복숭아'];

        //  div2.innerHTML += `array: [${array}]<br>`;
        //  div2.innerHTML += `array: [${array}]<br>`;

        // 2) concat()
        // let array1 = ['귤','사과','자몽','망고','복숭아'];
        // let array2 = ['바나나','수박','오렌지','딸기'];

        // div2.innerHTML += `array1 : [${array1}]<br>`;
        // div2.innerHTML += `array2 : [${array2}]<br>`;
        // div2.innerHTML += `array1을 기준으로 배열을 결합 : [${array1.concat(array2)}]<br>`;
        // div2.innerHTML += `array2을 기준으로 배열을 결합 : [${array2.concat(array1)}]<br>`;
        // // 원본 배열에는 영향을 미치지 않음
        // div2.innerHTML += `array1 : [${array1}]<br>`; 
        // div2.innerHTML += `array2 : [${array2}]<br>`; 

        // 3) sort()
    //     let array1 = ['Appple','Cherry','apple','Banana'];
    //     let array2 = [10, 543, 30, 450, 123,4885];

    //     div2.innerHTML += `array1 : [${array1}]<br>`;
    //     div2.innerHTML += `array2 : [${array2}]<br>`;
        
    //     div2.innerHTML += `array1.sort() : [${array1.sort()}]<br>`;
    //     div2.innerHTML += `array2.sort() : [${array2.sort()}]<br>`;
    //    // 원본 배열에 영향을 미치는 메소드이다 
    //     div2.innerHTML += `array1 : [${array1}]<br>`;
    //     div2.innerHTML += `array2 : [${array2}]<br>`;


        // sort() 메소드에 함수를 매개값으로 전달해서 정렬 기준을 변경할 수 있다.
        //  - 비고하는 값이 같으면 0을 리턴
        //  - 첫 번째 매개값이 크면 양수를 리턴
        //  - 첫 번째 매개값이 작으면 음수를 리턴
        // array2.sort(function(left, right){

        //     return left - right;
        //     // return right - left; // 내림차순 정렬
        // });

        // 화살표 함수
        // array2.sort((left,right) => left - right);
        // div2.innerHTML += `array2: [${array2}]<br>`;

        // 4) reverse()
        // let array = ['Appple','Cherry','apple','Banana'];

        // div2.innerHTML += `array : ${array}<br>`;
        // div2.innerHTML += `array.reverse() : ${array.reverse()}<br>`;
        // // 원본 배열에 영향을 미치는 메소드이다
        // div2.innerHTML += `array : ${array}<br>`;
        // div2.innerHTML += `array : ${array.sort().reverse()}<br>`;
        
        // 5) push() / pop()
        // let array = ['포도','딸기','사과','수박'];

        // // push()
        // div2.innerHTML += `array : ${array}<br>`;
        // // push 후 요소의 개수를 리턴한다.
        // div2.innerHTML += `array : ${array.push('바나나')}<br>`;
        // div2.innerHTML += `array : ${array}<br>`;
        // div2.innerHTML += `array : ${array.push('망고')}<br>`;
        // div2.innerHTML += `array : ${array}<br><br>`;
        
        // // pop()
        // div2.innerHTML += `array.pop() : ${array.pop()}<br>`;
        // div2.innerHTML += `array : ${array}<br>`;
        // div2.innerHTML += `array.pop() : ${array.pop()}<br>`;
        // div2.innerHTML += `array : ${array}<br>`;

        // 6) unshift(), shift()
        // let array = ['포도','딸기','사과','수박'];

        // // unshift(0)
        // div2.innerHTML += `array : ${array}<br>`;
        // // unshift 후 요소의 개수를 리턴한다.
        // div2.innerHTML += `array : ${array.unshift('바나나')}<br>`;
        // div2.innerHTML += `array : ${array}<br>`;
        // div2.innerHTML += `array : ${array.unshift('복숭아')}<br>`;
        // div2.innerHTML += `array : ${array}<br><br>`;
        
        // // shift()
        // div2.innerHTML += `array.shift(): ${array.shift()}<br>`;
        // div2.innerHTML += `array : ${array}<br>`;
        // div2.innerHTML += `array.shift(): ${array.shift()}<br>`;
        // div2.innerHTML += `array : ${array}<br>`;

        // 7) slice(), splice()
        // let array = ['포도','딸기','사과','수박','바나나','복숭아'];

        // // slice()
        // div2.innerHTML += `array : ${array}<br>`;
        // div2.innerHTML += `array : ${array.slice(2)}<br>`;
        // // 원본 배열에 영향을 미치지 않는 메소드이다.
        // div2.innerHTML += `array : ${array}<br>`;

        // div2.innerHTML += `array : ${array.slice(2, 4)}<br>`;
        // div2.innerHTML += `array : ${array}<br>`;
        
        // // splice()
        // div2.innerHTML += `array : ${array}<br>`;
        // // div2.innerHTML += `array : ${array.splice(2)}<br>`;// 2번 부터 다 잘라냄
        // // div2.innerHTML += `array : ${array.splice(2, 2)}<br>`; // 2번 부터 2개 잘라냄
        // div2.innerHTML += `array : ${array.splice(2, 2, '파인애플')}<br>`; // 2번 부터 2개 잘라내고 거기에 '파인애플' 넣음
        // div2.innerHTML += `array : ${array.splice(2, 0, '파인애플', '키위')}<br>`; // 2번에 안잘라내고 거기에 '파인애플','키위' 넣음
        // div2.innerHTML += `array : ${array}<br>`;

        // 8) toString() / join()
        // let array = ['포도','딸기','사과','수박'];

        // div2.innerHTML += `array : ${array}<br>`;
        // div2.innerHTML += `array : ${array.toString()}<br>`;
        // div2.innerHTML += `array : ${array.join()}<br>`;
        // div2.innerHTML += `array : ${array.join('|')}<br>`;

        // 9) forEach()
        // let array = ['포도','딸기','사과','수박'];

        // array.forEach(function(value, index, arr){
        //     // div2.innerHTML += `value : ${value}, index : ${index}<br>`;
        //     div2.innerHTML += `value : ${arr[index]}, index : ${index}<br>`;
        // });
        
        // 10) reduce()
        //  - 배열의 각 요소에 대해 콜백 함수의 실행 값을 누적하여 하나의 결과값을 반환한다.
        // let array = [3, 5, 7 ,9];

        // let result = array.reduce(function(left, right){
        //     return left + right;
        // });

        // div2.innerHTML += `result : ${result}<br>`;

        // 11) filter()
        // // - 배열에서 특정 보건을 만족하는 요소들만 새로운 배열로 생성한다.
        // let array = [1, 2, 3, 4, 5, 6];
        // let newArray = array.filter(function(num){
        //     return num % 2 == 0;
        // });

        // div2.innerHTML += `array : ${array}<br>`;
        // div2.innerHTML += `array.filter() : ${newArray}<br>`;
        // div2.innerHTML += `array : ${array}<br>`;

        // Spread 연산자
        //  - 배열이나 객체를 ... 연산자와 함께 사용하면 배열이나 객체의 값을 분해해서 전달한다.
        //  - 기존 객체의 속성이나 배열의 요소들을 포함하여 새로운 객체, 배열을 생성하고자 할 때 사용한다.
        
        // let arr = [1,2,3];
        // console.log(...arr)
        // console.log(arr[0],arr[1],arr[2])

        //1) 배열 병합(concat 메소드와 같은 역할)
        // let array1 = ['귤','사과','자몽','망고','복숭아'];
        // let array2 = ['바나나','수박','오렌지','딸기'];
        // let newArray = [...array1, ...array2];

        // div2.innerHTML += `array1 : ${array1}<br>`;
        // div2.innerHTML += `array2 : ${array2}<br>`;
        // div2.innerHTML += `spread사용 : ${newArray}<br>`;

        // 2) 배열 복사
        let array = ['포도','딸기','사과','수박' ];
        let copyArray = [...array, '망고'];

        div2.innerHTML += `array : ${array}<br>`;
        div2.innerHTML += `array : ${copyArray}<br>`;
        div2.innerHTML += `array : ${array}<br>`;
    
    });
}