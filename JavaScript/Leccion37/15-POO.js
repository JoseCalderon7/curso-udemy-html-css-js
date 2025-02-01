class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre
        this.sueldo = sueldo
    }

    //* MÉTODO CLASE PADRE
    obtenerDetalles(){
        return `Empleado - Nombre: ${this.nombre} | Sueldo: $${this.sueldo}`
    }

}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo)
        this.departamento = departamento
    }

    //* MÉTODO CLASE HIJA - SOBREESCRITURA
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} | Departamente: ${this.departamento}`
    }
}

//* ~~~~~~~~~~~~~~~~ POLIMORFISMO APLICADO ~~~~~~~~~~~~~~~~
function determinarTipo(tipo){
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){
        console.log("Es un tipo Gerente.");
        console.log(tipo.departamento);
    } else if(tipo instanceof Empleado){
        console.log("Es un tipo Empleado.");
        console.log(tipo.departamento); //! NO EXISTE EN LA CLASE PADRE.
    } else if(tipo instanceof Object){
        console.log("Es un tipo Object.");
    }
}

let empleado1 = new Empleado('Carlos', 1230990)
let gerente1 = new Gerente('Juan', 929029, 'Informática')

determinarTipo(empleado1)
determinarTipo(gerente1)