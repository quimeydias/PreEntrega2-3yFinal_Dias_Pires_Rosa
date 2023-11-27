// Realizar una solicitud fetch para obtener los datos del archivo productos.json
fetch('../json/productos.json')
    .then(response => response.json())
    .then(data => {
        // Limpiar la lista de productos y llenarla con los datos obtenidos
        productos = [];
        data.forEach(element => {
            productos.push(element);
        });

        // Obtener la URL actual del navegador
        URLactual = window.location.href;

        // Obtener el elemento HTML con el id "seccionP1"
        elemento = document.getElementById("seccionP1");

        // Verificar si la URL actual contiene el parámetro "buscar="
        if (URLactual.includes("buscar=")) {
            // Dividir la URL para obtener el valor después de "buscar="
            buscar = URLactual.split("buscar=");
            console.log(buscar[1]);

            // Filtrar los productos que coinciden con el término de búsqueda
            productosFiltrados = productos.filter((producto) => {
                if (producto.title.toLowerCase().includes(buscar[1])) {
                    return producto.title.toLowerCase().includes(buscar[1]);
                }
            });

            // Verificar si el elemento es "[object HTMLDivElement]" y limpiarlo si es necesario
            if (elemento == "[object HTMLDivElement]") {
                elemento = "";
            }

            // Verificar si se encontraron productos que coinciden con la búsqueda
            if (productosFiltrados != "") {
                // Iterar sobre los productos filtrados y construir el HTML correspondiente
                for (let i = 0; i < productosFiltrados.length; i++) {
                    shtml = `
                        <a href="verProducto.html?id=${productosFiltrados[i].id}" class="tarjeta">
                            <div class="imgTarjeta" style="background-image: url(${productosFiltrados[i].image});"></div>
                            <div class="imgNombre">
                                <p>${productosFiltrados[i].title}</p>
                            </div>
                            <div class="imgPrecio">
                                <p>$${productosFiltrados[i].price}</p>
                            </div>
                        </a>`;
                    // Concatenar el fragmento de HTML a la cadena elemento
                    elemento = elemento + shtml;
                    // Asignar la cadena elemento al contenido HTML del elemento con el id "seccionP1"
                    document.getElementById("seccionP1").innerHTML = elemento;
                }
            } else {
                // Mostrar un mensaje si no se encuentran resultados de búsqueda
                document.getElementById("seccionP1").innerHTML = "No se encontraron resultados de búsqueda";
                document.getElementById("seccionP1").classList.add('nproductos');
            }
        }

        // Verificar si la URL actual contiene el parámetro "categoria="
        if (URLactual.includes("categoria=")) {
            // Dividir la URL para obtener el valor después de "categoria="
            categoria = URLactual.split("categoria=");
            console.log(categoria[1]);

            // Filtrar los productos que pertenecen a la categoría proporcionada
            productosFiltrados = productos.filter((producto) => {
                if (producto.category.includes(categoria[1])) {
                    return producto.category.includes(categoria[1]);
                }
            });
            console.log(productosFiltrados);

            // Verificar si el elemento es "[object HTMLDivElement]" y limpiarlo si es necesario
            if (elemento == "[object HTMLDivElement]") {
                elemento = "";
            }

            // Verificar si se encontraron productos que pertenecen a la categoría proporcionada
            if (productosFiltrados != "") {
                // Iterar sobre los productos filtrados y construir el HTML correspondiente
                for (let i = 0; i < productosFiltrados.length; i++) {
                    shtml = `
                        <a href="verProducto.html?id=${productosFiltrados[i].id}" class="tarjeta">
                            <div class="imgTarjeta" style="background-image: url(${productosFiltrados[i].image});"></div>
                            <div class="imgNombre">
                                <p>${productosFiltrados[i].title}</p>
                            </div>
                            <div class="imgPrecio">
                                <p>$${productosFiltrados[i].price}</p>
                            </div>
                        </a>`;
                    // Concatenar el fragmento de HTML a la cadena elemento
                    elemento = elemento + shtml;
                    // Asignar la cadena elemento al contenido HTML del elemento con el id "seccionP1"
                    document.getElementById("seccionP1").innerHTML = elemento;
                }
            } else {
                // Mostrar un mensaje si no se encuentran resultados para la categoría proporcionada
                document.getElementById("seccionP1").innerHTML = "No se encontraron resultados para la categoría " + categoria[1];
                document.getElementById("seccionP1").classList.add('nproductos');
            }
        }
    });