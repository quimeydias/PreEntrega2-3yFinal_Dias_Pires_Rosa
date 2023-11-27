// Esperar a que el contenido del documento HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {

    // Obtener productos del localStorage y convertirlos de JSON a objeto
    productosDelLs = JSON.parse(localStorage.getItem("idProducto"));

    // Verificar si no hay productos en el localStorage
    if (productosDelLs == null) {
        // No hacer nada si no hay productos
    } else {
        // Si hay productos, mostrar la cantidad en el elemento con id "numeroProductos"
        document.getElementById("numeroProductos").innerHTML = productosDelLs.length;
        // Agregar la clase 'numeroProductos' al elemento con id "numeroProductos"
        document.getElementById("numeroProductos").classList.add('numeroProductos');
    }
});