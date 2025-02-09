const personas = []

function cargarNombres(){
    texto = ''
    for (const persona of personas) {
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`
    }
    document.getElementById('personas').innerHTML = texto
}

function agregarPersona(){
    const forma = document.forms['forma']
    const nombre = forma['nombre']
    const apellido = forma['apellido']
    const persona = new Persona(nombre.value, apellido.value)
    console.log(persona);
    personas.push(persona)
    cargarNombres()
    limpiar()
}

function limpiar(){
    document.getElementById('nombre').value = ""
    document.getElementById('apellido').value = ""
}