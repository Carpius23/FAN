document.addEventListener('DOMContentLoaded', function() {

    const pdfModal = document.getElementById('pdfModal');
    const pdfFrame = document.getElementById('pdfFrame');

    if (pdfModal && pdfFrame) {

        pdfModal.addEventListener('show.bs.modal', function (event) {

            const trigger = event.relatedTarget;
            const pdfUrl = trigger?.getAttribute('data-pdf');

            // Detectar móvil por tamaño de pantalla
            const esMovil = window.matchMedia("(max-width: 768px)").matches;

            if (esMovil && pdfUrl) {
                // 📱 En móvil abrir en nueva pestaña
                event.preventDefault();
                window.open(pdfUrl, '_blank');
                return;
            }

            // 💻 En escritorio cargar en el modal
            if (pdfUrl) {
                pdfFrame.setAttribute('src', pdfUrl);
            }
        });

        pdfModal.addEventListener('hidden.bs.modal', function () {
            pdfFrame.setAttribute('src', '');
        });
    }
});