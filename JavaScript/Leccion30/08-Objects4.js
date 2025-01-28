//* FUNCIÓN CONSTRUCTOR - OBJETO PERSONA
function Persona(nombre, apellido, email) {
    this.nombre = nombre,
        this.apellido = apellido,
        this.email = email,
        this.nombreCompleto = function () {
            return this.nombre + ' ' + this.apellido
        }
}

//OBJETO PADRE
let padre = new Persona('Juan', 'Perez', 'j.perez@gmail.com')
console.log(padre);

//OBJETO MADRE
let madre = new Persona('Laura', 'Martez', 'l.martez@gmail,com')
console.log(madre.nombreCompleto());

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//* FORMAS DE UTILIZAR PROTOTYPE PARA AGREGAR PROPIEDADES / ESTABLECER DEFAULT
Persona.prototype.tel = '123456789' // VALOR POR DEFECTO
padre.tel = '111111111'
console.log(padre.tel);
console.log(madre.tel);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//* CAMBIO DE VALORES - ÚNICOS POR EL OBJETO
padre.nombre = 'Carlos'
console.log(padre);
console.log(madre);

//* OPC 1: MÁS FORMAL
let miObjeto = new Object()
//* UTILIZAR ESTA FORMA...
let miObjeto2 = {}

//* CLASE DEL TIPO STRING
let miCadena1 = new String('Hola')
//* UTILIZAR ESTA FORMA...
let miCadena2 = 'Hola'

let miNumero1 = new Number(1)
//* UTILIZAR ESTA FORMA...
let miNumero2 = 1

let miBoolean1 = new Boolean(true)
//* UTILIZAR ESTA FORMA...
let miBoolean2 = true

let arreglo1 = new Array()
//* UTILIZAR ESTA FORMA...
let arreglo2 = []

let miFuncion1 = new Function()
//* UTILIZAR ESTA FORMA...
let miFuncion2 = function(){}