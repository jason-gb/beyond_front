window.onload = () => {
    // 1. 노드 조회
    // 1) id로 검색
    let btn1 = document.getElementById('btn1');

    btn1.addEventListener('click', () => {
        let div1 = document.getElementById('div1');

        div1.style.backgroundColor = 'black';
        div1.style.color = 'white';
        div1.innerHTML = '색상이 변경되었습니다.';
    });

    // 2) 태그명으로 검색
    let btn2 = document.getElementById('btn2');

    btn2.addEventListener('click', () => {
        let red = 0;
        let green = 0;
        let blue = 0;
        let listItems = document.getElementsByTagName('li');

        console.log(listItems);

        for (const listItem of listItems){
            red = parseInt(Math.random() * 255) + 1;
            green = parseInt(Math.random() * 255) + 1;
            blue = parseInt(Math.random() * 255) + 1;

            listItem.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        }
        
    });
    // 3) name으로 검색
    let btn3 = document.getElementById('btn3');

    btn3.addEventListener('click', () => {
        let checkedItem = '';
        let div2 = document.getElementById('div2');
        let hobbies = document.getElementsByName('hobby');

        console.log(hobbies);
        
        hobbies.forEach((element) => {
            if(element.checked) {
                checkedItem += `${element.value}<br>`;
            }
        });

        div2.innerHTML = `${checkedItem}`;
    });

    // 4) class로 검색
    let btn4 = document.getElementById('btn4');

    btn4.addEventListener('click', () => {
        let divList = document.getElementsByClassName('area');


        for (const element of divList){
            element.style.backgroundColor = 'orangered';
        }
    });

    // 5) CSS 선택자로 검색
    let btn5 = document.getElementById('btn5');

    btn5.addEventListener('click', () => {
        let div2 = document.querySelector('#div2');
        let divList = document.querySelectorAll('#div2');

        console.log(div2);
        console.log(divList);

        document.querySelectorAll('input:checked')
        .forEach((element) => {
            element.style.width = '20px';
            element.style.height = '20px';
        }); 
    });

    // 2. 노드 생성
    // 1) 텍스트 노드가 있는 요소 노드 생성
    let btn6 = document.getElementById('btn6');

    btn6.addEventListener('click', () => {
        // 요소 노드 생성
        let title = document.createElement('h5');

        // console.log(title);

        // 텍스트 노드 생성
        let textNode = document.createTextNode('안녕하세요.');

        console.log(textNode);

        title.appendChild(textNode);
        document.getElementById('div3').appendChild(title);
        // document.getElementById('div3').innerHTML = '<h5>안녕하세용~~</ht>';
    })

    // 2) 텍스트 노드가 있는 요소 노드 생성
    let btn7 = document.getElementById('btn7');

    btn7.addEventListener('click',() => {
        // 요소 노드 생성
        let img = document.createElement('img');

        // 속성 지정
        // img.src = '../resources/image/아무거나.jpg';
        img.setAttribute('src', '../resources/images/아무거나.jpg');
        img.setAttribute('width','200px');
        img.setAttribute('height','150px');

        console.log(img);

        document.getElementById('div4').appendChild(img);
        
    })

    // 3. 노드 삭제
    let btn8 = document.getElementById('btn8');

    btn8.addEventListener('click', () => {
        let div5 = document.getElementById('div5');

        // div5.remove();
        document.body.removeChild(div5);
    });



};