let condicion = true;

if(condicion){
    console.log("Condición True.");
}else{
    console.log("Condición False");
}

//* EJERCICIO 1
let numero = 6

if (numero == 1) {
    console.log("Número uno");
} else if (numero == 2) {
    console.log("Número dos");
} else if (numero == 3) {
    console.log("Número tres");
} else if (numero == 4) {
    console.log("Número cuatro");
} else if (numero == 5) {
    console.log("Número cinco");
}else{
    console.log("Otro número.");
}

//* EJERCICIO 2
let mes = 10;
let estacion;

if (mes == 1 || mes == 2 || mes == 12) {
    estacion = "Invierno"
} else if (mes == 3 || mes == 4 || mes == 5) {
    estacion = "Primavera"
} else if (mes == 6 || mes == 7 || mes == 8) {
    estacion = "Verano"
} else if (mes == 9 || mes == 10 || mes == 11) {
    estacion = "Otoño"
}else{
    estacion = "Ninguna."
}

console.log("La estación es: " + estacion);

//* EJERCICIO 3
let hora = 0;
let mensaje;

if (hora >= 6 && hora <= 11) {
    mensaje = "Buenos Días."
    console.log("Buenos Días.");
} else if(hora >= 12 && hora <= 18) {
    mensaje = "Buenos Tardes."
    console.log("Buenas Tardes.");
} else if(hora >= 19 && hora <= 24){
    mensaje = "Buenos Noches."
    console.log("Buenas Noches.");
} else if(hora >= 0 && hora < 6){
    mensaje = "Durmiendo"
    console.log("Durmiendo");
} else{
    mensaje = "Valor no válido."
    console.log("Valor no válido.");
}

console.log("Estado: " + mensaje);


//* SENTENCIA: SWITCH
numero = 1

let numeroTexto = "Valor desconocido"

switch(numero){
    case 1:
        numeroTexto = "Número uno."
        break
    case 2:
        numeroTexto = "Número dos."
        break
    case 3:
        numeroTexto = "Número tres."
        break
    case 4:
        numeroTexto = "Número cuatro."
        break
    default:
        numeroTexto = "Valor no encontrado."
}

console.log(numeroTexto);


//* EJERCICIO 1 - ESTACIONES DEL AÑO CON SWITCH
mes = 2
estacion = "No especificada."
switch( mes ){
    case 1: case 2: case 12:
        estacion = 'Invierno';
        break;
    case 3: case 4: case 5:
        estacion = 'Primavera';
        break;
    case 6: case 7: case 8:
        estacion = 'Verano';
        break;
    case 9: case 10: case 11:
        estacion = 'Otoño';
        break;
    default:
        estacion = 'Valor incorrecto';          
}

console.log(estacion);

