// Variables
const input = document.getElementById('input-tarea');
const boton = document.getElementById('btn-agregar');
const lista = document.getElementById('lista-tareas');
const contador = document.getElementById('contador');

let numTareas = 0;

// Funciones
function actualizarContador(valor) {
    numTareas += valor;
    contador.innerText = `Tareas pendientes: ${numTareas}`;
}

function crearTarea() {
    const texto = input.value.trim();
    
    if (texto === "") {
        alert("¡Escribe algo primero!");
        return;
    }

    // Crear tarea
    const li = document.createElement('li');
    li.innerHTML = `<span>${texto}</span>`;

    // Agregar tarea en el DOM
    lista.appendChild(li);

    // Actualizar el contador del DOM
    actualizarContador(1);

    // Reseteo del campo de entrada
    input.value = "";
}

// El Evento y el paradigma de evento
boton.addEventListener('click', crearTarea);

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        crearTarea();
    }
});