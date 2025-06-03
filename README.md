git init (Inicializa un nuevo repositorio Git en la carpeta actual.) git add . (Agrega todos los archivos al área de preparación (staging).) git commit \-m "Mensaje"(Crea un commit con los cambios agregados y un mensaje.) git Branch \- M main (Cambia el nombre de la rama actual a "main".) git remote add origin… (Vincula el repositorio local con uno remoto.) git push \-u origin main (Sube los cambios a la rama "main" del repositorio remoto.)

<!DOCTYPE html>
Declara que el documento está escrito en HTML5. Es obligatorio al inicio de todo archivo HTML.

<html lang="es">
Etiqueta raíz del documento HTML. El atributo lang="es" indica que el idioma principal del contenido es español.

<head>
Sección que contiene información del documento que no se muestra directamente en la página (como metadatos y enlaces a estilos o scripts).

<meta charset="UTF-8">
Define la codificación de caracteres como UTF-8, lo que permite el uso correcto de letras acentuadas y caracteres especiales.

<title>
Define el título que aparecerá en la pestaña del navegador.

<style>
Contiene reglas CSS. En este caso, se usa para aplicar la fuente Arial al texto. Aunque se pidió sin estilos decorativos, esta sección es necesaria para cambiar la fuente.

<body>
Contiene todo el contenido visible de la página web.

<h1>
Encabezado principal del documento. Se utiliza una sola vez por página para representar el título más importante.

<h2>
Encabezados secundarios. Se usan para dividir secciones dentro del contenido, en este caso, cada boxeador.

<p>
Define un párrafo de texto. Se usa para describir a cada boxeador y también para el texto del pie de página.

# Proyecto Web Simple

## Estilos aplicados

- Se ha añadido un archivo `styles.css` enlazado al HTML.
- Cambia el fondo del cuerpo (`body`) a gris claro.
- Títulos centrados y en color oscuro.

## Funcionalidades añadidas

- Un script en `script.js` que muestra un mensaje al cargar la página.
- Un botón que, al hacer clic, cambia el color de fondo de la página.
# Proyecto Web Simple

## Estilos aplicados

- `styles.css` define un fondo gris claro y tipografía básica.
- Los títulos están centrados y usan un color oscuro.
- Se ha añadido **responsividad** para pantallas pequeñas (`max-width: 768px`):
  - Fondo blanco para mejor contraste.
  - El título se reduce y se alinea a la izquierda.
  - El botón se expande a ancho completo y mejora su legibilidad.

## Funcionalidades añadidas

- Al cargar la página, se muestra un mensaje emergente.
- Hay un botón que cambia el color de fondo al hacer clic.
