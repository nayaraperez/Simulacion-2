# README - Biblioteca Horizonte

## Descripción General
El proyecto Biblioteca Horizonte es una plataforma web desarrollada para la visualización e interacción con un catálogo de biblioteca digital[cite: 1]. La interfaz permite a los usuarios consultar categorías literarias, explorar recomendaciones de libros, gestionar un contador de lecturas seleccionadas e interactuar con componentes multimedia[cite: 1, 3].

---

## Estructura de Archivos
* `index.html`: Estructura principal del documento HTML con marcado semántico[cite: 1].
* `static/css/style.css`: Hoja de estilos que define el diseño visual, maquetación con Flexbox y estilos tipográficos[cite: 2].
* `static/js/script.js`: Archivo con la lógica en JavaScript para la interactividad de la interfaz[cite: 3].
* `static/images/`: Carpeta que contiene las imágenes de la interfaz, logotipos y portadas de libros[cite: 1, 2].
* `static/video/`: Carpeta destinada a los recursos de video[cite: 1, 3].

---

## Funcionalidades Implementadas

### 1. Encabezado y Autenticación
* Presentación del nombre y logotipo de la biblioteca[cite: 1].
* Campo de entrada de texto para ingresar el correo electrónico del usuario[cite: 1].
* Indicador visual dinámico del número de libros seleccionados[cite: 1].

### 2. Categorías Literarias
* Menú horizontal de navegación con géneros destacados: Novelas, Ciencia, Historia, Tecnología, Arte e Infantil[cite: 1].
* Diseño estructurado mediante tarjetas con imagen y título por categoría[cite: 1, 2].

### 3. Sección de Contenido y Multimedia
* Mensaje institucional de bienvenida sobre la biblioteca virtual[cite: 1].
* Reproductor de video integrado para la presentación de la biblioteca[cite: 1].
* Tarjetas de libros recomendados con título, autor, enlace de detalles y botón de acción[cite: 1].

### 4. Lógica de Interacción (JavaScript)
* **Validación de ingreso:** Al presionar el botón "Ingresar", se despliega un mensaje de alerta en el navegador confirmando el correo del usuario o solicitando su ingreso si el campo está vacío[cite: 3].
* **Incremento de contador:** Al hacer clic en el botón con el símbolo "+" en cualquier tarjeta de libro, el contador de libros seleccionados en la barra superior se incrementa en una unidad[cite: 3].
* **Efecto interactivo en video:** Al pasar el cursor sobre el reproductor de video, la fuente del archivo cambia dinámicamente para reproducir un video explicativo alternativo y vuelve al recurso inicial al retirar el cursor[cite: 3].

---

## Tecnologías Utilizadas
* **HTML5**: Estructuración semántica del documento[cite: 1].
* **CSS3**: Maquetación adaptativa mediante Flexbox, bordes, sombras y paleta de colores[cite: 2].
* **JavaScript (ES6)**: Manipulación de eventos del DOM e interactividad de la aplicación[cite: 3].

---

## Instrucciones de Uso
1. Mantener la estructura de carpetas (`static/css/`, `static/js/`, `static/images/`, `static/video/`)[cite: 1, 2, 3].
2. Abrir el archivo `index.html` en cualquier navegador web moderno[cite: 1].
3. Probar las interacciones del campo de correo, el contador de libros y la reproducción del video[cite: 3].

---

## Información del Autor
* **Autor:** Nayara Pérez
* **Correo electrónico:** nayaraperez@liceovvh.cl