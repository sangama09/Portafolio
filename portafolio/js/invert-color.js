const checkbox = document.getElementById('invertir-color');
const body = document.body;
const container = document.querySelector('.container');

// Verificar si hay un valor almacenado para el checkbox
const savedColorState = localStorage.getItem('colorState');
if (savedColorState === 'true') {
  checkbox.checked = true;
  changeColor();
}

checkbox.addEventListener('change', () => {// if else
  changeColor();
});

// Función para cambiar el color de fondo
function changeColor() {
  if (checkbox.checked) {
    body.style.backgroundColor = '#000000'; // Cambiar color de fondo del cuerpo
    container.style.backgroundColor = '#262323'; // Cambiar color de fondo del contenedor
    // Guardar el estado del checkbox en el almacenamiento local
    localStorage.setItem('colorState', 'true');
  } else {
    body.style.backgroundColor = '#262323'; // Restaurar color de fondo del cuerpo
    container.style.backgroundColor = '#000000'; // Restaurar color de fondo del contenedor
    // Eliminar el estado del checkbox del almacenamiento local
    localStorage.removeItem('colorState');
  }
}