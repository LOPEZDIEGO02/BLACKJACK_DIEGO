const btnNuevo = document.querySelector("#btnNuevo")
const btnPedir =document.querySelector("#btnPedir")
const btnDetener = document.querySelector("#btnDetener")

let cartas = ['C','D','H','S'];
let especiales = ['A', 'J', 'Q', 'K'];
let deck = [];
let puntosJugador = 0;
let puntosComputadora = 0;

function crearDeck() {
    for(const carta of cartas) {
        for(let i=2; i <= 10; i++) {
            deck.push(`${i}${carta}`);
        }
    }

    for(const especial of especiales) {
         for(const carta of cartas){
         deck.push(especial+carta)
      }
    }

}

crearDeck ();
deck = _.shuffle(deck)
console.log(deck)


// Esta funcion recibe una carta y retorna un valor
// ejemplo: 3,10,11...
function obtenerValorCarta( carta ) {
    const cartaCortada = carta.slice(0,carta.length-1)

    if( !isNaN(cartaCortada) ) {
        return Number(cartaCortada);
    } else  if ( cartaCortada == "A") {
        return 11;
    } else {
        return 10;            
    }
        
}

function insertarCartaDeck( carta, deck ) {
    // creo mi imagen
    const milimagen = document.createElement("img");

    milimagen.src=`assets/cartas/${carta}.png`
    milimagen.className="carta"
    
    // inserto mi imagen
    document.querySelector( deck ).append(milimagen)
}


function turnoComputadora() {
    do{
        const carta = deck.pop();
        insertarCartaDeck( carta,  '#cartas-computadora');    
        puntosComputadora = obtenerValorCarta(carta) + puntosComputadora;
        document.querySelector(`#turno-compu small`).innerText = puntosComputadora;    
        console.log("tu total de puntos es:", puntosComputadora)

    } while(puntosJugador > puntosComputadora && puntosJugador <=21)

        determinarGanador()
}


btnPedir.addEventListener('click', () => {
    const carta = deck.pop();
    
    
    insertarCartaDeck( carta, '#cartas-jugador')

    
    
    puntosJugador = obtenerValorCarta(carta) + puntosJugador;
    

    console.log("tu total de puntos es:", puntosJugador)


    
    //actulizar los puntos del jugador en el html, si el jugador pierde se tiene que desavilitar botones lo mismo si gana 
    if (puntosJugador > 21 ) {
        console.error("perdiste")
        btnPedir.disabled = true;
        btnDetener.disabled= true;
        turnoComputadora();
    } else if (puntosJugador === 21 ){
        console.warn("21 yei")
        btnPedir.disabled = true;
        btnDetener.disabled = true;
    }
    
    // tarea actualizar los puntos del html, desabilitar boton si pierde y añadir el boton detener 
    document.querySelector(`h1 small`).innerText = puntosJugador;
    
});




//agregar boton detener, lo que tiene que hacer es desabilitar botones 
btnDetener.addEventListener('click', () => {
    turnoComputadora()
    btnPedir.disabled = true;
    btnDetener.disabled = true;

});

// tarea caundo sele click al boton nuevo que se vacie 
function determinarGanador (){
    if (puntosJugador  === puntosComputadora === 21 ){
        console.log("empate")
    }else if (puntosJugador>21){
        console.log("perdiste")        
    }else if(puntosComputadora >21){
        console.log("ganaste")
    }else if (puntosComputadora > puntosJugador && puntosComputadora < 21) {
        console.log("La computadora gano");
    }else if(puntosComputadora ===21){
        console.log("computadora gano")

    }
    

}

btnNuevo.addEventListener('click', () => {
    deck = [];
    puntosJugador = 0;
    puntosComputadora = 0;
    document.querySelector('#cartas-jugador').innerHTML = '';
    document.querySelector('#cartas-computadora').innerHTML = '';
    document.querySelector(`h1 small`).innerText = 0;
    document.querySelector(`#turno-compu small`).innerText = 0;
    btnPedir.disabled = false;
    btnDetener.disabled = false;

    crearDeck();
    console.log(deck)
    deck = _.shuffle(deck);
    
});