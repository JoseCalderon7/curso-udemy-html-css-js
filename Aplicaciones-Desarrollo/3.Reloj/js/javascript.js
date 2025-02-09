let reloj = () =>{
    let fecha = new Date()
    hrs = formatoHora(fecha.getHours())
    min = formatoHora(fecha.getMinutes())
    seg = formatoHora(fecha.getSeconds())

    document.getElementById('hora').innerHTML = `${hrs}:${min}:${seg}`

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    const dias = ['Dom', 'Lun', 'Mar', 'Mier', 'Jue', 'Vie', 'Sab']
    let diaSemana = dias[(fecha.getDay())]
    let dia = fecha.getDate()
    let mes = meses[(fecha.getMonth())]

    let fechaCompleta = `${diaSemana}, ${dia} ${mes}`
    document.getElementById('fecha').innerHTML = fechaCompleta
}

const formatoHora = (hora) =>{
    if(hora < 10)
        hora = '0' + hora
    return hora
}

setInterval(reloj, 1000)
