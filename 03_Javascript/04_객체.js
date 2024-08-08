window.onload = () => {
    // 2. 프로퍼티
    let btn1 = document.getElementById('btn1');

    btn1.addEventListener('click', () => {
        let div1 = document.getElementById('div1');
        let product = {
            pName : '아이폰 12 미니',
            price : 800000,
            0 : '배열 흉내',
            brand : '삼성',
            brand : '애플', // 마지막에 선언된 프로퍼티로 등록된다.
            spec : ['OLED','8 Inch','화이트','64GB']
        };

        let user = {
            'user name' : '홍길동',
            'user_age' : 34
        }
ae
        console.log(product, user);

        // 객체의 속성에 접근하는 방법
        div1.innerHTML = `product['pName'] : ${product['pName']}<br>`;
        // div1.innerHTML += `product['0'] : ${product['0']}<br>`;
        div1.innerHTML += `product['0'] : ${product[0]}<br>`;
        div1.innerHTML += `product['brand'] : ${product['brand']}<br>`;
        div1.innerHTML += `product['price'] : ${product['price']}<br>`;
        div1.innerHTML += `product['spec'] : ${product['spec']}<br>`;
        div1.innerHTML += `product['spec'][0] : ${product['spec'][0]}<br>`;
        div1.innerHTML += `product['spec'][2] : ${product['spec'][2]}<br><br>`;
        
        // div1.innerHTML += `product.pName : ${product.pName}<br>`;
        // div1.innerHTML += `product.0 : ${product[0]}<br>`;
        // div1.innerHTML += `product.brand : ${product.brand}<br>`;
        // div1.innerHTML += `product.price : ${product.price}<br>`;
        // div1.innerHTML += `product.spec : ${product.spec}<br><br>`;
        
        // div1.innerHTML += `user['user name'] : ${user['user name']}<br>`;
        // div1.innerHTML += `user['user_age'] : ${user['user_age']}<br>`;

    });
}