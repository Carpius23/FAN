document.addEventListener('DOMContentLoaded', function() {
    const videoModal = document.getElementById('videoModal');

    if (videoModal) {
        const iframe = videoModal.querySelector('#videoPlayer');
        const videoSrc = iframe?.getAttribute('data-video-src');

        videoModal.addEventListener('show.bs.modal', function () {
            if (iframe && videoSrc) iframe.setAttribute('src', videoSrc);
        });

        videoModal.addEventListener('hidden.bs.modal', function () {
            if (iframe) iframe.setAttribute('src', '');
        });
    }
});
