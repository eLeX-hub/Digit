// script.js
document.addEventListener('DOMContentLoaded', () => {
  console.log('El script se ha cargado correctamente.');
  alert('¡Hola desde script.js!');
});
// script.js
document.addEventListener('DOMContentLoaded', () => {
  console.log('El script se ha cargado correctamente.');
  alert('¡Hola desde script.js!');

  const boton = document.getElementById('cambiarColor');
  if (boton) {
    boton.addEventListener('click', () => {
      document.body.style.backgroundColor = '#d0f0c0'; // un verde claro
    });
  }
});
