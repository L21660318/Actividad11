// Abre el modal y muestra la imagen seleccionada
function openModal(img) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");

    modal.style.display = "flex"; // Cambia a "flex" para centrar el modal
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;

    // Escucha la tecla 'Escape' para cerrar el modal
    document.addEventListener('keydown', function (event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });
}

// Cierra el modal
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";

    // Elimina el listener de la tecla 'Escape'
    document.removeEventListener('keydown', arguments.callee);
}
