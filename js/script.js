// ハンバーガーメニュー

const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const closeMenu = document.getElementById("closeMenu");

menuToggle.addEventListener("click", () => {

    menu.classList.add("open");

});

closeMenu.addEventListener("click", () => {

    menu.classList.remove("open");

});


// TOPへ戻る

const topButton=document.getElementById("topButton");

topButton.addEventListener("click",(e)=>{

    e.preventDefault();

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});