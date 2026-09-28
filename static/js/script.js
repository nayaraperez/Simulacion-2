document.addEventListener('DOMContentLoaded', () => {

    // 1. Alerta con el correo al hacer clic en "Ingresar"
    document.querySelector('.boton_azul').onclick = () => {
        const correo = document.getElementById('usuario').value.trim();
        alert(correo ? `Bienvenido\n${correo}` : 'Por favor, ingresa un correo.');
    };

    // 2. Incrementar el contador de libros al hacer clic en "+"
    const contador = document.querySelector('.Libros_Seleccion_0 span');
    for (let boton of document.querySelectorAll('.Mas')) {
        boton.onclick = () => {
            contador.textContent = Number(contador.textContent) + 1;
        };
    }

    // 3. Cambiar de video al pasar el cursor
    const video = document.querySelector('.contenedor_video video');
    if (video) {
        const videoOriginal = video.src;
        const videoNuevo = 'static/video/¿Cómo_usar-las-bibliotecas_digitales_.mp4';

        video.onmouseenter = () => { video.src = videoNuevo; video.play(); };
        video.onmouseleave = () => { video.src = videoOriginal; video.play(); };
    }

});