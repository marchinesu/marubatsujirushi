fetch("common/header.html")
.then(response => response.text())
.then(data => {

    document.getElementById("header-area").innerHTML = data;

    const title = document.body.dataset.title;

    if(title){

        document.getElementById("page-title").textContent = title;

    }

    const script = document.createElement("script");

    script.src = "js/script.js";

    document.body.appendChild(script);

});