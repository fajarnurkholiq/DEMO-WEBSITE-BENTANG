// ============================================================
// BENTANG — script bersama untuk semua halaman
// ============================================================

document.addEventListener('DOMContentLoaded', function () {
  // Isi semua tombol WhatsApp dari config terpusat (assets/config.js)
  document.querySelectorAll('.wa-link').forEach(function (el) {
    var msg = el.getAttribute('data-msg') || '';
    var url = 'https://wa.me/' + WHATSAPP_NUMBER + (msg ? '?text=' + encodeURIComponent(msg) : '');
    el.setAttribute('href', url);
  });

  // Toggle navigasi mobile
  var toggle = document.querySelector('.nav-toggle');
  var mobileMenu = document.querySelector('.nav-mobile');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
    });
  }
});
