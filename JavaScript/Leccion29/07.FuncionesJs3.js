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
