document.addEventListener('DOMContentLoaded', () => {

    // ============================================================
    // INDICACIÓN 1: Al hacer click en "Ingresar", mostrar alerta con el correo
    // ============================================================
    const botonIngresar = document.querySelector('.boton_azul');
    const inputUsuario = document.getElementById('usuario');

    if (botonIngresar && inputUsuario) {
        botonIngresar.addEventListener('click', (e) => {
            e.preventDefault();
            const correo = inputUsuario.value.trim();

            if (correo !== '') {
                alert(`Bienvenido\n${correo}`);
            } else {
                alert('Por favor, ingresa un correo electrónico.');
            }
        });
    }

    // ============================================================
    // INDICACIÓN 2: Al hacer click en "+", sumar 1 al contador
    // ============================================================
    const botonesMas = document.querySelectorAll('.Mas');
    const contadorSpan = document.querySelector('.Libros_Seleccion_0 span');

    botonesMas.forEach((boton) => {
        boton.addEventListener('click', () => {
            if (contadorSpan) {
                let cantidadActual = parseInt(contadorSpan.textContent, 10) || 0;
                contadorSpan.textContent = cantidadActual + 1;
            }
        });
    });

    // ============================================================
    // INDICACIÓN 3: Al pasar el cursor sobre el video, cambiar miniatura/fuente
    // ============================================================
    const videoElement = document.querySelector('.contenedor_video video');

    if (videoElement) {
        const videoOriginal = videoElement.src;
        // Ruta del archivo alternativo (puedes cambiar esta ruta por tu imagen o video deseado)
        const recursoAlternativo = videoElement.dataset.hover || 'static/images/cuadrado.png';

        videoElement.addEventListener('mouseenter', () => {
            videoElement.src = recursoAlternativo;
        });

        videoElement.addEventListener('mouseleave', () => {
            videoElement.src = videoOriginal;
            videoElement.play();
        });
    }

});