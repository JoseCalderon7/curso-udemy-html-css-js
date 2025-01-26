//* FUNCIÓN DE TIPO EXPRESIÓN / arguments NUEVO VALOR SIN PARAMETRO.
let sumar = function (a = 4, b = 2) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b + arguments[2]
}

resultado = sumar(3, 6, 7)
console.log(resultado);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//* FUNCIÓN DE TIPO FLECHA
const sumarFuncionTipoFlecha = (a, b) => a + b
resultado = sumarFuncionTipoFlecha(2, 2)
console.log(resultado);
