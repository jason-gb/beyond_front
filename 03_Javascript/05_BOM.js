window.onload = () => {   
    // 1. window 객체
    // 1) window.open()
    let btn1 = document.getElementById('btn1');

    btn1.addEventListener('click',() => {
        window.open('https://www.naver.com','naver');
    });
    
    
}