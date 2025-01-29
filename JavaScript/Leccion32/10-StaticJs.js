//* CLASE con STATIC
class Persona {

    static contadorObjetosPersona = 0; // ATRIBUTO DE NUESTRA CLASE.
    
    email = 'Sin email.' // ATRIBUTO DE NUESTROS OBJETOS.

    constructor(nombre, apellido) {
        //* NOMBRE ATRIBUTO | NOMBRE PARÁMETRO
        this._nombre = nombre,
        this._apellido = apellido,
        Persona.contadorObjetosPersona++
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
        return this._nombre + ' ' + this._apellido
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

//* OBJETO a partir de la plantilla "Persona"
let persona1 = new Persona('Juan', 'Perez')

// persona1.saludar() / NO ES POSIBLE LLAMARLO DESDE UN OBJETO
//* SE EJECUTA DESDE LA CLASE Y NO DESDE EL OBJETO
Persona.saludar()
Persona.saludar2(persona1)


//* NUEVO OBJETO CLASE HIJA / SE LLENA CON LA INFORMACIÓN DEL PADRE.
let empleado1 = new Empleado('Maria', 'Gomez', 'Informática')
console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());


console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

console.log(persona1.email);
console.log(empleado1.email);
console.log(Persona.email); // VALOR INICIAL DE LA VARIABLE
console.log(Empleado.email); // VALOR INICIAL DE LA VARIABLE

