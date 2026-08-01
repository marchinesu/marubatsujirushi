window.addEventListener("load", () => {

    const loading = document.getElementById("loading");
    const main = document.getElementById("main");
    const butterfly = document.getElementById("butterfly");

    const frames = [
        "img/loading/butterfly1.png",
        "img/loading/butterfly2.png",
        "img/loading/butterfly3.png",
        "img/loading/butterfly4.png",
        "img/loading/butterfly5.png",
        "img/loading/butterfly6.png"
    ];

    let index = 0;

    // コマ送り
    const animation = setInterval(() => {
        index = (index + 1) % frames.length;
        butterfly.src = frames[index];
    }, 100); // 100msごとに切り替え

    // ローディング終了
    setTimeout(() => {

        clearInterval(animation); // アニメーション停止

        loading.style.display = "none";
        main.hidden = false;

    }, 3000);

});