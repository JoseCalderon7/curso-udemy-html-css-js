//! FORMA ANTIGUA DE CREAR UN ARREGLO.
// let autos = new Array('BMW', 'Volvo', 'Toyota')

//* FORMA CORRECTA DE DECLARAR UN ARREGLO.
const autos = ['BMW', 'Volvo', 'Toyota']
console.log(autos);

console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i + '.- ' + autos[i]);
}

//* Para asignar un nuevo valor.
autos[1] = 'NercedezBenz'
console.log(autos);

autos.push('Audi')
console.log(autos);

console.log(autos.length);
autos[autos.length] = 'Zuzuki'

console.log(autos);
console.log(autos.length);

autos[5] = 'Ferrari'
console.log(autos);

//* PARA SABER SI SON ARREGLOS.

console.log(Array.isArray(autos));
console.log(autos instanceof Array);
