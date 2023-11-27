// Realizar una solicitud fetch para obtener los datos del archivo productos.json
fetch('../json/productos.json')
    .then(response => response.json())
    .then(data => {
        // Limpiar la lista de productos y llenarla con los datos obtenidos
        productos = [];
        data.forEach(element => {
            productos.push(element);
        });

        // Obtener el elemento de input
        const input = document.querySelector("input");
        // Elemento que muestra los productos filtrados
        let seccionados = document.getElementById("seleccionados");
        // Elemento HTML donde se mostrarán los productos
        let elemento = document.getElementById("seccionP");
        // Obtener la URL actual del navegador
        let URLactual = window.location.href;

        // Determinar la ruta del archivo HTML según la página actual
        if (URLactual.includes("index.html")) {
            link = "html/";
        } else {
            link = "";
        }

        // Event listener para cerrar la lista de productos seleccionados si se hace clic fuera de ella
        window.addEventListener('click', function (e) {
            if (document.getElementById('seleccionados').contains(e.target)) {
                // Hacer nada si se hizo clic dentro de la lista de productos seleccionados
            } else {
                // Ocultar la lista de productos seleccionados si se hizo clic fuera de ella
                seccionados.style.display = "none";
            }
        });

        // Event listener para detectar cambios en el input de búsqueda
        input.addEventListener("input", updateValue);

        // Función para actualizar la lista de productos según la búsqueda
        function updateValue(e) {
            // Limpiar el contenido del elemento donde se mostrarán los productos
            document.getElementById("seccionP").innerHTML = "";
            elemento = "";

            // Filtrar productos que coincidan con el texto de búsqueda
            productosFiltrados = productos.filter((productos) => {
                if (productos.title.toLowerCase().includes(e.srcElement.value)) {
                    return productos.title.toLowerCase().includes(e.srcElement.value);
                }
            });

            // Limpiar el elemento de productos si el valor del input es vacío
            if (elemento == "[object HTMLDivElement]") {
                elemento = "";
                seccionados.style.display = "none";
            }

            // Ocultar la lista de productos si el valor del input es vacío
            if (e.srcElement.value == "") {
                elemento = "";
                seccionados.style.display = "none";
            } else {
                // Mostrar la lista de productos filtrados si hay resultados
                if (productosFiltrados != "") {
                    for (let i = 0; i < productosFiltrados.length; i++) {
                        // Mostrar la lista de productos seleccionados
                        seccionados.style.display = "initial";
                        // Construir el fragmento de HTML para un producto filtrado
                        shtml = `
                            <a href="${link}verProducto.html?id=${productosFiltrados[i].id}" class="tarjeta">
                                <div class="imgTarjeta" style="background-image: url(${productosFiltrados[i].image});"></div>
                                <div class="imgNombre">
                                    <p>${productosFiltrados[i].title}</p>
                                </div>
                                <div class="imgPrecio">
                                    <p>$${productosFiltrados[i].price}</p>
                                </div>
                            </a>`;
                        // Concatenar el fragmento de HTML al elemento
                        elemento = elemento + shtml;
                        // Asignar la cadena elemento al contenido HTML del elemento donde se mostrarán los productos
                        document.getElementById("seccionP").innerHTML = elemento;
                    }
                } else {
                    // Ocultar la lista de productos si no hay resultados
                    seccionados.style.display = "none";
                    elemento = "";
                }
            }
        }
    });