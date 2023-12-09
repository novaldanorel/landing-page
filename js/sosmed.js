document.addEventListener('DOMContentLoaded', function () {
    const sr = ScrollReveal({
        distance: '65px',
        duration: 2600,
        delay: 450,
        reset: true
    });

    sr.reveal('.section', { delay: 500, origin: 'top' });
    sr.reveal('.img', { delay: 900, origin: 'top' });
    sr.reveal('.title', { delay: 200, origin: 'top' });
    sr.reveal('.btn-two', { delay: 300, origin: 'top' });
});
