function miFuncion1(){
    console.log("Mi función 1.");
}

function miFuncion2(){
    console.log("Mi función 2.");
}

miFuncion2()
miFuncion1()


//* FUNCIONES TIPO CALLBACK
function imprimir(mensaje){
    console.log(mensaje);
}

//* REALIZAMOS EL CALLBACK PARA ESTA FUNCIÓN
function sumar(opc1, opc2, funcionCallback){
    let res = opc1 + opc2;
    funcionCallback(`Resultado de la suma: ${res}`)
}

// ESTAMOS PASANDO LA REFERENCIA DE LA FUNCIÓN IMPRIMIR A LA 
// FUNCIÓN DE SUMAR MEDIANTE PARAMETRO.
sumar(1,2, imprimir)


//* ~~~~~~~~~~~~~~~ LLAMADAS ASÍNCRONAS ~~~~~~~~~~~~~~~
function miFuncionCallback(){
    console.log("Saludo asíncrono pasado 3 segundos.");
}

//* MANERAS DE LLAMAR "setTimeout" / NO SE EJECUTA DE MANERA SECUENCIAL.
setTimeout(miFuncionCallback, 3000) 
setTimeout(function (){console.log("Segunda salida pasado 6 segundos.");}, 6000)
setTimeout( () => console.log("Saludo asíncrono pasado 10 segundos."), 1000);