/* ================================================
   6 Sigma — Başarılar Sayfası JavaScript
   2025 YKS Başarı Listesi
   ================================================ */

// Başarı veritabanı (WhatsApp görselindeki listeden)
const basarilar = [
    // TIP
    { isim: 'Deniz M.', bolum: 'Tıp Fakültesi (Burslı)', uni: 'Medipol Üni.', kategori: 'tip' },
    { isim: 'Meleknur Ö.', bolum: 'Tıp (İngilizce)', uni: 'Hacettepe Üni.', kategori: 'tip' },
    { isim: 'Enes H.', bolum: 'Tıp Fakültesi', uni: 'Hacettepe Üni.', kategori: 'tip' },
    { isim: 'Hakan K.', bolum: 'Tıp Fakültesi', uni: 'Ankara Üni.', kategori: 'tip' },
    { isim: 'Melih E.', bolum: 'Tıp Fakültesi', uni: 'Cerrahpaşa Üni.', kategori: 'tip' },
    { isim: 'Emine Ş.', bolum: 'Tıp Fakültesi', uni: 'Cerrahpaşa Üni.', kategori: 'tip' },
    { isim: 'Eylül K.', bolum: 'Tıp Fakültesi', uni: 'Ankara Üni.', kategori: 'tip' },
    { isim: 'Bedirhan D.', bolum: 'Tıp Fakültesi', uni: 'Ankara Üni.', kategori: 'tip' },
    { isim: 'Ecrin E.', bolum: 'Tıp Fakültesi', uni: 'Ankara Üni.', kategori: 'tip' },
    { isim: 'Yusuf O.', bolum: 'Tıp Fakültesi', uni: 'Ankara Üni.', kategori: 'tip' },
    { isim: 'Ebrar M.', bolum: 'Tıp Fakültesi', uni: 'Ankara Üni.', kategori: 'tip' },
    { isim: 'Ahmet D.', bolum: 'Tıp Fakültesi', uni: 'Gazi Üni.', kategori: 'tip' },
    { isim: 'Salih K.', bolum: 'Tıp Fakültesi', uni: 'Gazi Üni.', kategori: 'tip' },
    { isim: 'Hüseyin Y.', bolum: 'Tıp Fakültesi', uni: 'Gazi Üni.', kategori: 'tip' },
    { isim: 'Fatma D.', bolum: 'Tıp Fakültesi', uni: 'Gazi Üni.', kategori: 'tip' },
    { isim: 'Hasan A.', bolum: 'Tıp Fakültesi', uni: 'Marmara Üni.', kategori: 'tip' },
    { isim: 'Hiranur G.', bolum: 'Tıp (İngilizce)', uni: 'Marmara Üni.', kategori: 'tip' },
    { isim: 'Ali E.', bolum: 'Tıp Fakültesi', uni: 'Eskişehir Osmangazi', kategori: 'tip' },
    { isim: 'Oğuz Y.', bolum: 'Tıp Fakültesi', uni: 'Eskişehir Osmangazi', kategori: 'tip' },
    { isim: 'Murat M.', bolum: 'Tıp Fakültesi', uni: 'Yıldırım Beyazıt', kategori: 'tip' },
    { isim: 'Nehir D.', bolum: 'Tıp Fakültesi', uni: 'Yıldırım Beyazıt', kategori: 'tip' },
    { isim: 'Sertuğ Y.', bolum: 'Tıp (İngilizce)', uni: 'Yıldırım Beyazıt', kategori: 'tip' },
    { isim: 'Yusuf K.', bolum: 'Tıp Fakültesi', uni: 'İstanbul Üni.', kategori: 'tip' },
    { isim: 'Zeynep D.', bolum: 'Tıp Fakültesi', uni: 'İzmir Katip Çelebi', kategori: 'tip' },
    { isim: 'Esra E.', bolum: 'Tıp Fakültesi', uni: 'İzmir Katip Çelebi', kategori: 'tip' },
    { isim: 'Deniz G.', bolum: 'Tıp Fakültesi', uni: 'İzmir Katip Çelebi', kategori: 'tip' },
    { isim: 'Ali Ö.', bolum: 'Tıp Fakültesi', uni: 'İzmir Katip Çelebi', kategori: 'tip' },
    { isim: 'Esat Y.', bolum: 'Tıp Fakültesi', uni: 'İstanbul Medeniyet', kategori: 'tip' },
    { isim: 'Eyüphan C.', bolum: 'Tıp Fakültesi', uni: 'Samsun Üni.', kategori: 'tip' },
    { isim: 'Hatice F.', bolum: 'Tıp Fakültesi', uni: 'Erciyes Üni.', kategori: 'tip' },
    { isim: 'Mehmet K.', bolum: 'Tıp Fakültesi', uni: 'Muğla Sıtkı Koçman', kategori: 'tip' },
    { isim: 'Umut D.', bolum: 'Tıp Fakültesi', uni: 'Beykent Üni.', kategori: 'tip' },
    { isim: 'Reyyan Ş.', bolum: 'Tıp Fakültesi', uni: 'Amasya Üni.', kategori: 'tip' },
    { isim: 'Esmanur C.', bolum: 'Tıp Fakültesi', uni: 'Fırat Üni.', kategori: 'tip' },
    { isim: 'Elif A.', bolum: 'Tıp Fakültesi', uni: 'Fırat Üni.', kategori: 'tip' },
    { isim: 'Yusuf A.', bolum: 'Tıp Fakültesi', uni: 'Fırat Üni.', kategori: 'tip' },
    { isim: 'Aysima T.', bolum: 'Tıp Fakültesi', uni: 'Fırat Üni.', kategori: 'tip' },
    { isim: 'Ahmet T.', bolum: 'Tıp Fakültesi', uni: 'Fırat Üni.', kategori: 'tip' },
    { isim: 'Esat Ö.', bolum: 'Tıp Fakültesi', uni: 'Fırat Üni.', kategori: 'tip' },
    { isim: 'Melis B.', bolum: 'Tıp Fakültesi', uni: 'Fırat Üni.', kategori: 'tip' },
    { isim: 'Gökay Ü.', bolum: 'Tıp Fakültesi', uni: 'Fırat Üni.', kategori: 'tip' },
    { isim: 'Bedirhan Ü.', bolum: 'Tıp Fakültesi', uni: 'Fırat Üni.', kategori: 'tip' },
    { isim: 'Zülal Z.', bolum: 'Tıp Fakültesi', uni: 'Fırat Üni.', kategori: 'tip' },
    { isim: 'Hamza B.', bolum: 'Tıp Fakültesi', uni: 'Fırat Üni.', kategori: 'tip' },
    { isim: 'Abdülsamet Ö.', bolum: 'Tıp Fakültesi', uni: 'Fırat Üni.', kategori: 'tip' },
    { isim: 'Yusuf F.', bolum: 'Tıp Fakültesi', uni: 'Fırat Üni.', kategori: 'tip' },
    { isim: 'Yusuf A.', bolum: 'Tıp Fakültesi', uni: 'Fırat Üni.', kategori: 'tip' },
    { isim: 'Ezel İ.', bolum: 'Tıp Fakültesi', uni: 'Fırat Üni.', kategori: 'tip' },
    { isim: 'Murat A.', bolum: 'Tıp Fakültesi', uni: 'Fırat Üni.', kategori: 'tip' },
    { isim: 'Burak B.', bolum: 'Tıp Fakültesi', uni: 'Fırat Üni.', kategori: 'tip' },
    { isim: 'Abdüsselam Ç.', bolum: 'Tıp Fakültesi', uni: 'Fırat Üni.', kategori: 'tip' },
    { isim: 'Sümeyye Ş.', bolum: 'Tıp Fakültesi', uni: 'Fırat Üni.', kategori: 'tip' },
    { isim: 'Halil Y.', bolum: 'Tıp Fakültesi', uni: 'Mersin Üni.', kategori: 'tip' },
    { isim: 'Ali M.', bolum: 'Tıp Fakültesi', uni: 'Turgut Özal Üni.', kategori: 'tip' },
    { isim: 'Yusuf S.', bolum: 'Tıp Fakültesi', uni: 'Turgut Özal Üni.', kategori: 'tip' },
    { isim: 'Ekin T.', bolum: 'Tıp Fakültesi', uni: 'Turgut Özal Üni.', kategori: 'tip' },
    { isim: 'Ecesu Ö.', bolum: 'Tıp Fakültesi', uni: 'Gaziantep (Sanko)', kategori: 'tip' },
    { isim: 'Elif E.', bolum: 'Tıp Fakültesi', uni: 'Demiroğlu Bilim Üni.', kategori: 'tip' },

    // MÜHENDİSLİK
    { isim: 'Emirhan K.', bolum: 'Bilgisayar Müh.', uni: 'ODTÜ', kategori: 'muhendislik' },
    { isim: 'Zeynep K.', bolum: 'Fen/Eğitim', uni: 'Boğaziçi Üni.', kategori: 'muhendislik' },
    { isim: 'Selin A.', bolum: 'Mimarlık', uni: 'İTÜ', kategori: 'muhendislik' },
    { isim: 'Ali V.', bolum: 'Mimarlık', uni: 'İTÜ', kategori: 'muhendislik' },
    { isim: 'Mehmet D.', bolum: 'Bilgisayar Müh.', uni: 'Hacettepe Üni.', kategori: 'muhendislik' },

    // DİĞER
    { isim: 'Ayşe Y.', bolum: 'Diş Hekimliği', uni: 'Hacettepe Üni.', kategori: 'diger' },
    { isim: 'Ceyda Y.', bolum: 'Güzel İşletme', uni: 'Fırat Üni.', kategori: 'diger' },
    { isim: 'Burak K.', bolum: 'Tıp Fakültesi', uni: 'Fırat Üni.', kategori: 'diger' },
    { isim: 'Muhammed A.', bolum: 'Tıp Fakültesi', uni: 'Fırat Üni.', kategori: 'diger' },
    { isim: 'Emirhan K.', bolum: 'Tıp Fakültesi', uni: 'Fırat Üni.', kategori: 'diger' },
    { isim: 'Ayberk A.', bolum: 'Tıp Fakültesi', uni: 'Fırat Üni.', kategori: 'diger' },
    { isim: 'Hatice B.', bolum: 'Tıp Fakültesi', uni: 'Fırat Üni.', kategori: 'diger' },
    { isim: 'Taha A.', bolum: 'Tıp Fakültesi', uni: 'Fırat Üni.', kategori: 'diger' },
    { isim: 'Ömer Ç.', bolum: 'Tıp Fakültesi', uni: 'Fırat Üni.', kategori: 'diger' },
];

// Kartları oluştur
function kartlariOlustur(filtre = 'tumu') {
    const grid = document.getElementById('basariGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const filtrelenmis = filtre === 'tumu'
        ? basarilar
        : basarilar.filter(b => b.kategori === filtre);

    filtrelenmis.forEach(ogr => {
        const kart = document.createElement('div');
        kart.className = 'basari-kart fade-in';
        kart.setAttribute('data-kategori', ogr.kategori);
        kart.innerHTML = `
      <div class="basari-kart-isim">${ogr.isim}</div>
      <div class="basari-kart-bolum">${ogr.bolum}</div>
      <div class="basari-kart-uni">${ogr.uni}</div>
    `;
        grid.appendChild(kart);
        // Yeni kartları fadeObserver'a kaydet
        if (typeof fadeObserver !== 'undefined') {
            fadeObserver.observe(kart);
        }
    });

    // Yeni kartlara fade-in uygula
    setTimeout(() => {
        grid.querySelectorAll('.fade-in').forEach(el => el.classList.add('gorunur'));
    }, 50);
}

// Filtre butonları
document.querySelectorAll('.filtre-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filtre-btn').forEach(b => b.classList.remove('aktif'));
        btn.classList.add('aktif');
        kartlariOlustur(btn.dataset.filtre);
    });
});

// Sayfa yüklenince
kartlariOlustur();
