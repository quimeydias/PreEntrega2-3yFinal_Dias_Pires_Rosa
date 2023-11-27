// Definición de la función traerProducto que recibe un idDiv (identificador del elemento HTML)
// y una condición que se utilizará para filtrar productos
function traerProducto(idDiv, condicion) {

    // Inicializar la lista de productos y la cadena de HTML
    productos = [];
    shtml = "";

    // Obtener la URL actual del navegador
    URLactual = window.location.href;

    // Determinar la ruta del archivo JSON según la página actual
    if (URLactual.includes("index.html")) {
        link = "json/";
    } else {
        link = "../json/";
    }

    // Realizar una solicitud fetch para obtener los datos del archivo productos.json
    fetch(link + "productos.json")
        .then(response => response.json())
        .then(data => {
            // Limpiar la lista de productos y llenarla con los datos obtenidos
            productos = [];
            data.forEach(element => {
                productos.push(element);
            });

            // Obtener el elemento HTML con el id proporcionado
            let elemento = document.getElementById(idDiv);

            // Iterar sobre la lista de productos
            for (let i = 0; i < productos.length; i++) {
                // Verificar si el elemento es "[object HTMLDivElement]" y limpiarlo si es necesario
                if (elemento == "[object HTMLDivElement]") {
                    elemento = "";
                }

                // Verificar si la categoría del producto coincide con la condición proporcionada
                if (productos[i].category == condicion) {
                    // Construir el fragmento de HTML para un producto y agregarlo a la cadena shtml
                    shtml = `
                        <a href="html/verProducto.html?id=${productos[i].id}" class="tarjeta">
                            <div class="imgTarjeta" style="background-image: url(${productos[i].image});"></div>
                            <div class="imgNombre">
                                <p>${productos[i].title}</p>
                            </div>
                            <div class="imgPrecio">
                                <p>$${productos[i].price}</p>
                            </div>
                        </a>`;
                    // Concatenar el fragmento de HTML a la cadena elemento
                    elemento = elemento + shtml;
                    // Asignar la cadena elemento al contenido HTML del elemento con el id proporcionado
                    document.getElementById(idDiv).innerHTML = elemento;
                }

                // Verificar si la condición es 1 y si la calificación del producto es mayor o igual a 4.7
                if (condicion == 1 && productos[i].rating.rate >= 4.7) {
                    // Construir el fragmento de HTML para un producto y agregarlo a la cadena shtml
                    shtml = `
                        <a href="html/verProducto.html?id=${productos[i].id}" class="tarjeta">
                            <div class="imgTarjeta" style="background-image: url(${productos[i].image});"></div>
                            <div class="imgNombre">
                                <p>${productos[i].title}</p>
                            </div>
                            <div class="imgPrecio">
                                <p>$${productos[i].price}</p>
                            </div>
                        </a>`;
                    // Concatenar el fragmento de HTML a la cadena elemento
                    elemento = elemento + shtml;
                    // Asignar la cadena elemento al contenido HTML del elemento con el id proporcionado
                    document.getElementById(idDiv).innerHTML = elemento;
                }

                // Verificar si la URL actual incluye "verProducto.html"
                if (URLactual.includes("verProducto.html")) {
                    // Obtener el elemento con el id "pr"
                    let elementoTecnologia = document.getElementById("pr");
                    // Obtener la parte de la URL que contiene el id del producto
                    let str = location.href;
                    let idl = str.split('=');

                    // Limpiar el elemento si es "[object HTMLElement]"
                    if (elementoTecnologia == "[object HTMLElement]") {
                        elementoTecnologia = "";
                    }
                    // Verificar si el id del producto coincide con el id en la URL
                    if (productos[i].id == idl[1]) {
                        // Construir el fragmento de HTML para mostrar los detalles del producto
                        shtml = `
                            <div class="producto">
                                <div class="imgsProducto">
                                    <div class="imgMuestra">
                                        <div class="contImg" style="background-image: url(${productos[i].image});"></div>
                                    </div>
                                    <div class="imgMuestra">
                                        <div class="contImg" style="background-image: url(${productos[i].image});"></div>
                                    </div>
                                    <div class="imgMuestra">
                                        <div class="contImg" style="background-image: url(${productos[i].image});"></div>
                                    </div>
                                    <div class="imgMuestra">
                                        <div class="contImg" style="background-image: url(${productos[i].image});"></div>
                                    </div>
                                </div>
                                <div class="imgProdcuto">
                                    <div class="contImgProducto" style="background-image: url(${productos[i].image});"></div>
                                </div>
                                <div class="detallesProducto">
                                    <div class="marca">${productos[i].marca}</div>
                                    <div class="titulo">${productos[i].title}</div>
                                    <div class="vendidoPor">Vendido por <a class="azul">China</a></div>
                                    <div class="precio">$${productos[i].price}</div>
                                    <div class="oferta">Hasta <strong>9 cuotas</strong> sin interés de $ 75.444,33</div>
                                    <div class="comprar">Comprar ahora</div>
                                    <div class="aCarrito" id="aCarrito">Agregar al carrito</div>
                                </div>
                            </div>`;
                        // Concatenar el fragmento de HTML al elementoTecnologia
                        elementoTecnologia = elementoTecnologia + shtml;

                        // Asignar la cadena elementoTecnologia al contenido HTML del elemento con el id "pr"
                        document.getElementById("pr").innerHTML = elementoTecnologia;
                        // Asignar la descripción del producto al elemento con el id "text"
                        document.getElementById("text").innerHTML = `${productos[i].description}`;
                    }
                }

            }

            // Verificar si la URL actual incluye "verProducto.html"
            if (URLactual.includes("verProducto.html")) {
                // Event listener para agregar el producto al carrito cuando se hace clic en el botón correspondiente
                document.getElementById("aCarrito").addEventListener('click', function (e) {
                    // Obtener el id del producto de la URL
                    let str = location.href;
                    let idl = str.split('=');

                    // Obtener la lista de productos del carrito del localStorage
                    let productosDelLs = JSON.parse(localStorage.getItem("idProducto"));

                    // Inicializar la lista de productos si está vacía
                    if (productosDelLs == null) {
                        productosDelLs = [];
                    }

                    // Crear una nueva lista y copiar los elementos existentes
                    let nuevoa = [];
                    for (let i = 0; i < productosDelLs.length; i++) {
                        nuevoa.push(productosDelLs[i]);
                    }

                    // Agregar el nuevo id del producto a la lista
                    nuevoa.push(idl[1]);

                    // Limpiar y actualizar el localStorage con la nueva lista
                    localStorage.clear();
                    localStorage.setItem("idProducto", JSON.stringify(nuevoa));

                    // Actualizar el número de productos en el carrito en la interfaz
                    document.getElementById("numeroProductos").innerHTML = nuevoa.length;
                    document.getElementById("numeroProductos").classList.add('numeroProductos');
                });
            }
        })
        .catch(error => console.log(error)); // Capturar y manejar errores si ocurren durante la solicitud fetch
}