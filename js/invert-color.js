const checkbox = document.getElementById('invertir-color');
const body = document.body;
const container = document.querySelector('.container');

// Verificar si hay un valor almacenado para el checkbox
const savedColorState = localStorage.getItem('colorState');
if (savedColorState === 'true') {
  checkbox.checked = true;
  changeColor();
  } else {
  // AGREGA ESTO: Si no hay nada guardado, arranca la animación por defecto
  iniciarParticulas("#ffffff"); 
}

checkbox.addEventListener('change', () => {// if else
  changeColor();
});

// Función para cambiar el color de fondo
function changeColor() {
  if (checkbox.checked) {
   // MODO CLARO (Fondo blanco, estrellas negras)
    body.style.backgroundColor = '#ffffff'; // Cambiado a blanco puro
    container.style.backgroundColor = '#f2f2f2'; // Un gris muy clarito para el contenedor
    iniciarParticulas("#000000"); // Estrellas negras
    // Guardar el estado del checkbox en el almacenamiento local
    localStorage.setItem('colorState', 'true');
  } else {
   // MODO OSCURO (Fondo negro, estrellas blancas)
    body.style.backgroundColor = '#000000'; // Fondo negro puro
    container.style.backgroundColor = '#0D1117'; // Un azul/gris súper oscuro
    
    // AGREGA ESTA LÍNEA:
    iniciarParticulas("#ffffff"); // Estrellas blancas
    // Eliminar el estado del checkbox del almacenamiento local
    localStorage.removeItem('colorState');
  }
}