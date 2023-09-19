function agregarTarea() {
    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const listaTareas = document.getElementById("listaTareas");
    const nuevaTareaTexto = nuevaTareaInput.value.trim();
    if (nuevaTareaTexto !== "") {
    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto;
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "delete";
    botonEliminar.onclick = function() {
    listaTareas.removeChild(nuevaTarea);
    };
    nuevaTarea.appendChild(botonEliminar);
    listaTareas.appendChild(nuevaTarea);
    nuevaTareaInput.value = "";
    }
}
// Función para marcar una tarea como completada
function marcarCompletada(tarea) {
    tarea.classList.toggle("completed");
    }

    // Agregar evento de clic a las tareas para marcarlas como completadas

document.getElementById("listaTareas").addEventListener("click",
function(event) {
if (event.target.tagName === "LI") {
marcarCompletada(event.target);
}
});

document.getElementById("agregar").addEventListener("click",
agregarTarea);

// Función para mostrar tareas completadas
function mostrarCompletadas() {
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {
    if (tarea.classList.contains("completed")) {
    tarea.style.display = "flex";
    } else {
    tarea.style.display = "none";
    }
    });
    }

    // Función para mostrar tareas pendientes
function mostrarPendientes() {
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {
    if (!tarea.classList.contains("completed")) {
    tarea.style.display = "flex";
    } else {
    tarea.style.display = "none";
    }
    });
    }

    document.getElementById("mostrarCompletadas").addEventListener("click", mostrarCompletadas);

    document.getElementById("mostrarPendientes").addEventListener("click", mostrarPendientes);