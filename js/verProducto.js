document.addEventListener("DOMContentLoaded", () => {

    let str = location.href;
    
    let idl = str.split('=');
  
    console.log(idl[1]);


    shtml=""
    let elementoTecnologia = document.getElementById("pr");
    for (let i = 0; i < productos.length; i++) {
         
        if (elementoTecnologia == "[object HTMLElement]") {
            elementoTecnologia = ""
        }


        if (productos[i].id == idl[1]) {
           
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
                <div class="aCarrito">Agregar al carrito</div>
            </div>
        </div>
    
            `
            elementoTecnologia = elementoTecnologia + shtml

        document.getElementById("pr").innerHTML = elementoTecnologia
        document.getElementById("text").innerHTML = `${productos[i].description}`

        }
    }

});