const btnNuevo = document.querySelector("#btnNuevo")
const btnPedir =document.querySelector("#btnPedir")
const btnDetener = document.querySelector("#btnDetener")

let cartas = ['C','D','H','S'];
let especiales = ['A', 'J', 'Q', 'K'];
let deck = [];
let puntosJugador = 0;

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




btnPedir.addEventListener('click', () => {
    
    // creo mi imagen
    const milimagen = document.createElement("img");
    const carta = deck.pop();
    milimagen.src=`assets/cartas/${carta}.png`
    milimagen.className="carta"
    // inserto mi imagen
    document.querySelector("#cartas-jugador").append(milimagen)

    
    const cartaCortada = carta.slice(0,carta.length-1)
    console.log(cartaCortada)


    if( !isNaN(cartaCortada) ) {
        console.log("es un numero", cartaCortada)
        puntosJugador = puntosJugador + Number(cartaCortada);

    } else  {
        if ( cartaCortada == "A") {
            console.log("Es un As", cartaCortada);
            console.log(11)
             puntosJugador = puntosJugador + 11;
        } else {
            console.log("Es una carta especial", cartaCortada);
            console.log(10)
             puntosJugador = puntosJugador + 10;            
        }
    }
      

    console.log("tu total de puntos es:", puntosJugador)

    if (puntosJugador > 21 ) {
        console.error("perdiste")
    } else {
        if (puntosJugador === 21 ) {
            console.warn("21 yei")
        } else {
            console.log("ahorita vemos pae")
        }
    }
    




});



