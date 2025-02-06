let limitarDigitos = (elemento, maxDigitos) =>{
    if(elemento.value.length > maxDigitos){
        elemento.value = elemento.value.slice(0, maxDigitos);
    }
}

// FUNCIÓN SUMAR
function sumar() {
    const num1 = +document.getElementById('valor1').value
    const num2 = +document.getElementById('valor2').value
    
    let suma = num1 + num2
    document.getElementById('resultado').innerHTML = suma
    console.log(`Resultado por consola: ${suma}`);

}

// FUNCIÓN RESTAR
function restar() {
    const num1 = +document.getElementById('valor1').value
    const num2 = +document.getElementById('valor2').value
    
    let restar = num1 - num2
    document.getElementById('resultado').innerHTML = restar

    console.log(`Resultado por consola: ${restar}`);
}

// FUNCIÓN DIVIDIR
function dividir() {
    const num1 = +document.getElementById('valor1').value
    const num2 = +document.getElementById('valor2').value
    
    let dividir = num1 / num2
    document.getElementById('resultado').innerHTML = dividir

    console.log(`Resultado por consola: ${dividir}`);
}

// FUNCIÓN MULTIPLICAR
function multiplicar() {
    const num1 = +document.getElementById('valor1').value
    const num2 = +document.getElementById('valor2').value
    
    let multiplicar = num1 * num2
    document.getElementById('resultado').innerHTML = multiplicar

    console.log(`Resultado por consola: ${dividir}`);
}

function limpiar(){
    document.getElementById("valor1").value = "";
    document.getElementById("valor2").value = "";
    document.getElementById("resultado").textContent = "";
    
}