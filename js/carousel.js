document.addEventListener('DOMContentLoaded', function() {
    const fanCarouselElement = document.getElementById('fanCarousel');

    if (fanCarouselElement) {
        const fanCarousel = new bootstrap.Carousel(fanCarouselElement, {
            interval: 5000,
            wrap: true
        });

        fanCarouselElement.addEventListener('slid.bs.carousel', function (event) {
            const slideIndex = event.to;
            console.log('Carrusel: Diapositiva actual: ' + (slideIndex + 1));
        });
    }
});
