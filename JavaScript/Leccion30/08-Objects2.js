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
console.log(persona['apellido']);

//* FOR IN / PARA RECORRER OBJETOS
for(nombreCaracteristica in persona){
    console.log(nombreCaracteristica);
    console.log(persona[nombreCaracteristica]);
}

//* AGREGAR PROPIEDADES AL OBJETO
//FORMA INCORRECTA DE AGREGAR PROPIEDADES / CUIDADO!.
persona.tel = '911223344'
persona.te1 = '911223344'

console.log(persona);

//! ELIMINAR PROPIEDADES DE NUESTROS OBJETOS
delete persona.te1
console.log(persona);


//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//* FORMAS DE IMPRIMIR VALOR A CADA PROPIEDAD
console.log(persona.nombre + ' ' + persona.apellido);

for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

let pesonaArray = Object.values(persona)
console.log(pesonaArray);

let personaString = JSON.stringify(persona)
console.log(personaString);
