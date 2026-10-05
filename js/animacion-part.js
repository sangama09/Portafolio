
// 1. Abres la función en la línea 1 (Esta es la caja)
function iniciarParticulas(colorFijo) {
particlesJS(
  {
    "particles": {
      "number": {
        "value": 850, // Número de partículas en la animación
        "density": {
          "enable": true,
          "value_area": 800 // Densidad de partículas en un área de 800
        }
      },
      "color": {
        "value": colorFijo // para color fijo de las particulas, se puede cambiar el color en formato hexadecimal pero se puee cambiar a #000000 
      },
      "shape": {
        "type": "circle", // Forma de las partículas (círculo)
		
        "stroke": {
          "width": 0,
		
         "color": "#000000" // Color del borde de las partículas en formato hexadecimal
        },
        "polygon": {
          "nb_sides": 5 // Número de lados para partículas de forma poligonal (pentágonos)
        },
        "image": {
          "src": "img/github.svg", // Ruta de la imagen utilizada para las partículas (opcional)
          "width": 100,
          "height": 100
        }
      },
	  
	  
	  
     "opacity": {
        "value": 1.5, // Opacidad de las partículas (0 a 1)
        "random": true, // da efecto de que uno es mas grade que otro en true en falso todos iguales
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 0.5, // Tamaño de las partículas
        "random": false,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false, // Conexiones entre partículas las lines en true salen lineas entre las partículas
        "distance": 150, // Distancia máxima para conexiones entre partículas
		
       "color": "#ffffff", // Color de las conexiones en formato hexadecimal
        "opacity": 0.4,
        "width": 1 // Grosor de las conexiones
      },
      "move": {
        "enable": true, // Movimiento de las partículas
        "speed": 0.8, // Velocidad de movimiento de las partículas
        "direction": "none", // Dirección de movimiento (none, top, top-right, right, etc.)
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"// Efecto repulsión al pasar el cursor sobre las partículas
        },
        "onclick": {
          "enable": true,
          "mode": "push" // Efecto push al hacer clic sobre las partículas
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 80,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        },
		
		
      }
    },
    "retina_detect": true // Detectar pantalla retina para mejorar calidad de partículas (opcional)
  }
);}

// Recolector de basura (Garbage Collector) para evitar lag
setInterval(() => {
  // Verificamos que la animación esté funcionando
  if (window.pJSDom && window.pJSDom.length > 0) {
    
    // Entramos al motor de la librería para leer cuántas partículas hay vivas
    let arregloParticulas = window.pJSDom[0].pJS.particles.array;
    let limiteMaximo = 900; // Juega con este número. Es el máximo permitido.
    
    // Si la cantidad de partículas supera nuestro límite...
    if (arregloParticulas.length > limiteMaximo) {
      // Eliminamos las más antiguas (las primeras en crearse) sin interrumpir la animación
      arregloParticulas.splice(0, arregloParticulas.length - limiteMaximo);
    }
  }
}, 1000); // El vigilante revisa la memoria cada 1 segundo (1000 ms)