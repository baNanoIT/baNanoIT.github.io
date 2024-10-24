document.addEventListener("DOMContentLoaded", function() {
  const secciones = document.querySelectorAll("main section");
  const enlaces = document.querySelectorAll(".indice a");

  window.addEventListener("scroll", function() {
    let fromTop = window.scrollY + 10;

    secciones.forEach((seccion, index) => {
      const enlace = enlaces[index];
      const offsetTop = seccion.offsetTop;
      const offsetBottom = seccion.offsetTop + seccion.offsetHeight;

      if (fromTop >= offsetTop && fromTop < offsetBottom) {
        enlaces.forEach(a => a.classList.remove("active"));
        enlace.classList.add("active");
      }
    });
  });
});
