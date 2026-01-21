document.addEventListener("DOMContentLoaded", function(){
    const textos = ["I am", "Website Builder", "Web Developer Fronted"];
    let indiceTexto = 0;
    let indiceLetra = 0;
    let escribiendo = true;

    const elemento = document.getElementById("text");

    function efectoEscritura() {
        const textoActual = textos[indiceTexto];

        if (escribiendo) {
            elemento.textContent = textoActual.slice(0, indiceLetra++);
        if (indiceLetra > textoActual.length) {
            escribiendo = false;
            setTimeout(efectoEscritura, 1000);
            return;
        }
        }else {
            elemento.textContent = textoActual.slice(0, indiceLetra--);
            if (indiceLetra === 0) {
                escribiendo = true;
                indiceTexto = (indiceTexto + 1) %
                textos.length;
            }
        }

        setTimeout(efectoEscritura, escribiendo ? 100 : 50);
    }

    efectoEscritura();
})