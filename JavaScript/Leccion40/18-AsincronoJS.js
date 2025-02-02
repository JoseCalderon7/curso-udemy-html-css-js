let reloj = () => {
    let fecha = new Date()
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

//* SE MANDA A LLAMAR DE MANERA ASÍNCRONA.
setInterval(reloj, 1000)