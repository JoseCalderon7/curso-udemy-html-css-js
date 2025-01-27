//! PRIMITIVOS
let x = 10
console.log(x.lenght);

//* OBJETOS EN MEMORIA / FORMA 1
let persona = {
    //COLECCIÓN DE PROPIEDADES DE NUESTRO OBJETO
    nombre : "Juan",
    apellido : "Perez",
    edad : 48,
    nombreCompleto : function () {
        return this.nombre + ' ' + this.apellido + ' ' + this.edad
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());


//* OBJETO EN MEMORIA / FORMA 2
let persona2 = new Object()
persona2.nombre = "Carlos"
persona2.direccion = "San carlos #442"
persona2.telefono = "993847284"

console.log(persona2.telefono);
