let persona1 = {
    nombre : 'Juan',
    apellido: 'Perez',
    nombreCompleto : function(titulo, tel){
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + tel
    }
}

let persona2 = {
    nombre : 'Carlos',
    apellido: 'Soto'
}

let persona3= {
    nombre : 'Juan2',
    apellido: 'Perez2',
    nombreCompleto : function(titulo, tel){
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + tel
    }
}

//* ~~~~~~~~~~~ USO DE CALL y APPLY | Para utilizar métodos de persona1 | Cambian la forma en que pasan los datos.
console.log(persona1.nombreCompleto('Ing', '+56911223344'));

//* .CALL()
console.log(persona1.nombreCompleto.call(persona2, 'Ing', '+56911223344'));

//* APPLY() / SE UTILIZAN PARA LLAMAR FUNCIONES DE OTROS OBJETOS
let arreglo = ['Lic', '+56911223344']
console.log(persona3.nombreCompleto.apply(persona2, arreglo));
console.log(persona3.nombreCompleto.apply(persona2, ['Lic', '+56911223344']));
