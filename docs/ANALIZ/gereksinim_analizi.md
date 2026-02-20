# 📄 GEREKSİNİM ANALİZİ — 6 Sigma Eğitim Kurumları Web Sitesi
**Versiyon:** 1.0 (Nihai)
**Tarih:** 2026-02-20
**Durum:** ✅ Onaylı — Frontend geliştirmeye hazır

---

## 1. PROJE KİMLİĞİ

| Alan | Değer |
|---|---|
| **Kurum Adı** | 6 Sigma Eğitim Kurumları |
| **Konum** | Ataşehir, Şelale Sk. No:29, 23040 Elazığ Merkez/Elazığ |
| **Kuruluş** | 10+ yıl |
| **Telefon** | +90 543 267 44 62 |
| **Domain** | https://www.6sigma.vip |
| **Hosting** | HAVSAN Cloud / Coolify |

---

## 2. KESİNLEŞEN SİTEMAP

```
/                    → Anasayfa
/kurumsal            → Kurumsal (Hakkımızda)
/kutuphane           → Kütüphane ve Etüt Odaları
/basarılar           → Başarılar
```

---

## 3. TASARIM SİSTEMİ

### Renk Paleti
| Renk | Kullanım | Değer |
|---|---|---|
| **Lacivert** | Ana renk, header, footer | `#1a2d5a` *(logoya göre ayarlanacak)* |
| **Kırmızı** | Vurgu, aksan | `#cc2229` *(logoya göre ayarlanacak)* |
| **Beyaz** | Arka plan, metin | `#ffffff` |

### Tipografi
- **Font:** Inter veya Satoshi (Google Fonts)
- **H1:** Büyük, cesur, lacivert veya beyaz
- **Body:** Sade, okunaklı

### Logo
- Dosya: `assets/sigma_logo.png`
- Her sayfada header'da sol köşede

---

## 4. ANASAYFA BÖLÜM DETAYLARI (Yukarıdan Aşağıya)

### 4.1 Header / Navigasyon
- Logo (sol)
- Menü linkleri: Kurumsal | Kütüphane ve Etüt Odaları | Başarılar
- ~~"Sizi Arayalım" butonu KALDIRILDI~~
- Mobil: Hamburger menü

### 4.2 Hero Bölümü
- **Arka plan:** `assets/Sigma_Görsel.jpeg` (soluk/overlay ile)
- **Üst etiket (badge):** "6Sigma Gurur Tablosu"
- **H1:** "Zirveye Ulaşanların Buluşma Noktası"
- **Alt metin:** Kısa, etkileyici kurumsal metin
- **CTA Butonları:** ~~KALDIRILDI~~
- **Başarılı öğrenci kartları:** İsimler + Kazandıkları üniversite (sansürlü listeden)

### 4.3 Kazanılan Üniversiteler Bandı
- Sadece metin olarak üniversite adları (logosu yok)
- Örn: ODTÜ | BOĞAZİÇİ | İTÜ | HACETTEPE | KOÇ | BİLKENT

### 4.4 Program Kartları (2 Büyük Kart)
- **Kart 1:** "Lise & YKS Hazırlık" — 9-12. Sınıf ve Mezunlar
- **Kart 2:** "Ortaokul & LGS Hazırlık" — 5-8. Sınıf
- *(İlkokul kesinlikle belirtilmeyecek)*

### 4.5 Neden Sigma? (Bento Grid)
- **Özellik 1:** Birebir Koçluk — Her öğrenciye özel akademik ve psikolojik destek
- **Özellik 2:** Özel Dersler — Bireysel ihtiyaca göre konu bazlı destek
- **Özellik 3:** Tecrübeli Kadro — 10+ yıllık uzman eğitim kadrosu
- *(Kütüphane 7/24 değil → bu özellik KALDIRILDI)*

### 4.6 Sayı Vurgusu (Counter Animasyonu)
- **Vurgu 1:** "Yüksek Yerleştirme Oranı" *(rakam yerine güçlü metin)*
- **Vurgu 2:** "Az Mevcutlu Sınıflar" *(12 kişi rakamı kaldırıldı)*
- **Vurgu 3:** "Yüzlerce Başarı Hikayesi" *(+500 yerine metin)*

### 4.7 Footer Öncesi CTA
- Arka plan rengi değişimi
- "İlk adımı atmak için bizi arayın" mesajı
- Direkt telefon numarası butonu

### 4.8 Footer
- **Sütun 1:** Logo + kısa kurum açıklaması + sosyal medya ikonları
  - Instagram: https://www.instagram.com/6sigmaegitim
  - Facebook: https://www.facebook.com/6SigmaEgitimKurumlari
  - WhatsApp: https://wa.me/905432674462
- **Sütun 2:** "Bize Ulaşın" — Adres, Telefon
- **Sütun 3:** Google Maps Embed (iframe hazır)

---

## 5. DİĞER SAYFALAR

### Kurumsal (/kurumsal)
- Kurumun 10+ yıllık hikayesi
- Referans görsel
- ~~Kadromuz bölümü KALDIRILDI~~

### Kütüphane ve Etüt Odaları (/kutuphane)
- Fotoğraf galerisi (mevcut dershane fotoğrafları)
- Sessiz çalışma alanları, etüt odaları tanıtımı
- NOT: Kütüphane 7/24 açık değil → belirtilmeyecek

### Başarılar (/basarılar)
- 2025 YKS başarıları: Tıp, Mühendislik, Fen Lisesi kazananları
- Öğrenci kartları: İsim (sansürlü) + Kazandığı Bölüm
- Filtre: "Tıp" | "Mühendislik" | "Diğer"
- Veri kaynağı: `assets/WhatsApp Image 2026-02-20 at 15.54.28.jpeg`

---

## 6. TEKNİK KARAR LOG

| Konu | Karar | Gerekçe |
|---|---|---|
| **Tech Stack** | HTML + CSS + Vanilla JS | Statik site, Docker'da nginx ile serve edilecek |
| **CMS** | Yok (şimdilik) | Statik, içerik güncellemesi manuel |
| **Google Analytics** | Yok | Kadir Bey tercihi |
| **WhatsApp Sticky** | Yok | Kadir Bey tercihi |
| **İletişim Formu** | Yok | Sadece footer'da iletişim bilgileri |
| **Hosting** | HAVSAN Cloud / Coolify | `6sigma.vip` domain aktif |
| **Dil** | Sadece Türkçe | — |
| **Görsel** | Mevcut dershane fotoğrafları | Stok fotoğraf YASAK |

---

## 7. VARLIK LİSTESİ (Assets)

| Dosya | Kullanım |
|---|---|
| `assets/sigma_logo.png` | Header logo, footer logo |
| `assets/Sigma_Görsel.jpeg` | Hero bölümü arka planı |
| `assets/WhatsApp Image 2026-02-20 at 15.54.28.jpeg` | Başarılar sayfası veri kaynağı |
| Ek dershane fotoğrafları | Kütüphane, galeri sayfaları |

---

## 8. GOOGLE MAPS EMBED KODU
```html
<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.2898173973076!2d39.177001000000004!3d38.665206999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4076c02139962f01%3A0x13e8d1077be750fb!2zNiBTxLBHTUEgRcSfaXRpbSBLdXJ1bWxhcsSx!5e0!3m2!1str!2str!4v1771593516055!5m2!1str!2str"
  width="600" height="450" style="border:0;" 
  allowfullscreen="" loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade">
</iframe>
```
