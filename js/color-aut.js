// color aleatorioo

// Función para cambiar automáticamente el color de las partículas
function changeParticleColor() {
  var colors = ["#ffffff", "#f80000", "#39ff14", "#250BDF"]; // Lista de colores en formato hexadecimal
  var colorIndex = Math.floor(Math.random() * colors.length);
  var newColor = colors[colorIndex];

  particlesJS('particles-js', { // 'particles-js' es el ID del contenedor de partículas
    "particles": {
      // Resto de la configuración de las partículas aquí
      "color": {
        "value": newColor // Cambiamos el color de las partículas
      }
    }
  });
}

// Llamamos a la función para cambiar automáticamente el color de las partículas cada 3 segundos
setInterval(changeParticleColor, 3000);