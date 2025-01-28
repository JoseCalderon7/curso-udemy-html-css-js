// Object.prototype.


//* CLASE 
class Persona {
    constructor(nombre, apellido) {
        //* NOMBRE ATRIBUTO | NOMBRE PARÁMETRO
        this._nombre = nombre,
        this._apellido = apellido
    }
    get nombre() {
        return this._nombre
    }
    set nombre(nombre) {
        this._nombre = nombre
    }
    get apellido() {
        this._apellido
    }
    set apellido(apellido) {
        this._apellido = apellido
    }
    nombreCompleto() {
        return this._nombre + ' ' + this._apellido
    }
    toString(){
        // Se aplica "Polimorfismo" (Multiples formas en tiempos de ejecucción).
        return this.nombreCompleto()
    }
}

//* EXTENDEMOS CARACTERISTICAS DE LA CLASE PADRE (PERSONA)
class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);
        this._departamento = departamento
    }
    get departamento() {
        return this._departamento
    }
    set departamento(departamento) {
        this._departamento = departamento
    }
    //* SOBREESCRITURA
    nombreCompleto() {
        // return this._nombre + ' ' + this._apellido + ', ' + this._departamento
        return super.nombreCompleto() + ', ' + this._departamento
    }
}

let persona1 = new Persona('Juan', 'Perez')
console.log(persona1.toString()); // Se manda a llamar el método.

//* NUEVO OBJETO CLASE HIJA / SE LLENA CON LA INFORMACIÓN DEL PADRE.
let empleado1 = new Empleado('Maria', 'Gomez', 'Informática')
console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());
