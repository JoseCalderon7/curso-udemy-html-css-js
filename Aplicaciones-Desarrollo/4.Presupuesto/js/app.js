const ingresos = [
    new Ingreso('Salario', 5000),
    new Ingreso('Hora extra', 4000)
]

const egresos = [
    new Egreso('Renta', 1000),
    new Egreso('Auto', 500)
]

let cargarApp = () => {
    cargarCabezero()
    cargarIngresos()
    cargarEgresos()
}

let totalIngresos = () => {
    let totalIngresos = 0
    for (let ingreso of ingresos) {
        totalIngresos += ingreso.valor
    }
    return totalIngresos
}

let totalEgresos = () => {
    let totalEgresos = 0
    for (let egreso of egresos) {
        totalEgresos += egreso.valor
    }
    return totalEgresos
}

let cargarCabezero = () => {
    let presupuesto = totalIngresos() - totalEgresos()
    let porcentajeEgreso = totalEgresos() / totalIngresos()
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto)
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso)
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos())
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos())
}

const formatoMoneda = (valor) => {
    return valor.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 })
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('en-US', { style: 'percent', minimumFractionDigits: 1 })
}


const cargarIngresos = () => {
    let ingresosHTML = ''
    for (const ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso)
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML
}

const eliminarIngreso = (id) =>{
    let indiceEliminar = ingresos.findIndex(ingreso=> ingreso.id === id)
    ingresos.splice(indiceEliminar, 1)
    cargarCabezero()
    cargarIngresos()
}

const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
              <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
              <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                  <ion-icon name="close-circle-outline"
                  onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
                </button>
              </div>
            </div>
          </div>
    `
    return ingresoHTML
}

const cargarEgresos = () => {
    let egresosHTML = ''
    for (const egreso of egresos) {
        egresosHTML += crearEgresoHTML(egreso)
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML
}

const crearEgresoHTML = (egreso) => {
    let egresosHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${egreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
              <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
              <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
              <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                  <ion-icon name="close-circle-outline"
                  onclick='eliminarEgreso(${egreso.id})'></ion-icon>
                </button>
              </div>
            </div>
          </div>
    `
    return egresosHTML
}

const eliminarEgreso = (id) =>{
    let indiceEliminar = egresos.findIndex(egreso=> egreso.id === id)
    egresos.splice(indiceEliminar, 1)
    cargarCabezero()
    cargarEgresos()
}

const agregarDato = () =>{
    let forma = document.forms['forma']
    let tipo = forma['tipo']
    let descripcion = forma['descripcion']
    let valor = forma['valor']
    if(descripcion.value !== '' && valor.value !== ''){
        if(tipo.value === 'ingreso'){
            ingresos.push(new Ingreso(descripcion.value, Number(valor.value)))
            cargarCabezero()
            cargarIngresos()
            limpiarDatos()
        }else if(tipo.value === 'egreso'){
            egresos.push(new Egreso(descripcion.value, Number(valor.value)))
            cargarCabezero()
            cargarEgresos()
            limpiarDatos()
        }
    }
}

const limpiarDatos = () =>{
    let forma = document.forms['forma']
    forma['descripcion'].value = ""
    forma['valor'].value = ""
}