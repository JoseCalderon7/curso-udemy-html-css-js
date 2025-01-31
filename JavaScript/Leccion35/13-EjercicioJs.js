class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada
    }
    get marca(){
        return this._marca
    }
    set marca(marca){
        this._marca = marca
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idRaton = ++Raton.contadorRatones
    }
    get idRaton(){
        return this._idRaton
    }
    toString(){
        return `Id Raton: ${this._idRaton} | Tipo entrada: ${this.tipoEntrada} | Marca: ${this.marca}`
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idTeclado = ++Teclado.contadorTeclados
    }
    get idTeclado(){
        return this._idTeclado
    }
    toString(){
        return `Id Teclado: ${this._idTeclado} | Tipo entrada: ${this.tipoEntrada} | Marca: ${this.marca}`
    }
}

class Monitor{
    static contadorMonitores = 0;
    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores
        this._marca = marca
        this._tamaño = tamaño
    }
    get idMonitor(){
        return this._idMonitor
    }
    get marca(){
        return this._marca
    }
    set marca(marca){
        this._marca = marca
    }
    get tamaño(){
        return this._tamaño
    }
    set tamaño(tamaño){
        this._tamaño = tamaño
    }
    toString(){
        return `Id Monitor: ${this._idMonitor} | Marca: ${this._marca} | Tamaño: ${this._tamaño}`
    }
}

class Computadora{
    static contadorComputadoras = 0
    constructor(nombre, monitor, raton, teclado){
        // LAS 3 VARIABLES NUEVAS SON DE AGREGACIÓN, "NO" DE HERENCIA.
        this._idComputadora = ++Computadora.contadorComputadoras
        this._nombre = nombre
        this._monitor = monitor
        this._raton = raton
        this._teclado = teclado
    }
    get idComputadora(){
        return this._idComputadora
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    toString(){
        return `Id Computadora: ${this._idComputadora} | Nombre PC: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`
    }
}

class Orden{
    static contadorOrdenes = 0
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes
        this._computadoras = []
    }
    get idOrden(){
        return this._idOrden
    }
    get computadoras(){
        return this._computadoras
    }
    set computadoras(computadoras){
        this._computadoras = computadoras
    }
    agregarComputadora(computadoras){
        //* SE ASIGNA A UN NUEVO ÍNDICE DE COMPUTADORAS.
        this._computadoras.push(computadoras)
    }
    mostrarOrden(){
        let computadorasOrden = ''
        // EN ESTE CASO "computador" CONTIENE LOS ELEMENTOS DE LA COMPUTADORA.
        for (let computador of this._computadoras) {
            computadorasOrden += `\n${computador}`
        }
        console.log(`Orden: ${this._idOrden} | Computadoras: ${computadorasOrden}`);
        
    }
}


let raton1 = new Raton('USB', 'HyperX')
let raton2 = new Raton('Bluethoot', 'HP')
let teclado1 = new Teclado('USB', 'Asus')
let teclado2 = new Teclado('USB', 'HyperX')
let monitor1 = new Monitor('Asus', '1920x1080')
let monitor2 = new Monitor('LG', '1080x720')
let computadora1 = new Computadora('Alienware', monitor2, raton2, teclado2)
let computadora2 = new Computadora('HP', monitor1, raton1, teclado1)


//* FORMAS DE VISUALIZAR LOS RESULTADOS.
console.log(computadora1.toString());
console.log(`${computadora1}`);

console.log(computadora2.toString());
console.log(`${computadora2}`);


let orden1 = new Orden()
orden1.agregarComputadora(computadora1)
orden1.agregarComputadora(computadora2)
orden1.mostrarOrden()

let orden2 = new Orden()
orden2.agregarComputadora(computadora1)
orden2.agregarComputadora(computadora1)
orden2.agregarComputadora(computadora1)
orden2.mostrarOrden()


//* EXPLICACIÓN: El problema es que debemos hacer bloques en los que debemos ingresar valores a cada clase
//* vale decir, hay distintas clases con las que podemos trabajar e incluso unirlas todas.
//* La solución a este problema fue realizar herencia y agregaciones en algunos casos, y con esto
//* llamar las funciones que están dentro de cada clase y aquellas que dependen de otras para funcionar.
//* Se agregan metodos get y set para que sea más facil trabajar con los atributos propios de la clase.
