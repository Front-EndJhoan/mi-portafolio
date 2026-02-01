document.addEventListener("DOMContentLoaded", function(){
    const textos = ["I am", "Website Builder", "Fronted Developer"];
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

// Modo Claro-Oscuro //

const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

const temaOscuro = {
  '--primary-color-bg': 'hsl(0, 0%, 0%)',
  '--main-text': 'hsl(0, 0%, 100%)',
};

const temaClaro = {
  '--primary-color-bg': 'hsl(0, 0%, 100%)',
  '--main-text': 'hsl(252, 100%, 35%)',
};

function aplicarTema() {
  const tema = toggle.checked ? temaOscuro : temaClaro;
  for (const prop in tema) {
    root.style.setProperty(prop, tema[prop]);
  }
}

aplicarTema();

toggle.addEventListener('change', aplicarTema);


// Nav Dinámico //

 const nav = document.querySelector(".nav-bar");
 window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.classList.add("nav-scrolled");
    } else {
        nav.classList.remove("nav-scrolled");
    }
 })

//  Cerrar Menú Hamburguesa

const menuNav = document.getElementById('menuNav');
const navLinks = document.querySelectorAll('#menuNav .nav-link');

const bsCollapse = new bootstrap.Collapse(menuNav, {
  toggle: false
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    bsCollapse.hide();
  });
});

})