const btnNuevo = document.querySelector("#btnNuevo")
const btnPedir =document.querySelector("#btnPedir")
const btnDetener = document.querySelector("#btnDetener")

let cartas = ['C','D','H','S'];
let especiales = ['A', 'J', 'Q', 'K'];
let deck = [];

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




btnPedir.addEventListener('click', () => {
    
    // creo mio imagen
    // const milimagen = document.createElement("img");
    // // const carta = deck.pop();
    // milimagen.src=`assets/cartas/${carta}.png`
    // milimagen.className="carta"
    // // inserto mi imagen
    // document.querySelector("#cartas-jugador").append(milimagen)

    // obtener valor de la carta
    const carta = "40D"
    console.log(carta)
    const nuevaCarta = carta.slice(0,carta.length-1)
    console.log(nuevaCarta)
});



