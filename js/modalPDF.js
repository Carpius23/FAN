
document.addEventListener('DOMContentLoaded', function() {
    const pdfModal = document.getElementById('pdfModal');
    const pdfFrame = document.getElementById('pdfFrame');

    if (pdfModal && pdfFrame) {
        pdfModal.addEventListener('show.bs.modal', function (event) {
            const trigger = event.relatedTarget;
            const pdfUrl = trigger?.getAttribute('data-pdf');

            if (pdfUrl) pdfFrame.setAttribute('src', pdfUrl);
        });

        pdfModal.addEventListener('hidden.bs.modal', function () {
            pdfFrame.setAttribute('src', '');
        });
    }
});