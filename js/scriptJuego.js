// console.log("Estoy funcionando");
let contadorUsuario = 1;
let contadorMaquina = 1;

/*Traigo los elementos al js*/

/*Contador*/
let usuario = document.querySelector("#contadorUsuario");
let maquina = document.querySelector("#contadorMaquina");
let contador = document.querySelector(".contador");

/*resultado*/
let textoResultado = document.querySelector(".texto");


/*Eleccion del usuario (iconos)*/
let iconoPiedra = document.querySelector("#piedra");
let iconoPapel = document.querySelector("#papel");
let iconoTijera = document.querySelector("#tijera");

let divIzq = document.querySelector(".izq")
let divDer = document.querySelector(".der")

/*********************************/



function obtenerResultadoMaquina(){
    let elecciones = ["Piedra", "Papel", "Tijera"]
    let numeroRandom = Math.floor(Math.random() * 3)
    return elecciones[numeroRandom];

}
console.log(obtenerResultadoMaquina());


function juego(eleccionUsuario){
        // console.log(`💩💩 ${eleccionUsuario}` )
        let eleccionMaquina = obtenerResultadoMaquina();
        
switch(eleccionUsuario + eleccionMaquina)
{     /*CASOS EN LOS QUE GANA EL USUARIO*/
    case "PiedraTijera":
        console.log("Gana el usuario")
        textoResultado.innerHTML = " Ganaste 🎇"
        divIzq.innerHTML = `<i class="fas fa-hand-rock"></i>`
        divDer.innerHTML = `<i class="fas fa-hand-scissors">`
        iconoPiedra.classList.add("gana")
        setTimeout(function(){iconoPiedra.classList.remove("gana")},1000 );

        usuario.innerHTML = contadorUsuario++;

    break; 
    case "PapelPiedra":
        textoResultado.innerHTML = "Ganaste 🎇"
        usuario.innerHTML =contadorUsuario++;
        divIzq.innerHTML = `<i class="fas fa-hand-paper"></i>`
        divDer.innerHTML = `<i class="fas fa-hand-rock"></i>`
        iconoPapel.classList.add("gana")
        setTimeout(function(){iconoPapel.classList.remove("gana")},1000 );
        console.log("Gana el usuario")
    break;
    case "TijeraPapel":
        console.log("Gana el usuario")
        textoResultado.innerHTML = "Ganaste 🎇"
        divIzq.innerHTML = `<i class="fas fa-hand-scissors"></i>`
        divDer.innerHTML= `<i class="fas fa-hand-paper"></i>`
        usuario.innerHTML = contadorUsuario++;
        iconoTijera.classList.add("gana")
        setTimeout(function(){iconoTijera.classList.remove("gana")},1000 );
    break;
     /*CASOS EN LOS QUE GANA LA MAQUINA*/
     case "PiedraPapel":
         textoResultado.innerHTML ="Perdiste ☠️"
         maquina.innerHTML = contadorMaquina++;
         divIzq.innerHTML = `<i class="fas fa-hand-rock"></i>`
         divDer.innerHTML = `<i class="fas fa-hand-paper"></i>`
         iconoPiedra.classList.add("pierde")
         setTimeout(function(){iconoPiedra.classList.remove("pierde")}, 1000)
         console.log("Gana maquina")
    break;
    case "PapelTijera":
        textoResultado.innerHTML ="Perdiste ☠️"
        maquina.innerHTML = contadorMaquina++;
        divIzq.innerHTML = `<i class="fas fa-hand-paper"></i>`
        divDer.innerHTML = `<i class="fas fa-hand-scissors"></i>`
        iconoPapel.classList.add("pierde")
        setTimeout(function(){iconoPapel.classList.remove("pierde")}, 1000)
        console.log("Gana maquina")
    break;
    case "TijeraPiedra":
        textoResultado.innerHTML ="Perdiste ☠️"
        maquina.innerHTML = contadorMaquina++;
        divIzq.innerHTML = `<i class="fas fa-hand-scissors"></i>`
        divDer.innerHTML = `<i class="fas fa-hand-rock"></i>`
        iconoTijera.classList.add("pierde")
        setTimeout(function(){iconoTijera.classList.remove("pierde")}, 1000)
        console.log("Gana maquina")
    break;

    /*CASOS EN QUE EMPATAN*/
    case "PiedraPiedra":
        textoResultado.innerHTML ="Es un empate 🙊"
        divIzq.innerHTML = `<i class="fas fa-hand-rock"></i>`
        divDer.innerHTML = `<i class="fas fa-hand-rock"></i>`
        iconoPiedra.classList.add("empate");
        setTimeout(function(){iconoPiedra.classList.remove("empate")}, 1000)
    break;

    case "PapalPapel":
        divIzq.innerHTML = `<i class="fas fa-hand-paper"></i>`
        divDer.innerHTML =  `<i class="fas fa-hand-paper"></i>`
        textoResultado.innerHTML ="Es un empate 🙊"
        iconoPapel.classList.add("empate");
        setTimeout(function(){iconoPapel.classList.remove("empate")}, 1000)

    break;

    case "TijeraTijera": 
        divIzq.innerHTML = `<i class="fas fa-hand-scissors"></i>`
        divDer.innerHTML = `<i class="fas fa-hand-scissors"></i>`
        textoResultado.innerHTML ="Es un empate 🙊"
        iconoTijera.classList.add("empate");
        setTimeout(function(){iconoTijera.classList.remove("empate")},1000)
        console.log("Empate")

}
}








function principal(){
iconoPiedra.addEventListener("click", function(){
    juego("Piedra")
});

iconoPapel.addEventListener("click", function(){
    juego("Papel")
});

iconoTijera.addEventListener("click", function(){
    juego("Tijera")
});
}
principal();