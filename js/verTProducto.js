document.addEventListener("DOMContentLoaded", () => {
    let elemento = document.getElementById("seccionP");
    for (let i = 0; i < productos.length; i++) {

        if (elemento == "[object HTMLDivElement]") {
            elemento = ""
        }
     
        shtml = `
            <a href="verProducto.html?id=${productos[i].id}" class="tarjeta">
                 <div class="imgTarjeta" style="background-image: url(${productos[i].image});"></div>
                      <div class="imgNombre">
                      <p>${productos[i].title}</p>
                 </div>
                 <div class="imgPrecio">
                      <p>$${productos[i].price}</p>
                 </div>
            </a>
    
    
            `
        elemento = elemento + shtml

        document.getElementById("seccionP").innerHTML = elemento
      }
    
});