class Persona{

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPersona(){
        return this._idPersona
    }

    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    get apellido(){
        return this._apellido
    }
    set apellido(apellido){
        this._apellido = apellido
    }
    get edad(){
        return this._edad
    }
    set edad(edad){
        this._edad = edad
    }

    toString(){
        // return this._idPersona + ' ' + this._nombre + ' ' + this._apellido + ' ' + this._edad
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`;
    }

}

class Empleado extends Persona{
    static contadorEmpleado = 0;
    
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleado;
        this._sueldo = sueldo
    }

    get idEmpleado(){
        return this.idEmpleado
    }
    get sueldo(){
        return this.sueldo
    }
    set sueldo(sueldo){
        this.sueldo = sueldo
    }

    toString(){
        // Nos regresa toda la información de la clase padre.
        // return super.toString() + this._idEmpleado + ' ' + this._sueldo
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`
    }
}

class Cliente extends Persona{
    static contadorCliente = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad)
        this._idCliente = ++Cliente.contadorCliente
        this._fechaRegistro = fechaRegistro
    }
    get idCliente(){
        return this.idCliente
    }
    get fechaRegistro(){
        return this.fechaRegistro
    }
    set fechaRegistro(fechaRegistro){
        this.fechaRegistro = fechaRegistro
    }

    toString(){
        // return super.toString() + ' ' + this._idCliente + ' ' + this._fechaRegistro
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`
    }
}

let persona1 = new Persona(1, 'Juan', 'Perez', 28)
console.log(persona1);

let persona2 = new Persona(2, 'Juan', 'Perez', 28)
console.log(persona2);

let empleado1 = new Empleado('Carlos', 'Soto', 24, 10, 599000)
console.log(empleado1.toString());

let empleado2 = new Empleado('Steve', 'Perez', 22, 1, 999000)
console.log(empleado2.toString());

let cliente1 = new Cliente('Sofia', 'Garrido', 32, Date.now())
console.log(cliente1);

let cliente2 = new Cliente('Roberto', 'Lara', 18, new Date())
console.log(cliente2.toString());

let cliente3 = new Cliente('Esteban', 'Paez', 31, new Date())
console.log(cliente3.toString());

