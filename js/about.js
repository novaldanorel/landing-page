document.addEventListener('DOMContentLoaded', function () {
    const sr = ScrollReveal({
        distance: '65px',
        duration: 2600,
        delay: 450,
        reset: true
    });
    
    sr.reveal('.title', { delay: 100, origin: 'top' });
    sr.reveal('.div', { delay: 300, origin: 'top' });
    // Contoh penambahan efek pada skill bar
sr.reveal('.skill-bar', {
    origin: 'left',  // Atau sesuaikan dengan arah yang diinginkan
    distance: '50px', // Jarak awal elemen dari posisi akhir saat di-reveal
    duration: 1000,   // Durasi animasi dalam milidetik
    scale: 0.5,       // Skala awal elemen sebelum di-reveal
    easing: 'ease-out', // Efek animasi
  });
  
});
