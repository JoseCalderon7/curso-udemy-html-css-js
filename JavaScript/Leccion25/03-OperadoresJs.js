// * SUMA
let a = 3, b = 2
let z = a + b
console.log("Resultado de la suma: "+z);

// * RESTA
z = a - b
console.log("Resultado de la suma: "+z);

// * MULTIPLICACIÓN
z = a * b
console.log("Resultado de la multiplicación: " + z);

// * DIVISIÓN
z = a / b
console.log("Resultado de la división: " + z);

// * RESIDUO
z = a % b
console.log("Resultado del residuo de la división: " + z);

// * EXPONENTES
z = a ** b
console.log("Resultado del exponente: " + z);

// * INCREMENTO
// PreIncremento (el operador ++ antes de la variable)
z = ++a
console.log(a);
console.log(z);

// Post-Incremento (el operador ++ despues de la variable)
z = b++
console.log(b);
console.log(z);

// * DECREMENTO
// PreDecremento
z = --a
console.log(a);
console.log(z);

// Post-Decremento
z = b--;
console.log(b);
console.log(z);

// * PROCEDENCIA DE EXPRECIONES
let c = 1;
let d = 4;
z = a * b + c
console.log(z);

z = c + a * b
console.log(z);

z = a * b + c / d
console.log(z);

z = c + a * b / d
console.log(z);

z = (c + a) * b / c
console.log(z);

// * MANERAS DE APLICAR DE FORMA RÁPIDA LOS OPERADORES.
a += 3; // a = a + 3
console.log(a);

a -= 2; // a = a + 3
console.log(a);

// * MÁS FORMATOS...
// a *=
// a %=
// a /=
// a **=

