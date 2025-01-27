//* LAS MEJORES PRÁCTICAS PARA ACCEDER A NUESTROS OBJETOS.

let persona = {
    //COLECCIÓN DE PROPIEDADES DE NUESTRO OBJETO
    nombre : "Juan",
    apellido : "Perez",
    edad : 48,
    nombreCompleto : function () {
        return this.nombre + ' ' + this.apellido + ' ' + this.edad
    }
}

//! FORMA ANTIGUA
console.log(persona.nombreCompleto());


//* GET / OBTIENE MÉTODOS DEL OBJETO
let persona2 = {
    //COLECCIÓN DE PROPIEDADES DE NUESTRO OBJETO
    nombre : "Juan",
    apellido : "Perez",
    edad : 48,
    get nombreCompleto() {
        return this.nombre + ' ' + this.apellido + ' ' + this.edad
    }
}
//SIMPLIFICA LA SINTAXIS
console.log(persona2.nombreCompleto);


//* SET / CAMBIA VALOR
let persona3 = {
    //COLECCIÓN DE PROPIEDADES DE NUESTRO OBJETO
    nombre : "Juan",
    apellido : "Perez",
    edad : 48,
    idioma : 'es',
    get lang(){
        return this.idioma.toUpperCase()
    },
    set lang(lang){
        this.idioma = lang.toUpperCase()
    },
    get nombreCompleto() {
        return this.nombre + ' ' + this.apellido + ' ' + this.edad
    }
}
console.log(persona3.lang);

//SE LLAMA NUESTRO MÉTODO DENTRO DEL OBJETO.
persona3.lang = 'en'

//* LANG MANDA A LLAMAR A NUESTRO MÉTODO "get" DENTRO DEL OBJETO
console.log(persona3.lang);

//* ASEGURAMOS QUE SE HAYA CONVERTIDO CORRECTAMENTE EL VALOR.
console.log(persona3.idioma);


