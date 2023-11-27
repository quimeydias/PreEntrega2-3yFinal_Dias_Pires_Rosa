// Esperar a que se cargue el contenido de la página antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {
    // Realizar una solicitud fetch para obtener los datos del archivo productos.json
    fetch('../json/productos.json')
        .then(response => response.json())
        .then(data => {
            // Limpiar la lista de productos y llenarla con los datos obtenidos
            productos = [];
            data.forEach(element => {
                productos.push(element);
            });

            // Inicializar una lista de productos copiados
            copiaProductos = [];
            // Contador para identificar productos en el carrito
            count = 0;
            // Obtener el elemento HTML con id "seccionP2"
            elemento = document.getElementById("seccionP2");

            // Obtener productos del localStorage
            productosDelLs = JSON.parse(localStorage.getItem("idProducto"));

            // Verificar si no hay productos en el carrito
            if (productosDelLs == "") {
                localStorage.clear();
                location.reload();
            }

            // Verificar si no hay productos en el localStorage
            if (productosDelLs == null) {
                // Ocultar el botón para eliminar todo
                document.getElementById("eliminarTodo").style.display = "none";
                // Mostrar mensaje indicando que no hay productos en el carrito
                document.getElementById("seccionP2").innerHTML = "No tienes ningún producto en el carrito";
                document.getElementById("seccionP2").style.marginTop = "190px";
                document.getElementById("seccionP2").style.marginBottom = "190px";
                document.getElementById("seccionP2").classList.add('nproductos');
                document.getElementById("productosElegidos").style.width = "100%";
            } else {
                // Limpiar el elemento HTML si ya tiene contenido
                if (elemento == "[object HTMLDivElement]") {
                    elemento = "";
                }

                // Ordenar los productos del localStorage
                productosDelLs.sort(function (a, b) {
                    return a - b;
                });

                // Iterar sobre todos los productos
                for (let i = 0; i < productos.length; i++) {
                    // Iterar sobre los productos en el carrito
                    for (let x = 0; x < productosDelLs.length; x++) {
                        // Verificar si el producto actual está en el carrito
                        if (productos[i].id == productosDelLs[x]) {
                            // Crear una copia del producto para mostrar en el carrito
                            let coProductos =
                            {
                                "id": productos[i].id,
                                "title": productos[i].title,
                                "price": productos[i].price,
                                "image": productos[i].image
                            };
                            // Agregar el producto copiado a la lista copiaProductos
                            copiaProductos.push(coProductos);
                        }
                    }
                }

                // Ordenar los productos copiados por su id
                copiaProductos.sort(function (a, b) {
                    return a.id - b.id;
                });

                // Iterar sobre los productos copiados para mostrar en el carrito
                for (let i = 0; i < copiaProductos.length; i++) {
                    // Construir el fragmento de HTML para un producto en el carrito
                    shtml = `
                        <a  class="tarjeta">
                            <div class="imgTarjeta" style="background-image: url(${copiaProductos[i].image});"></div>
                            <div class="imgNombre">
                                <p>${copiaProductos[i].title}</p>
                            </div>
                            <div class="imgPrecio">
                                <p>$${copiaProductos[i].price}</p>
                            </div>
                            <!-- Botón para eliminar el producto del carrito -->
                            <div class="eliminarProducto" id="eliminarProducto" onclick="miFunc(${count})"></div>
                        </a>`;
                    // Concatenar el fragmento de HTML a la cadena elemento
                    elemento = elemento + shtml;
                    // Incrementar el contador
                    count = count + 1;
                    // Asignar la cadena elemento al contenido HTML del elemento con id "seccionP2"
                    document.getElementById("seccionP2").innerHTML = elemento;
                }

                // Mostrar información en la consola para verificar
                console.log(productosDelLs);
                console.log(copiaProductos);
            }
        });

    // Agregar un event listener al botón con id "eliminarTodo" para eliminar todos los productos del carrito
    document.getElementById("eliminarTodo").addEventListener('click', function (e) {
        localStorage.clear();
        location.reload();
    });
});

// Función para eliminar un producto específico del carrito
function miFunc(id) {
    // Obtener productos del localStorage
    productosDelLs = JSON.parse(localStorage.getItem("idProducto"));
    // Ordenar los productos del localStorage
    productosDelLs.sort(function (a, b) {
        return a - b;
    });

    // Verificar si no hay productos en el localStorage
    if (productosDelLs == null) {
        productosDelLs = [];
    }
    // Eliminar el producto con el id proporcionado del array productosDelLs
    productosDelLs.splice(id, 1);
    // Mostrar información en la consola para verificar
    console.log(productosDelLs);
    // Limpiar el localStorage y almacenar el nuevo array
    localStorage.clear();
    localStorage.setItem("idProducto", JSON.stringify(productosDelLs));
    // Recargar la página
    location.reload();
}