/* ================================================
   6 Sigma — Ana JavaScript
   ================================================ */

// ---- Header scroll efekti ----
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.classList.add('kaydirma');
  } else {
    header.classList.remove('kaydirma');
  }
});

// ---- Hamburger Menü ----
const hamburger = document.getElementById('hamburger');
const mobilMenu = document.getElementById('mobilMenu');

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('acik');
  mobilMenu.classList.toggle('acik');
  document.body.style.overflow = mobilMenu.classList.contains('acik') ? 'hidden' : '';
});

function menuKapat() {
  hamburger?.classList.remove('acik');
  mobilMenu?.classList.remove('acik');
  document.body.style.overflow = '';
}

// ---- Hero arka plan yüklenince animasyon ----
const heroBg = document.getElementById('heroBg');
if (heroBg) {
  setTimeout(() => heroBg.classList.add('yuklu'), 100);
}

// ---- Fade-in animasyonu (Intersection Observer) ----
const fadeElemanlar = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('gorunur');
      }, i * 100);
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.05 }); // Threshold düşürüldü

// Dinamik olarak eklenen elemanlar için fade-in observer'ı ekleme fonksiyonu
window.observeFadeIn = (element) => {
  if (element) {
    fadeObserver.observe(element);
  }
};

// Mevcut elemanları gözlemlemeye başla
fadeElemanlar.forEach(el => window.observeFadeIn(el)); // Yeni global fonksiyon kullanıldı

// ---- Öğrenci Başarı Kartları — Marquee (sonsuz kayan) ----
const ogrenciler = [
  { isim: 'Deniz M.', bolum: 'Tıp Fakültesi', uni: 'Medipol Üni.' },
  { isim: 'Meleknur Ö.', bolum: 'Tıp (İngilizce)', uni: 'Hacettepe Üni.' },
  { isim: 'Enes H.', bolum: 'Tıp Fakültesi', uni: 'Hacettepe Üni.' },
  { isim: 'Hakan K.', bolum: 'Tıp Fakültesi', uni: 'Ankara Üni.' },
  { isim: 'Melih E.', bolum: 'Tıp Fakültesi', uni: 'Cerrahpaşa Üni.' },
  { isim: 'Emine Ş.', bolum: 'Tıp Fakültesi', uni: 'Cerrahpaşa Üni.' },
  { isim: 'Eylül K.', bolum: 'Tıp Fakültesi', uni: 'Ankara Üni.' },
  { isim: 'Yusuf O.', bolum: 'Tıp Fakültesi', uni: 'Ankara Üni.' },
  { isim: 'Zeynep D.', bolum: 'Tıp Fakültesi', uni: 'İstanbul Üni.' },
  { isim: 'Sertuğ Y.', bolum: 'Tıp (İngilizce)', uni: 'Yıldırım Beyazıt' },
  { isim: 'Bedirhan D.', bolum: 'Tıp Fakültesi', uni: 'Ankara Üni.' },
  { isim: 'Ecrin E.', bolum: 'Tıp Fakültesi', uni: 'Ankara Üni.' },
  { isim: 'Emirhan K.', bolum: 'Bilgisayar Müh.', uni: 'ODTÜ' },
  { isim: 'Zeynep K.', bolum: 'Eğitim', uni: 'Boğaziçi Üni.' },
  { isim: 'Selin A.', bolum: 'Mimarlık', uni: 'İTÜ' },
];

const marqueeTrack = document.getElementById('marqueeTrack');
if (marqueeTrack) {
  // Seamless sonsuz döngü için kartları İKİ kez ekliyoruz
  [1, 2].forEach(() => {
    ogrenciler.forEach(og => {
      const kart = document.createElement('div');
      kart.className = 'ogrenci-kart';
      kart.innerHTML = `
        <div class="ogrenci-kart-isim">${og.isim}</div>
        <div class="ogrenci-kart-bolum">${og.bolum}</div>
        <div class="ogrenci-kart-uni">${og.uni}</div>
      `;
      marqueeTrack.appendChild(kart);
    });
  });
}

// ---- Aktif nav linki ----
const nagivasyonLinkleri = document.querySelectorAll('.nav a');
const mevcutSayfa = window.location.pathname.split('/').pop() || 'index.html';
nagivasyonLinkleri.forEach(link => {
  link.classList.remove('aktif');
  const hedef = link.getAttribute('href');
  if (hedef === mevcutSayfa || (hedef === '/' && mevcutSayfa === '') || (hedef === 'index.html' && mevcutSayfa === '')) {
    link.classList.add('aktif');
  }
});
