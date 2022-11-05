function createGame (bandeira1, hora, bandeira2){
    return `
        <li>
            <img src="assets/icon-${bandeira1}.svg" alt="">
            <strong>${hora}</strong>
            <img src="assets/icon-${bandeira2}.svg" alt="">
        </li>
    `
}

let daley = -0.4;
function createCard (group, date, day, games){
    // daley = daley+0.4;
    return `
    <div class="card" style="animation-delay: ${daley}s" >
        <h3>${group}</h3>
        <h2>${date}<span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
  `  
}

document.querySelector("#cards").innerHTML =
    createCard("grupo a","20/11", "quinta",
        createGame("qatar","13:00","ecuador")
    )+
    createCard("grupo a","21/11", "quinta",
        createGame("senegal","13:00","inglaterra")
    )


var groupA = document.getElementById("groupA")

groupA.addEventListener ("click", function(){
    console.log("criando grupo A")
    document.querySelector("#cards").innerHTML =
        createCard("grupo a","20/11", "quinta",
            createGame("qatar","13:00","ecuador")
        )+
        createCard("grupo a","21/11", "quinta",
            createGame("senegal","13:00","inglaterra")
        )
})

var groupB = document.getElementById("groupB")

groupB.addEventListener ("click", function(){
    console.log("criando grupo B")
    document.querySelector("#cards").innerHTML =
        createCard("grupo b","20/11", "quinta",
            createGame("england","13:00","will")
        )+
        createCard("grupo b","24/11", "sexta",
            createGame("welsh","12:00","estados-unidos")
        )

})