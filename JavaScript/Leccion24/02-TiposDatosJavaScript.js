// * TIPO NUMBER
// var numero = 2
// console.log(numero);

// * TIPO STRING
// var nombre = "Carlos";
// console.log(typeof nombre);

// * TIPO NUMBER
nombre = 21
console.log(typeof nombre);

// * TIPO OBJECT
var objeto = {
    nombre: "Juan",
    apellido: "Perez",
    telefono: 123456789
}

// * PARA SABER EL TIPO DE DATO.
console.log(typeof objeto);

// * DATO BOOLEAN
var bandera = true
console.log(typeof bandera);

// * TIPO DE DATO "function"
function nuevaFuncion() { }
console.log(typeof nuevaFuncion);

// * TIPO DE DATO "symbol"
var simbolo = Symbol("hola");
console.log(typeof simbolo);

// * TIPO CLASE ES UN function
class persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof persona);


// * TIPO DE DATO "undefined"
var x;
console.log(x);

// * TIPO DE DATO NULL
var y = null;
console.log(y);

// * TIPO DE DATOS EN ARRAYS
var autos = ['BMW', 'VOLVO', 'AUDI']
console.log(typeof autos);

var z = '';
console.log(z);

// * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *

var nombre = 'Juan'
var apellido = 'Perez'

var nombreCompleto = nombre + " " + apellido
console.log(nombreCompleto);

var x = nombre + 219
console.log(x);

x = nombre + (2 + 2)
console.log(x);

x = 2 + 4 + nombre
console.log(x);


// * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *
// DECLARACIÓN DE VARIABLES

// ! MALA PRÁCTICA 👇🏼
// nombre = "Juanito"
// console.log(nombre2);
// 
// var nombre = "Juanito"
// console.log(nombre);

// * BUENA PRÁCTICA
// OPC 1
// let nombreDistinto
// nombreDistinto = "Juanito"
// 
// OPC 2
let nombreDistinto = "Juanito"
console.log(nombreDistinto);

// TIPO DE DATO CONSTANTE / NO PUEDE CAMBIAR.
const apellidoNuevo = "Perez";
// apellidoNuevo = "Peres"