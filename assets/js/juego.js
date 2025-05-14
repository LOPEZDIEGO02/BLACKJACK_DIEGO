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
    
    // creo mi imagen
    // const milimagen = document.createElement("img");
    // // const carta = deck.pop();
    // milimagen.src=`assets/cartas/${carta}.png`
    // milimagen.className="carta"
    // // inserto mi imagen
    // document.querySelector("#cartas-jugador").append(milimagen)

    // obtener valor de la carta
    const carta = "JD"
    console.log(carta)
    
    const cartaCortada = carta.slice(0,carta.length-1)
    console.log(cartaCortada)


    if( !isNaN(cartaCortada) ) {
        console.log("es un numero", cartaCortada)

    }  {
        if (cartaCortada === "J" || cartaCortada === "Q" || cartaCortada === "K") {
            console.log("Es una carta especial", cartaCortada);
            console.log(10)
        } else if (cartaCortada === "A") {
            console.log("Es un As", cartaCortada);
            console.log(11)
        }
    }
        
    




});



