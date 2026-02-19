document.addEventListener("DOMContentLoaded", () => {
    // Obtener todos los botones de las tarjetas
    const buttons = document.querySelectorAll('.card-button');

    // Agregar un evento de clic a cada botón
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Obtener el ID del modal a abrir desde el atributo data-target
            const targetModalId = button.getAttribute('data-target');
            const modal = document.getElementById(targetModalId);
            
            // Abrir el modal
            if (modal) {
                modal.classList.add('active'); // Asegúrate de que el modal tenga esta clase para ser visible
            }
        });
    });

    // Cerrar el modal al hacer clic en el botón de cerrar
    const closeButtons = document.querySelectorAll('.close-button');
    closeButtons.forEach(closeButton => {
        closeButton.addEventListener('click', () => {
            const modalOverlay = closeButton.closest('.modal-overlay');
            if (modalOverlay) {
                modalOverlay.classList.remove('active');
            }
        });
    });
});
