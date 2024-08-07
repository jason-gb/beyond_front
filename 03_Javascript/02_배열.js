
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
}