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
    cargarIngresos()
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


const cargarIngresos = () =>{
    let ingresosHTML = ''
    for (const ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso)
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML
}

const crearIngresoHTML = (ingreso) =>{
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
              <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
              <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                  <ion-icon name="close-circle-outline"></ion-icon>
                </button>
              </div>
            </div>
          </div>
    `
    return ingresoHTML
}