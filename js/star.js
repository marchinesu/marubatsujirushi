// 星を降らせる

const stars = [
    "img/star_white.png",
    "img/star_yellow.png"
];

function createStar() {

    const star = document.createElement("img");

    // 白・黄色をランダム
    star.src = stars[Math.floor(Math.random() * stars.length)];

    star.className = "fall-star";


    // 横位置
    star.style.left = Math.random() * window.innerWidth + "px";


    // 落下速度
    star.style.animationDuration = (8 + Math.random() * 10) + "s";


   // ============================
// サイズを大きくランダム化
// ============================

const size = Math.random();

if(size < 0.35){

    // 小さい星
    star.style.width = (12 + Math.random() * 18) + "px";

}else if(size < 0.85){

    // 中くらいの星
    star.style.width = (35 + Math.random() * 40) + "px";

}else{

    // 大きい星（たまに）
    star.style.width = (80 + Math.random() * 90) + "px";

}

    // ============================
    // 透明度
    // ============================

    star.style.opacity = 0.25 + Math.random() * 0.75;


    // ============================
    // 回転
    // ============================

    star.style.transform =
        `rotate(${Math.random() * 360}deg)`;


    document.body.appendChild(star);


    setTimeout(() => {

        star.remove();

    },20000);

}


// 降る量を減らす
setInterval(createStar,800);