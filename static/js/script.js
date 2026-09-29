console.log("conexion js exitosa...")



document.addEventListener('DOMContentLoaded', function () {

    // 1. Alerta con el correo al hacer clic en "Ingresar"
    const botonIngresar = document.querySelector('.boton_azul');
    const inputUsuario = document.getElementById('usuario');

    if (botonIngresar !== null && inputUsuario !== null) {
        botonIngresar.addEventListener('click', function () {
            let correo = inputUsuario.value;

            if (correo !== "") {
                alert(`Bienvenido\n${correo}`);
            } else {
                alert("Por favor, ingresa un correo.");
            }
        });
    } else {
        console.log("No se encontró el botón de ingresar o el campo de usuario.");
    }

    // 2. Incrementar el contador de libros al hacer clic en "+"
    const contador = document.querySelector('.Libros_Seleccion_0 span');
    const botonesMas = document.querySelectorAll('.Mas');

    botonesMas.forEach(function (boton) {
        boton.addEventListener('click', function () {
            if (contador !== null) {
                let cantidadActual = parseInt(contador.textContent);
                contador.textContent = cantidadActual + 1;
            }
        });
    });

    // 3. Cambiar de video al pasar el cursor (hover / mouseover y mouseout)
    const video = document.querySelector('.contenedor_video video');

    if (video !== null) {
        const videoOriginal = video.src;
        const videoNuevo = 'static/video/¿Cómo_usar-las-bibliotecas_digitales_.mp4';

        video.addEventListener('mouseover', function () {
            video.src = videoNuevo;
            video.play();
        });

        video.addEventListener('mouseout', function () {
            video.src = videoOriginal;
            video.play();
        });
    }

});