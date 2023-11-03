    // Funcion anuncio eleccion
    function eleccion (jugada){
        let resultado = ""
            if (jugada == 1) {
                resultado = " Piedra🪨";
            } else if (jugada == 2) {
                resultado = " Papel🧻";
            } else if (jugada == 3) {
                resultado = " Tijera✂️";
            } else {
                resultado = "❌Ingresaste un dato no valido❌";
            }
        return resultado
    }

    // Funcion del combate
    function combate ( eligePc , eligeJugador ) {
        let ganador = ""
            if (eligePc == eligeJugador){
                ganador = " Empate🫱🫲";
                empates = empates + 1;
            } else if (eligePc == 3 && eligeJugador == 1){
                ganador = " Ganaste✅";
                victorias = victorias + 1;
            } else if (eligePc == 1 && eligeJugador == 2 ){
                ganador = " Ganaste✅";
                victorias = victorias + 1;
            }  else if (eligePc == 2 && eligeJugador == 3 ){
                ganador = " Ganaste✅"
                victorias = victorias + 1;
            } else {
                ganador = " Perdiste❌";
                derrotas = derrotas + 1;
            }
            return ganador
    }


    // Funcion eleccion PC numeros aleatorios
    function numerosAleatorios ( max , min ) {
        return Math.floor(Math.random() * ( max - min + 1) + min);    
        }

    // Funcion Resumen del combate y ganador 
        function ganadorFinal (){
            alert("Has acumulado " + victorias + " victorias, " + empates + " empates y " + derrotas + " derrotas");
        
            if (victorias == 3){
                alert("Eres el Vencedor🥳");
                reinicioMarcador();
            }   else if (derrotas == 3){
                alert("El pc es el vencedor☹️");
                reinicioMarcador;
            }   else {
                raoudn = raoudn + 1;
                alert("Raound " + raoudn +("/3"));
            }
        }

    // Funcion reinicio de marcador
        function reinicioMarcador (){
            victorias = 0 ;
            empates = 0 ;
            derrotas = 0; 
            raoudn = 1;
        }

    // Declaracion de variables
        let jugador = 0;
        let victorias = 0 ;
        let empates = 0 ;
        let derrotas = 0 ; 
        let raoudn = 1 ;
       
    // Ciclo wile para realizar varias rondas
        while ( victorias < 3 && derrotas < 3){
    // Las elecciones de pc y jugador deben repetirse
        jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");
        let pc = numerosAleatorios ( 3 , 1 ); 
    // Los anuncios de eleccion y ganador se repiten cada vez que pc o jugador elijan
        alert("Tu eliges: " + eleccion(jugador) );
        alert("Pc elige: " + eleccion(pc) );
        alert( combate(pc , jugador) );
        ganadorFinal();

        }


