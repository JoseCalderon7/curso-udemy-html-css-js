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

//* OBJETO a partir de la plantilla "Persona"
let persona1 = new Persona('Juan', 'Perez')
console.log(persona1);
console.log(persona1.nombre);
persona1.nombre = 'Carlos' // set nombre ()
console.log(persona1);

//* NUEVO OBJETO CLASE HIJA / SE LLENA CON LA INFORMACIÓN DEL PADRE.
let empleado1 = new Empleado('Maria', 'Gomez', 'Informática')
console.log(empleado1);
console.log(empleado1.nombre);
empleado1.departamento = 'Sistemas'
console.log(empleado1);

//* SE HEREDA SIN PROBLEMAS EL MÉTODO DE LA CLASE.
console.log(empleado1.nombreCompleto());



let persona2 = new Persona('Carlos', 'Lara')
console.log(persona2);

