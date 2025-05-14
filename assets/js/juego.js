// Referencias HTML
const btnNuevo = document.querySelector("#btnNuevo")
const btnPedir =document.querySelector("#btnPedir")
const btnDetener = document.querySelector("#btnDetener")
const puntosJugadorHtml = document.querySelector('#puntos-jugador-html');

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

// Funciones
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

btnPedir.addEventListener('click', () => {
    
    // creo mi imagen
    const milimagen = document.createElement("img");
    const carta = deck.pop();
    milimagen.src=`assets/cartas/${carta}.png`
    milimagen.className="carta"
    // inserto mi imagen
    document.querySelector("#cartas-jugador").append(milimagen)

    
    
    puntosJugador = obtenerValorCarta(carta) + puntosJugador;
    

    console.log("tu total de puntos es:", puntosJugador)
    puntosJugadorHtml.innerHTML = puntosJugador;

    
    if (puntosJugador > 21 ) {
        console.error("perdiste")
        btnPedir.disabled = true
        btnDetener.disabled = true
    } else if (puntosJugador === 21 ){
        console.warn("21 yei")
        btnPedir.disabled = true
        btnDetener.disabled = true
    } else {
        console.log("ahorita vemos pae")
    }
});

btnDetener.addEventListener('click', () => {
    console.log('btnDetener');
    btnPedir.disabled = true;
    btnDetener.disabled = true;


    // turno computadora
    const carta = deck.pop()
    puntosComputadora = puntosComputadora + obtenerValorCarta(carta)


     // creo mi imagen
    const milimagen = document.createElement("img");
    milimagen.src=`assets/cartas/${carta}.png`
    milimagen.className="carta"

    // inserto mi imagen
    document.querySelector("#computadora-cartas").append(milimagen)


    
    if (puntosComputadora > puntosJugador) {
        console.log('computadora gana')
    } else {
        console.log('jugador gana')
    }


    // aqui es cuando nosotros ejecutamos a la computadora por primera vez
})

