class Producto {

    static contadorProductos = 0
    
    constructor(nombre, precio) {
        this._idProducto = ++Producto.contadorProductos
        this._nombre = nombre
        this._precio = precio
    }
    get idProducto(){
        return this._idProducto
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    get precio(){
        return this._precio
    }
    set precio(precio){
        this._precio = precio
    }
    toString(){
        return `Id Producto: ${this._idProducto}, Nombre Producto: ${this._nombre}, Precio Producto: $${this._precio}`
    }
}

class Orden{

    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes
        this._productos = []
    }

    get idOrden(){
        this._idOrden
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto)
        }else{
            console.log('No se puede agregar más productos.');
        }
    }

    calcularTotal(){
        let totalVenta = 0
        for (let producto of this._productos) {
            totalVenta += producto.precio // totalVenta = totalVenta + producto.precio
        }
        return totalVenta
    }

    mostrarOrden(){
        let productosOrden = ''
        for (let producto of this._productos) {
            productosOrden += '\n{' + producto.toString() + '}'
        }
        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()} Productos: ${productosOrden}`);
        
    }

}




let producto1 = new Producto('Pantalón', 39990)
let producto2 = new Producto('Camisa', 49990)
let producto3 = new Producto('Polera', 9990)
let producto4 = new Producto('Polerón', 12990)
let producto5 = new Producto('Zapatillas', 89000)
let producto6 = new Producto('Gorro', 2990)

let orden1 = new Orden()
orden1.agregarProducto(producto1)
orden1.agregarProducto(producto2)
orden1.mostrarOrden()

let orden2 = new Orden()
.agregarProducto(producto1)
orden2.agregarProducto(producto2)
orden2.agregarProducto(producto3)
orden2.agregarProducto(producto4)
orden2.agregarProducto(producto5)
orden2.agregarProducto(producto6)
orden2.mostrarOrden()