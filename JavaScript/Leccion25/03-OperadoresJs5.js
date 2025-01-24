let numero = "19"

console.log(typeof numero);

let edad = Number(numero)
console.log(edad);

//* VALIDAMOS SI EL VALOR ES UN NÚMERO VÁLIDO 
if (isNaN(edad)) {
    console.log("No es un número válido.");
} else {
    if (edad >= 18) {
        console.log("Puede votar");
    } else {
        console.log("No puede votar.");
    }
}

//* EJERCICIO EN TERNARIO + VALIDAR TIPO DE DATO
if (isNaN(edad)) {
    console.log("No es un número válido.");
} else {    
    let edadVoto = (edad >= 18) ? "Puede votar" : "No puede votar"
    console.log(edadVoto);
}

let x = 5
let y = 10
// PREINCREMENTO / POST-DECREMENTO
let z = ++x + y--;
console.log(x);
console.log(y);
console.log(z);

