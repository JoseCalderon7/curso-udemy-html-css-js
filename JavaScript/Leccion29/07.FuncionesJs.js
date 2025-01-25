//* DECLARAR UNA FUNCIÓN
function miFuncion(a, b) {
    //! Forma para llamar cuantos argumentos estamos teniendo
    console.log(arguments); 
    
    // console.log("Suma: "+ (a + b));
    return a + b
}

let resultado = miFuncion(5, 3)
console.log(resultado);

//* DECLARACIÓN DE UNA FUNCIÓN DE TIPO "EXPRESIÓN"
// let x = function(a, b){return a + b}
let sumar = function(a, b){return a + b}

resultado = sumar(1, 2)
console.log(resultado);

//* FUNCIÓN DE AUTOLLAMADO / PARA QUE SE INVOQUE ASÍ MISMA. / NO REUTILIZABLE.
(function (a, b){
    console.log("Ejecutando la función, Suma: " + (a + b));
}(2, 3))

console.log(typeof miFuncion);

// CONVIERTE NUESTRA FUNCIÓN A TEXTO.
let miFuncionTexto = miFuncion.toString()
console.log(miFuncionTexto);
