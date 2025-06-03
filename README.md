git init                 # Inicializa un repositorio Git

git add .                # Añade todos los archivos al staging area
git commit -m "Mensaje"  # Crea un commit con un mensaje
git branch -M main       # Renombra la rama actual a 'main'
git remote add origin <url>  # Enlaza al repositorio remoto
git push -u origin main  # Sube los cambios a la rama principal del repositorio


# 🥊 Los 5 Mejores Boxeadores del Mundo

Una sencilla página web informativa que presenta a cinco de los mejores boxeadores actuales. Está construida con HTML puro y lista para ampliarse con estilos y scripts adicionales.

---

## 📸 Vista previa del contenido

El sitio muestra los nombres, logros y descripciones breves de:

- 🥇 Canelo Álvarez  
- 🥈 Oleksandr Usyk  
- 🥉 Tyson Fury  
- 💥 Errol Spence Jr.  
- 🧠 Terence Crawford  

Cada boxeador está representado por un título `<h2>` y un párrafo `<p>` descriptivo.

---

## 💡 Tecnologías utilizadas

- **HTML5**: estructura semántica y moderna.
- *(Opcionalmente puedes añadir)* **CSS** y **JavaScript** para estilos y funcionalidades interactivas.

---

## 📱 Preparado para responsividad

> Se recomienda añadir estilos CSS con media queries como:
```css
@media (max-width: 768px) {
  h1 {
    font-size: 1.5rem;
    text-align: center;
  }
  p {
    font-size: 1rem;
  }
}

