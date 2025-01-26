//* SUMA DE ARGUMENTOS
let resultado = sumarTodo(3, 2, 1, 2, 2)

function sumarTodo() {
    let suma = 0
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i] // suma = suma + argumentos
    }
    return suma
}

console.log(resultado);

//* PASOS POR VALOR EN "FUNCIONES"
let x = 10 //VALOR PRIMITIVO

function cambiarValor(a) {
    a = 20
}

//* PASO POR VALOR
cambiarValor(x)
console.log(x);

//! CUANDO SE TERMINA DE USAR EL MÉTODO LA VARIABLE SE DESTRUYE.
// console.log(a);

//* CREACIÓN DE UN OBJETO - PERSONA ALMACENA UNA "REFERENCIA"...
const persona = {
    nombre : "Juan",
    apellido : "Perez",
    edad : 27
}

function cambiarValorObjeto(p1) {
    // SE PASA EL VALOR DE LA REFERENCIA
    p1.nombre = "Rosa"
    p1.apellido = "Gomez"
}

//* PASO POR REFERENCIA - ACCEDER A LOS VALORES Y MODIFICARLOS
cambiarValorObjeto(persona)
console.log(persona);
