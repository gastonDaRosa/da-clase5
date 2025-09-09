document.addEventListener("DOMContentLoaded", function () {
    const contadorDisplay = document.getElementById("contadorDisplay");
    const mensajeError = document.getElementById("mensajeError");

    // Función para actualizar el contador desde el backend
    function actualizarContador() {
        fetch('/contador/vistaConectada', {
            method: 'POST'
        })
        .then(response => response.json())
        .then(data => {
            // Actualizar el valor del contador
            contadorDisplay.innerText = data[0].parametro;
            mensajeError.style.display = "none"; // Ocultar cualquier mensaje de error al actualizar
        })
        .catch(error => {
            console.error('Error al obtener el contador:', error);
        });
    }

    // Función para mostrar un mensaje de error o éxito
    function mostrarMensaje(mensaje, tipo) {
        mensajeError.textContent = mensaje;
        mensajeError.style.color = tipo === "error" ? "red" : "green";
        mensajeError.style.display = "block";
    }

    // Función para incrementar el contador
    function incrementarContador() {
        fetch('/contador/sumar', {
            method: 'POST',
        })
        .then(() => actualizarContador()) // Actualizar después de sumar
        .catch(error => console.error('Error al incrementar el contador:', error));
    }

    // Función para decrementar el contador
    function decrementarContador() {
        fetch('/contador/restar', {
            method: 'POST',
        })
        .then(response => response.json())
        .then(data => {
            if (data[0].id === "mensaje") {
                // Si la respuesta contiene un mensaje de error, lo mostramos
                mostrarMensaje(data[0].parametro, "error");
            } else {
                // Si no hay error, actualizamos el contador
                actualizarContador();
            }
        })
        .catch(error => console.error('Error al decrementar el contador:', error));
    }

    // Inicializar el contador al cargar la página
    actualizarContador();

    // Asignar eventos a los botones
    document.getElementById("aumentar").addEventListener("click", incrementarContador);
    document.getElementById("disminuir").addEventListener("click", decrementarContador);
});
