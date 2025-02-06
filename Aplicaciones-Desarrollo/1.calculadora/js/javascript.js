let limitarDigitos = (elemento, maxDigitos) =>{
    if(elemento.value.length > maxDigitos){
        elemento.value = elemento.value.slice(0, maxDigitos);
    }
}

// FUNCIÓN SUMAR
function sumar() {

    const num1 = parseInt(document.getElementById('valor1').value)
    const num2 = parseInt(document.getElementById('valor2').value)

    if(isNaN(num1) || isNaN(num2)){
        document.getElementById('result').innerHTML = "<em>ERROR<em/>"  
    }else{
        let suma = num1 + num2
        document.getElementById('result').innerHTML = suma
        console.log(`Resultado por consola: ${suma}`);
    }
}

// FUNCIÓN RESTAR
function restar() {

    const num1 = parseInt(document.getElementById('valor1').value)
    const num2 = parseInt(document.getElementById('valor2').value)

    if(isNaN(num1) || isNaN(num2)){
        document.getElementById('result').innerHTML = "<em>ERROR<em/>"  
    }else{
        let restar = num1 - num2
        document.getElementById('result').innerHTML = restar
        console.log(`Resultado por consola: ${restar}`);
    }
}

// FUNCIÓN DIVIDIR
function dividir() {

    const num1 = parseInt(document.getElementById('valor1').value)
    const num2 = parseInt(document.getElementById('valor2').value)

    if(isNaN(num1) || isNaN(num2)){
        document.getElementById('result').innerHTML = "<em>ERROR<em/>"  
    }else{
        let dividir = num1 / num2
        document.getElementById('result').innerHTML = parseFloat(dividir.toFixed(2))
        console.log(`Resultado por consola: ${dividir}`);
    }
}

// FUNCIÓN MULTIPLICAR
function multiplicar() {

    const num1 = parseInt(document.getElementById('valor1').value)
    const num2 = parseInt(document.getElementById('valor2').value)

    if(isNaN(num1) || isNaN(num2)){
        document.getElementById('result').innerHTML = "<em>ERROR<em/>"  
    }else{
        let multiplicar = num1 * num2
        document.getElementById('result').innerHTML = multiplicar
        console.log(`Resultado por consola: ${multiplicar}`);
    }
}

function limpiar(){
    document.getElementById("valor1").value = "";
    document.getElementById("valor2").value = "";
    document.getElementById("result").textContent = "";
}