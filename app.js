document.addEventListener('DOMContentLoaded', function() {
    console.log('El script JavaScript personalizado (app.js) se ha cargado correctamente.');

    const fanCarouselElement = document.getElementById('fanCarousel');

    if (fanCarouselElement) {
        const fanCarousel = new bootstrap.Carousel(fanCarouselElement, {
            interval: 5000,
            wrap: true
        });

        console.log('FAN Carousel inicializado manualmente y listo para funcionar.');

        fanCarouselElement.addEventListener('slid.bs.carousel', function (event) {
            const slideIndex = event.to;
            console.log('Carrusel: La diapositiva actual es la número: ' + (slideIndex + 1));
        });
    }

    const registroBtn = document.querySelector('.card .btn-secondary'); 
    if (registroBtn) {
        registroBtn.addEventListener('click', function() {
            console.log('Botón de Registro presionado');
        });
    }

    const videoModal = document.getElementById('videoModal');

    if (videoModal) {
        console.log('Lógica del Modal de Video cargada.');
        const iframe = videoModal.querySelector('#videoPlayer');
        const videoSrc = iframe.getAttribute('data-video-src');

        videoModal.addEventListener('show.bs.modal', function () {
            if (iframe && videoSrc) {
                iframe.setAttribute('src', videoSrc); 
                console.log('Video cargado e iniciado al abrir el modal.');
            }
        });

        videoModal.addEventListener('hidden.bs.modal', function () {
            if (iframe) {
                iframe.setAttribute('src', ''); 
                console.log('Video detenido y liberado al cerrar el modal.');
            }
        });
    }
    
   /* ----------------------------------------------------
   MODAL PDF - ACTAS (tu lógica original)
---------------------------------------------------- */
const pdfModal = document.getElementById('pdfModal');
const linkActas = document.getElementById('linkActas');

if (pdfModal && linkActas) {
    console.log('Lógica del Modal de PDF cargada (Actas).');
    const pdfFrame = pdfModal.querySelector('#pdfFrame');

    pdfModal.addEventListener('show.bs.modal', function (event) {
        if (event.relatedTarget === linkActas) { 
            const pdfUrl = linkActas.getAttribute('href');

            if (pdfFrame && pdfUrl) {
                pdfFrame.setAttribute('src', pdfUrl);
                console.log('PDF de ACTAS cargado desde: ' + pdfUrl);
            }
        }
    });

    pdfModal.addEventListener('hidden.bs.modal', function () {
        if (pdfFrame) {
            pdfFrame.setAttribute('src', '');
            console.log('PDF limpiado al cerrar el modal.');
        }
    });
}



/* ----------------------------------------------------
   MODAL PDF - REPORTE (nuevo y sin interferencia)
---------------------------------------------------- */
const linkReporte = document.getElementById('linkReporte');

if (pdfModal && linkReporte) {
    console.log('Lógica del Modal de PDF cargada (Reporte).');
    const pdfFrame = pdfModal.querySelector('#pdfFrame');

    pdfModal.addEventListener('show.bs.modal', function (event) {
        if (event.relatedTarget === linkReporte) { 
            const pdfUrl = linkReporte.getAttribute('href');

            if (pdfFrame && pdfUrl) {
                pdfFrame.setAttribute('src', pdfUrl);
                console.log('PDF de REPORTE cargado desde: ' + pdfUrl);
            }
        }
    });


    }
});