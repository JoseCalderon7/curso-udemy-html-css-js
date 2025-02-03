let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion){
        resolver('Resolución correcta.')
    } else{
        rechazar('Existe un error.')
    }
});


//* FORMAS DE LLAMAR LAS PROMESAS. 
// miPromesa.then(
//     valor => console.log(valor),
//     error => console.log(error) 
// )

// miPromesa
// .then(valor => console.log(valor))
// .catch(error => console.log(error))

//* LLAMADO DE PROMESA ASÍNCRONA
let promesa = new Promise((resolver) => {
    //console.log("Inicio promesa.");
    setTimeout( () => resolver('Saludo con promesa y timeout'), 3000)
    //console.log("Fin promesa.");
})

//promesa.then(valor => console.log(valor));

//* ASYNC INDICA QUE UNA FUNCIÓN REGRESA UNA PROMESA.
async function miFuncionConPromesa() {
    return console.log('Saludos con promesa "async"');
}

miFuncionConPromesa().then(valor => console.log(valor));

//? ASYNC / AWAIT
async function funcionConPromesaYAwait() {
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await')
    })

    console.log(await miPromesa);
}

funcionConPromesaYAwait();



//* PROMESA / ASYNC / AWAIT / SETTIMEOUT
async function funcionConPromesaAwaitTimeout() {
    console.log('Inicio promesa');
    let miPromesa = new Promise(hola => {
        setTimeout(() => hola('Promesa con await y timeout'), 5000)
    })
    console.log(await miPromesa);
    console.log('Fin promesa');
}

funcionConPromesaAwaitTimeout()