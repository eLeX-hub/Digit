# 🥊 Los 5 Mejores Boxeadores del Mundo

Una página web sencilla creada con HTML, CSS y JavaScript, que muestra una lista de boxeadores destacados y permite cambiar el color de fondo con un botón.

---

## 🧱 Estructura del Proyecto

- `index.html`: Contiene la estructura y contenido del sitio.
- `styles.css`: Archivo externo que aplica estilos visuales.
- `script.js`: Archivo JavaScript con funcionalidades dinámicas.

---

## 🌍 Contenido HTML

El archivo `index.html` contiene:

- Título principal (`<h1>`) y subtítulos (`<h2>`) para cada boxeador.
- Descripciones usando párrafos (`<p>`).
- Enlace al archivo `styles.css`.
- Inclusión del script `script.js`.
- Un botón interactivo para cambiar el color de fondo.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Los 5 Mejores Boxeadores del Mundo</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <h1>Los 5 Mejores Boxeadores del Mundo</h1>

  <h2>Canelo Álvarez</h2>
  <p>Campeón indiscutido en múltiples divisiones, conocido por su técnica y poder de golpeo.</p>

  <h2>Oleksandr Usyk</h2>
  <p>Un maestro del boxeo técnico, ha dominado tanto en peso crucero como en peso pesado.</p>

  <h2>Tyson Fury</h2>
  <p>El "Rey Gitano", un peso pesado con habilidades impresionantes y una gran personalidad.</p>

  <h2>Errol Spence Jr.</h2>
  <p>Un boxeador invicto con gran poder y resistencia en la categoría de peso welter.</p>

  <h2>Terence Crawford</h2>
  <p>Un púgil versátil con la capacidad de pelear en múltiples estilos y divisiones.</p>

  <button id="cambiarColor">Cambiar color de fondo</button>

  <p>© 2025 Los Mejores Boxeadores</p>

  <script src="script.js"></script>
</body>
</html>
