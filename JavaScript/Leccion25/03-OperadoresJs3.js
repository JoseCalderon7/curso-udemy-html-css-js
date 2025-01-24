let a = 12
let valMin = 0, valMax = 10

//* OPERADOR "AND &&"
if(a >= valMin && a <= valMax){
    console.log("Dentro del rango.");
}else{
    console.log("Fuera del rango.");
}

//* OPERADOR "OR ||"
let vacaciones = true, diaDescanso = false
if(vacaciones || diaDescanso){
    console.log("Puede ir de salida.");
}else{
    console.log("No puede salir.");
}