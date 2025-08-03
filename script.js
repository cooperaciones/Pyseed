// script.js

const clases = [
  {
    titulo: "Clase 1: Introducción",
    descripcion: "Bienvenido a la introducción del curso de Python. Aquí conocerás las bases y cómo usaremos esta plataforma.",
    video: "https://www.youtube.com/embed/kqtD5dpn9C8"
  },
  {
    titulo: "Clase 2: Variables",
    descripcion: "Aprenderás qué son las variables, cómo se crean y usan en Python.",
    video: "https://www.youtube.com/embed/_uQrJ0TkZlc"
  },
  {
    titulo: "Clase 3: Condicionales",
    descripcion: "Exploraremos las estructuras condicionales como if, elif y else.",
    video: "https://www.youtube.com/embed/7uoaNZEgV3k"
  },
  {
    titulo: "Clase 4: Bucles",
    descripcion: "Aprenderás a usar bucles for y while en Python.",
    video: "https://www.youtube.com/embed/6iF8Xb7Z3wQ"
  },
  {
    titulo: "Clase 5: Funciones",
    descripcion: "Aquí verás cómo definir y usar funciones propias en tus programas.",
    video: "https://www.youtube.com/embed/NSbOtYzIQI0"
  }
];

let claseActual = 0;

// Elementos del DOM
const titulo = document.getElementById("titulo");
const descripcion = document.getElementById("descripcion");
const video = document.getElementById("video");
const btnAnterior = document.getElementById("anterior");
const btnSiguiente = document.getElementById("siguiente");
const itemsMenu = document.querySelectorAll(".menu-item");

// Actualiza el contenido según claseActual
function actualizarContenido() {
  const clase = clases[claseActual];
  titulo.textContent = clase.titulo;
  descripcion.textContent = clase.descripcion;
  video.src = clase.video;

  // Actualizar botones
  btnAnterior.disabled = claseActual === 0;
  btnSiguiente.disabled = claseActual === clases.length - 1;

  // Actualizar menú lateral
  itemsMenu.forEach((item, i) => {
    item.classList.toggle("active", i === claseActual);
  });
}

// Navegación con botones
btnAnterior.addEventListener("click", () => {
  if (claseActual > 0) {
    claseActual--;
    actualizarContenido();
  }
});

btnSiguiente.addEventListener("click", () => {
  if (claseActual < clases.length - 1) {
    claseActual++;
    actualizarContenido();
  }
});

// Navegación con clics en el menú lateral
itemsMenu.forEach((item, index) => {
  item.addEventListener("click", () => {
    claseActual = index;
    actualizarContenido();
  });
});

// Cargar contenido inicial
actualizarContenido();
