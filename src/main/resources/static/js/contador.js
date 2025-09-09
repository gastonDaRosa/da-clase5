// contador.js
document.addEventListener("DOMContentLoaded", function () {
    const contadorDisplay = document.getElementById("contadorDisplay");

    // Función para actualizar el contador desde el backend
    function actualizarContador() {
        fetch('/api/contador')
            .then(response => response.json())
            .then(data => {
                contadorDisplay.innerText = data;
            })
            .catch(error => console.error('Error al obtener el contador:', error));
    }

    // Función para incrementar el contador en el backend
    function incrementarContador() {
        fetch('/api/contador/sumar', {
            method: 'POST',
        })
        .then(() => actualizarContador())  // Actualizar el contador después de incrementar
        .catch(error => console.error('Error al incrementar el contador:', error));
    }

    // Función para decrementar el contador en el backend
    function decrementarContador() {
        fetch('/api/contador/restar', {
            method: 'POST',
        })
        .then(() => actualizarContador())  // Actualizar el contador después de decrementar
        .catch(error => console.error('Error al decrementar el contador:', error));
    }

    // Inicializar el contador al cargar la página
    actualizarContador();

    // Asignar eventos a los botones
    document.getElementById("aumentar").addEventListener("click", incrementarContador);
    document.getElementById("disminuir").addEventListener("click", decrementarContador);
});
