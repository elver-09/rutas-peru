const modal = document.getElementById("modalDetalles");
const tituloModal = document.getElementById("modalTitulo");
const descripcionModal = document.getElementById("modalDescripcion");
const botonesDetalles = document.querySelectorAll(".btn-detalles");
const botonCerrar = document.getElementById("cerrarModal");

botonesDetalles.forEach(function(boton) {
    boton.addEventListener("click", function() {
        tituloModal.textContent = boton.dataset.titulo;
        descripcionModal.textContent = boton.dataset.descripcion;
        modal.classList.add("mostrar");
    });
});

botonCerrar.addEventListener("click", function() {
    modal.classList.remove("mostrar");
});
