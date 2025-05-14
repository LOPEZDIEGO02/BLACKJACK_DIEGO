if (edad >= 18) {
  console.log("Es mayor de edad.");

  if (tieneLicencia) {
    console.log("Tiene licencia para conducir.");

    if (carroDisponible) {
      console.log("Puede conducir el carro.");
    } else {
      console.log("No hay carro disponible.");
    }
  } else {
    console.log("No tiene licencia para conducir.");
  }
} else {
  console.log("Es menor de edad.");
}

if (edad >= 18) {
    console.log('es mayor de edad')
} else if(tieneLicencia) {
    console.log('tiene licencia')
} else if (carroDisponible) {
    console.log('puede conducior')
}