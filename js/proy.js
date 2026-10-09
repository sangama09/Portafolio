// Lista de archivos multimedia por proyecto
const galeriaPortafolio = { 
    1: [
        { tipo: "video", src: "projec/web02.mp4" },
        { tipo: "video", src: "projec/movil02.mp4" },
        { tipo: "imagen", src: "projec/web01.png" },
        { tipo: "imagen", src: "projec/movil01.jpeg" }
    ],
    2: [
        // Aquí puedes poner los archivos exclusivos de tu Proyecto 2 cuando los tengas
        { tipo: "imagen", src: "projec/p01.jpg" }
    ]
};

let indiceActual = 0;
let listaActiva = [];

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modalGaleria");
    const botonesOjito = document.querySelectorAll(".modal-trigger");

    // Al hacer clic en cualquier botón de galería (el ojito)
    botonesOjito.forEach((boton) => {
        boton.addEventListener("click", () => {
            // Lee el ID específico que tiene ese botón en el HTML (por defecto usa el 1)
            const idProyecto = boton.getAttribute("data-id") || 1;
            
            // Carga la galería correspondiente a ese proyecto
            listaActiva = galeriaPortafolio[idProyecto] || galeriaPortafolio[1]; 
            indiceActual = 0;
            
            mostrarMediaActual();
            if (modal) {
                modal.style.display = "flex";
            }
        });
    });
});

// Función para renderizar el elemento actual (imagen o video)
function mostrarMediaActual() {
    const container = document.getElementById("modalMediaContainer");
    if (!container || listaActiva.length === 0) return;

    const item = listaActiva[indiceActual];

    if (item.tipo === "video") {
        container.innerHTML = `
            <video controls autoplay>
                <source src="${item.src}" type="video/mp4">
                Tu navegador no soporta video.
            </video>
        `;
    } else {
        container.innerHTML = `<img src="${item.src}" alt="Captura de proyecto">`;
    }
}

// Función para cambiar de imagen/video con las flechas (Next / Prev)
function cambiarMedia(direccion) {
    indiceActual += direccion;

    // Si llega al final, vuelve al inicio; si pasa del inicio, va al final
    if (indiceActual >= listaActiva.length) {
        indiceActual = 0;
    } else if (indiceActual < 0) {
        indiceActual = listaActiva.length - 1;
    }

    mostrarMediaActual();
}

// Función para cerrar la ventana modal
function cerrarModal() {
    const modal = document.getElementById("modalGaleria");
    if (modal) {
        modal.style.display = "none";
        const contenedor = document.getElementById("modalMediaContainer");
        if (contenedor) {
            contenedor.innerHTML = ""; // Detiene videos al cerrar
        }
    }
}

// Si haces clic fuera de la caja de contenido (en el fondo oscuro), se cierra
window.addEventListener("click", (event) => {
    const modal = document.getElementById("modalGaleria");
    if (event.target === modal) {
        cerrarModal();
    }
});