document.addEventListener("DOMContentLoaded", () => {
    let elemento = document.getElementById("masVendidos");
    for (let i = 0; i < productos.length; i++) {

        if (elemento == "[object HTMLDivElement]") {
            elemento = ""
        }
        if (productos[i].rating.rate >= 4.7) {
        shtml = `
            <a href="html/verProducto.html?id=${productos[i].id}" class="tarjeta">
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

        document.getElementById("masVendidos").innerHTML = elemento
      }
    }



    shtml=""
    let elementoHogar = document.getElementById("tecnologia1");
    for (let i = 0; i < productos.length; i++) {
         
        if (elementoHogar == "[object HTMLDivElement]") {
            elementoHogar = ""
        }


        if (productos[i].category == "Hogar") {

            shtml = `
            <a href="html/verProducto.html?id=${productos[i].id}" class="tarjeta">
                 <div class="imgTarjeta" style="background-image: url(${productos[i].image});"></div>
                      <div class="imgNombre">
                      <p>${productos[i].title}</p>
                 </div>
                 <div class="imgPrecio">
                      <p>$${productos[i].price}</p>
                 </div>
            </a>
    
            `
        elementoHogar = elementoHogar + shtml

        document.getElementById("tecnologia1").innerHTML = elementoHogar

        }
    }

    shtml=""
    let elementoTecnologia = document.getElementById("tecnologia");
    for (let i = 0; i < productos.length; i++) {
         
        if (elementoTecnologia == "[object HTMLDivElement]") {
            elementoTecnologia = ""
        }


        if (productos[i].category == "Electrodomésticos") {

            shtml = `
            <a href="html/verProducto.html?id=${productos[i].id}" class="tarjeta">
                 <div class="imgTarjeta" style="background-image: url(${productos[i].image});"></div>
                      <div class="imgNombre">
                      <p>${productos[i].title}</p>
                 </div>
                 <div class="imgPrecio">
                      <p>$${productos[i].price}</p>
                 </div>
            </a>
    
            `
            elementoTecnologia = elementoTecnologia + shtml

        document.getElementById("tecnologia").innerHTML = elementoTecnologia

        }
    }

});






const botonIzquierda = document.querySelector(".izquierda");
const botonDerecha = document.querySelector(".derecha");

const contenedor = document.querySelector(".tarjetas");


botonIzquierda.addEventListener("click", () => {
    contenedor.scrollLeft -= 800;


})

botonDerecha.addEventListener("click", () => {
    contenedor.scrollLeft += 800;


})





const botonIzquierda1 = document.querySelector(".izquierda1");
const botonDerecha1 = document.querySelector(".derecha1");

const contenedor1 = document.querySelector(".contenedorCategorias");


botonIzquierda1.addEventListener("click", () => {
    contenedor1.scrollLeft -= 800;


})

botonDerecha1.addEventListener("click", () => {
    contenedor1.scrollLeft += 800;


})




const botonIzquierda2 = document.getElementById("izquierda");
const botonDerecha2 = document.getElementById("derecha");

const contenedor2 = document.getElementById("tecnologia");


botonIzquierda2.addEventListener("click", () => {
    contenedor2.scrollLeft -= 800;


})

botonDerecha2.addEventListener("click", () => {
    contenedor2.scrollLeft += 800;


})


const botonIzquierda3 = document.getElementById("izquierda1");
const botonDerecha3 = document.getElementById("derecha1");

const contenedor3 = document.getElementById("tecnologia1");


botonIzquierda3.addEventListener("click", () => {
    contenedor3.scrollLeft -= 800;


})

botonDerecha3.addEventListener("click", () => {
    contenedor3.scrollLeft += 800;


})

