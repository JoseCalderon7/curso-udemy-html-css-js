

//* FUNCIÓN ANONIMA.
let miFuncion = function() {
    console.log("Hola desde función anonima.");
}

//* FUNCIÓN FLECHA. | let ó const | OPC. 1
// const miFuncionFlecha = () => {
//     console.log("Hola desde función flecha.");
// }

//* FUNCIÓN FLECHA. | let ó const | OPC. 2
const miFuncionFlecha2 = () => console.log("Hola desde función flecha.");

miFuncionFlecha2()

//* FUNCIÓN FLECHA. | let ó const | OPC. 3
// const saludar1 = () => {
//     return "Saludos desde función flecha."
// }

//* FUNCIÓN FLECHA. | let ó const | OPC. 4
const saludar2 = () => "Saludos desde función flecha."


console.log(saludar2());

const regresarObjeto = () => ({nombre: "Carlos", apellido : "Santana", edad: 24 })

console.log(regresarObjeto());

//* FUNCIÓN FLECHA CON (PARAMETROS) | let ó const | OPC. 1
const funcionConParametros1= (mensaje) => {
    console.log("Hola, buenos días " + mensaje);
}

//* FUNCIÓN FLECHA CON (PARAMETROS) | let ó const | OPC. 2
// const funcionConParametros2 = (mensaje) => console.log("Hola "+ mensaje);

funcionConParametros1('Juan')

const funcionConVariosParametros = (num1, num2) => {
    let resultado = num1 + num2
    return resultado
}

console.log(funcionConVariosParametros(1,2));
