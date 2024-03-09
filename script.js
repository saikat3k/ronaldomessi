const ronImg = document.querySelector('.cr7');
const mesImg = document.querySelector('.lm10');
const bothImg = document.querySelector('.both');

const ronBtn = document.querySelector('.ron-btn');
const msBtn = document.querySelector('.ms-btn');
const randBtn = document.querySelector('.ran-btn');

let ronaldo = ['./img/ron.jpg','./img/ron1.jpg','./img/ron2.jpg','./img/ron3.jpg','./img/ron4.jpg'];

let messi = ['./img/messi.jpg','./img/messi1.jpg','./img/messi2.jpg','./img/messi3.jpg','./img/messi4.jpg'];

let random = ['./img/ron4.jpg','./img/messi.jpg','./img/ron1.jpg','./img/messi2.jpg','./img/ron4.jpg','./img/messi4.jpg'];

ronBtn.addEventListener('click', ()=>{
    const rand = Math.floor(Math.random()*ronaldo.length);
    ronImg.src = ronaldo[rand]
});

msBtn.addEventListener('click', ()=>{
    const rand = Math.floor(Math.random()*messi.length);
    mesImg.src = messi[rand]
});

randBtn.addEventListener('click', ()=>{
    const rand = Math.floor(Math.random()*random.length);
    bothImg.src = random[rand]
});