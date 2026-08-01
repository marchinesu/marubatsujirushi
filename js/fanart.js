fetch("data/fanart.json")

.then(response => response.json())

.then(data => {

    const area = document.getElementById("fanart-list");


    data.forEach(art => {

        const item = document.createElement("div");

        item.className = "fanart-post";


        item.innerHTML = `

            <p>${art.name}</p>

            <blockquote class="twitter-tweet">

                <a href="${art.url}"></a>

            </blockquote>

        `;


        area.appendChild(item);

    });


    // X埋め込み読み込み
    if(window.twttr){

        window.twttr.widgets.load();

    }

});