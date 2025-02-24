const iniciarJuego = document.getElementById("iniciarJuego")
const juego = document.getElementById("juego")
const piedra = document.getElementById("piedraUser")
const tijeras = document.getElementById("tijerasUser")
const papel = document.getElementById("papelUser")
const body = document.querySelector("body")
const userValue = document.getElementById("userValue")
const elementos = document.querySelectorAll("#piedraUser, #papelUser, #tijerasUser");
const valueUser = document.getElementById("valueUser")
const maquinaValue = document.getElementById("maquinaValue")
const resultado = document.getElementById("resultado")
let user;
let maquina;
let arrayButtons = [papel,tijeras,piedra]
let contadorMaquina = 0;
let contadorUser = 0;
const opciones = ["Piedra", "Papel", "Tijeras"];
const numeroAleatorio = () =>{
    numero = Math.random() * 10000
    console.log(numero)
}
elegirAleatorio = (array) =>{
    const indice = Math.floor(Math.random() * array.length);
    console.log(indice)
    return array[indice];
}
const juegoCompleto = () => {
    piedra.addEventListener("click", () => {
        const opciones = ["piedra", "papel", "tijeras"];
        maquina = elegirAleatorio(opciones);
        numeroAleatorio()
        user = "piedra"
        verificarImagenUser(),eliminateElementValueUser(),verificarImagenMaquina(),verificarPuntaje()
        document.getElementById("reiniciar").classList.toggle("hidden");
    })
    papel.addEventListener("click", () => {
        const opciones = ["piedra", "papel", "tijeras"];
        maquina = elegirAleatorio(opciones);
        numeroAleatorio()
        user = "papel"
        verificarImagenUser(),eliminateElementValueUser(),verificarImagenMaquina(),verificarPuntaje()
        document.getElementById("reiniciar").classList.toggle("hidden");
    })
    tijeras.addEventListener("click", () => {
        const opciones = ["piedra", "papel", "tijeras"];
        maquina = elegirAleatorio(opciones);
        numeroAleatorio()
        user = "tijeras"
        verificarImagenUser(),eliminateElementValueUser(),verificarImagenMaquina(),verificarPuntaje()
        document.getElementById("reiniciar").classList.remove("hidden");
    })
}
iniciarJuego.addEventListener("click", () => {
    iniciarJuego.style.display = "none"
    juego.style.display = "flex"
    juegoCompleto()
    document.getElementById("bar").style.display = "none"
})
const eliminateElementValueUser = () =>{
    valueUser.style.display = "none"
}

const verificarImagenUser = () => {
    switch (user){
        case "piedra":
            userValue.setAttribute("src","/static/piedra.png")
            break
        case "papel":
            userValue.setAttribute("src","/static/papel.png")
            break
        case "tijeras":
            userValue.setAttribute("src","/static/tijeras.png")
            break
    }

}
const verificarImagenMaquina = () => {
    switch (maquina){
        case "piedra":
            maquinaValue.setAttribute("src","/static/piedra.png")
            break
        case "papel":
            maquinaValue.setAttribute("src","/static/papel.png")
            break
        case "tijeras":
            maquinaValue.setAttribute("src","/static/tijeras.png")
            break
    }

}
const verificarPuntaje = () => {
    // Primero, ocultamos los mensajes antes de que se muestre uno nuevo
    document.getElementById("tieMessage").classList.add("hidden");
    document.getElementById("loseMessage").classList.add("hidden");
    document.getElementById("winMessage").classList.add("hidden");

    // Comparamos los resultados de la máquina y el jugador
    if (maquina === user) {
        // Empate
        document.getElementById("tieMessage").classList.remove("hidden");
        console.log("Empate");
    } else {
        // El jugador pierde
        if (
            (maquina === "piedra" && user === "tijeras") ||
            (maquina === "papel" && user === "piedra") ||
            (maquina === "tijeras" && user === "papel")
        ) {
            document.getElementById("loseMessage").classList.remove("hidden");
            console.log("Pierde");
        }
        // El jugador gana
        else if (
            (maquina === "piedra" && user === "papel") ||
            (maquina === "papel" && user === "tijeras") ||
            (maquina === "tijeras" && user === "piedra")
        ) {
            document.getElementById("winMessage").classList.remove("hidden");
            console.log("Gana");
        }
    }

    console.log("Maquina:", maquina ,contadorMaquina);
    console.log("Usuario:", user ,contadorUser);
}

document.getElementById("menu-btn").addEventListener("click", () => {
    document.getElementById("mobile-menu").classList.toggle("hidden");
});

document.getElementById("reiniciar").addEventListener("click", () => {
    iniciarJuego.style.display = "block"
    juego.style.display = "none"
    juegoCompleto()
});

document.getElementById('reiniciar').addEventListener('click', function(){
    maquinaValue.setAttribute("src","")
    userValue.setAttribute("src","")
    document.getElementById("tieMessage").classList.add("hidden")
    document.getElementById("loseMessage").classList.add("hidden")
    document.getElementById("winMessage").classList.add("hidden")
    document.getElementById('reiniciar').classList.add("hidden")
    valueUser.style.display = "flex"
    document.getElementById("bar").style.display = "block"
})
