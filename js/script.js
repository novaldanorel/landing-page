document.addEventListener('DOMContentLoaded', function () {
    const sr = ScrollReveal({
        distance: '65px',
        duration: 2600,
        delay: 450,
        reset: true
    });

    sr.reveal('.section', { delay: 200, origin: 'top' });
    sr.reveal('img', { delay: 600, origin: 'top' });
    sr.reveal('.btn-one', { delay: 300, origin: 'top' });
    sr.reveal('.btn-two', { delay: 300, origin: 'top' });
});
