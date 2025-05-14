const btnPedir = document.querySelector("#btnPedir");
const contenedorCartas = document.querySelector("#cartas-jugador");

let cartas = ['C', 'D', 'H', 'S'];
let especiales = ['A', 'J', 'Q', 'K'];
let deck = [];

function crearDeck() {
    for (const carta of cartas) {
        for (let i = 2; i <= 10; i++) {
            deck.push(`${i}${carta}`);
        }
    }

    for (const especial of especiales) {
        for (const carta of cartas) {
            deck.push(especial + carta);
        }
    }
}

// Crear y mezclar el mazo
crearDeck();
deck = _.shuffle(deck);

// Función para obtener el valor de una carta
function obtenerValorCarta(carta) {
    let cartaCortada = carta.slice(0, carta.length - 1); // Eliminamos el palo (C, D, H, S)

    if (!isNaN(cartaCortada)) { // Si es un número, lo convertimos
        return parseInt(cartaCortada);
    } else {
        return cartaCortada === "A" ? 11 : 10; // Los J, Q, K valen 10, el A vale 11
    }
}

// Evento para pedir una carta
btnPedir.addEventListener('click', () => {
    if (deck.length === 0) {
        console.log("No quedan cartas en el mazo.");
        return;
    }

    const carta = deck.pop(); // Sacar una carta del mazo
    const valor = obtenerValorCarta(carta);

    console.log("Carta obtenida:", carta);
    console.log("Valor de la carta:", valor);

    // Crear un contenedor para la carta y su valor
    const divCarta = document.createElement("div");
    divCarta.classList.add("carta-container");

    // Crear imagen de la carta
    const imagenCarta = document.createElement("img");
    imagenCarta.src = `assets/cartas/${carta}.png`;
    imagenCarta.className = "carta";

    // Crear el texto con el valor de la carta
    const textoValor = document.createElement("span");
    textoValor.className = "valor-carta";
    textoValor.textContent = `Valor: ${valor}`;

    // Agregar la imagen y el texto al contenedor
    divCarta.appendChild(imagenCarta);
    divCarta.appendChild(textoValor);
    contenedorCartas.appendChild(divCarta);
});