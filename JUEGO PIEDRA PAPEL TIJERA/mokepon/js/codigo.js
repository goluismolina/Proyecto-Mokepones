//Variable de ataque
let ataqueJugador;
let ataqueEnemigo;

// Funcion que da arranque al juego, escuchando la seleccion del jugador
function inicioJuego (){

    let botonMascotas = document.getElementById('boton-mascota');
    botonMascotas.addEventListener('click' , seleccionMascota);

    let botonFuego = document.getElementById("boton-fuego");
    botonFuego.addEventListener("click", ataqueFuego )
    let botonAgua = document.getElementById("boton-agua");
    botonAgua.addEventListener("click", ataqueAgua )
    let botonTierra = document.getElementById("boton-tierra");
    botonTierra.addEventListener("click", ataqueTierra )
}

// Funcion que anuncia la eleccion del jugador
function seleccionMascota (){

    let hipodogue = document.getElementById("Hipodoge");
    let capipepo = document.getElementById("Capipepo");
    let ratigueya = document.getElementById("Ratigueya");
    let spanMascotaJugador = document.getElementById("mascota-jugador"); 

    if (hipodogue.checked ){
        spanMascotaJugador.innerHTML = " Hipodogue ";
    } else if (capipepo.checked ){
        spanMascotaJugador.innerHTML = " Capipepo ";
    } else if (ratigueya.checked ){
        spanMascotaJugador.innerHTML = " Ratigueya ";
    } else {
        alert("⚠️Debes selecionar una mascota⚠️");
    }

    seleccionMascotaPc (); 
}

function seleccionMascotaPc (){

    let seleccionAleatoria = numerosAleatorios(3,1);
    let spanMascotaPc = document.getElementById("mascota-pc");

    if ( seleccionAleatoria == 1 ){
        spanMascotaPc.innerHTML = " Hipodoge ";
    } else if ( seleccionAleatoria == 2 ){
        spanMascotaPc.innerHTML = " Capipepo ";
    } else {
        spanMascotaPc.innerHTML = " Ratigueya ";
    }
    
}

function numerosAleatorios( max , min ) {
    return Math.floor(Math.random() * ( max - min + 1) + min);    
}

function ataqueFuego (){
    let ataqueJugador = "FUEGO";
    ataqueAleatorioEnemigo()
}

function ataqueAgua (){
    let ataqueJugador = "AGUA";
    ataqueAleatorioEnemigo()
}

function ataqueTierra (){
    let ataqueJugador = "TIERRA";
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = numerosAleatorios ( 3 , 1 );

    if ( ataqueAleatorio == 1 ){
        ataqueEnemigo = " FUEGO "
    } else if ( ataqueAleatorio == 2 ){
        ataqueEnemigo = " AGUA "
    } else {
        ataqueEnemigo = " TIERRA "
    }
}
// Evento que indica la lectura de la pagina y despues lanza la funcion del juego.
window.addEventListener( "load" , inicioJuego );
