document.addEventListener('DOMContentLoaded', function() {
    const registroBtn = document.querySelector('.card .btn-secondary');

    if (registroBtn) {
        registroBtn.addEventListener('click', function() {
            console.log('Botón de Registro presionado');
        });
    }
});
