const ingresos = [
    new Ingreso('Salario', 4000),
    new Ingreso('Hora extra', 4000)
]

const egresos = [
    new Egreso('Renta', 1000),
    new Egreso('Auto', 500)
]

let cargarApp = () =>{
    cargarCabezero()
}

let totalIngresos = () =>{
    let totalIngresos = 0
    for (let ingreso of ingresos) {
        totalIngresos += ingreso.valor
    }
    return totalIngresos
}

let totalEgresos = () =>{
    let totalEgresos = 0
    for (let egreso of egresos) {
        totalEgresos += egreso.valor
    }
    return totalEgresos
}

let cargarCabezero = () =>{
    let presupuesto = totalIngresos() - totalEgresos()
    let porcentajeEgreso = totalEgresos()/totalIngresos()
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto)
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso)
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos())
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos())
}

const formatoMoneda = (valor) => {
    return valor.toLocaleString('en-US',{style:'currency', currency:'USD', minimumFractionDigits:0})
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('en-US',{style:'percent', minimumFractionDigits:1})
}