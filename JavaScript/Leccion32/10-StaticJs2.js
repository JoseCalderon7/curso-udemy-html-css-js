class Persona {

    static contadorObjetosPersona = 0; // ATRIBUTO DE NUESTRA CLASE.
    
    // SÓLO PODEMOS LEER ESTA VARIABLE, NO SE PUEDE MODIFICAR NADA.
    static get MAX_OBJ(){
        return 5
    }

    constructor(nombre, apellido) {
        //* NOMBRE ATRIBUTO | NOMBRE PARÁMETRO
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorObjetosPersona < Persona.MAX_OBJ){
            console.log("Se crea nuevo objeto.");
            this.idPersona = ++Persona.contadorObjetosPersona //PRE-INCREMENTO para que se asigne bien el valor.
        } else{
            console.log("No se pueden crear más objetos.");
        }
    }
    get nombre() {
        return this._nombre
    }
    set nombre(nombre) {
        this._nombre = nombre
    }
    get apellido() {
        return this._apellido
    }
    set apellido(apellido) {
        this._apellido = apellido
    }
    nombreCompleto() {
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido
    }
    toString(){
        // Se aplica "Polimorfismo" (Multiples formas en tiempos de ejecucción).
        return this.nombreCompleto()
    }
    static saludar(){
        console.log("Saludos desde un método Static.");
    }
    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
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
console.log(persona1.toString());


let empleado1 = new Empleado('Maria', 'Gomez', 'Informática')
console.log(empleado1.toString());


let empleado2 = new Empleado('Maria', 'Gomez', 'Informática')
let empleado3 = new Empleado('Maria', 'Gomez', 'Informática')
let empleado4 = new Empleado('Maria', 'Gomez', 'Informática')
let empleado5 = new Empleado('Maria', 'Gomez', 'Informática')

console.log(empleado4.toString());
console.log(empleado5.toString());


console.log(Persona.contadorObjetosPersona);

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10
console.log(Persona.MAX_OBJ);

console.log(Persona.contadorObjetosPersona);
