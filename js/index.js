// Esperar a que el contenido del documento HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {

    // Llamar a la función traerProducto para mostrar productos más vendidos con una calificación de 4.7 o superior
    traerProducto("masVendidos", 1)

    // Llamar a la función traerProducto para mostrar productos de la categoría "Hogar"
    traerProducto("tecnologia1", "Hogar")

    // Llamar a la función traerProducto para mostrar productos de la categoría "Electrodomesticos"
    traerProducto("tecnologia", "Electrodomesticos")

});

// Obtener referencias a los elementos del DOM
const botonIzquierda = document.querySelector(".izquierda");
const botonDerecha = document.querySelector(".derecha");
const contenedor = document.querySelector(".tarjetas");

// Agregar un event listener al botón de izquierda para desplazar el contenido hacia la izquierda
botonIzquierda.addEventListener("click", () => {
    contenedor.scrollLeft -= 800;
});

// Agregar un event listener al botón de derecha para desplazar el contenido hacia la derecha
botonDerecha.addEventListener("click", () => {
    contenedor.scrollLeft += 800;
});

// Repetir el mismo patrón para los siguientes conjuntos de botones y contenedores
// ...

const botonIzquierda1 = document.querySelector(".izquierda1");
const botonDerecha1 = document.querySelector(".derecha1");
const contenedor1 = document.querySelector(".contenedorCategorias");

botonIzquierda1.addEventListener("click", () => {
    contenedor1.scrollLeft -= 800;
});

botonDerecha1.addEventListener("click", () => {
    contenedor1.scrollLeft += 800;
});

// Repetir el mismo patrón para los siguientes conjuntos de botones y contenedores
// ...

const botonIzquierda2 = document.getElementById("izquierda");
const botonDerecha2 = document.getElementById("derecha");
const contenedor2 = document.getElementById("tecnologia");

botonIzquierda2.addEventListener("click", () => {
    contenedor2.scrollLeft -= 800;
});

botonDerecha2.addEventListener("click", () => {
    contenedor2.scrollLeft += 800;
});

// Repetir el mismo patrón para los siguientes conjuntos de botones y contenedores
// ...

const botonIzquierda3 = document.getElementById("izquierda1");
const botonDerecha3 = document.getElementById("derecha1");
const contenedor3 = document.getElementById("tecnologia1");

botonIzquierda3.addEventListener("click", () => {
    contenedor3.scrollLeft -= 800;
});

botonDerecha3.addEventListener("click", () => {
    contenedor3.scrollLeft += 800;
});