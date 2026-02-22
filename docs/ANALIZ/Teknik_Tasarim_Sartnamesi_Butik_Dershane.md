# **PROJE KİMLİĞİ VE KAPSAM**

**Proje Adı:** Lider Eğitim Kurumu (Elazığ) Web Arayüz Tasarımı & UX İyileştirmesi

**Doküman Tipi:** Teknik Gereksinim Analizi ve Konsept Tasarım Raporu (PRD)

**Hazırlayan:** Kıdemli Ürün Tasarımcısı & İş Analisti

**Versiyon:** 1.3

**Tasarım Felsefesi:** Minimalizm, Görsel Hiyerarşi, "Don't Make Me Think"

## **1\. HEDEF KİTLE VE PERSONA ANALİZİ**

Geleneksel eğitim sitelerinin aksine, bu tasarım iki farklı kullanıcı grubunun dijital davranışlarına aynı anda hitap etmelidir.

### **A. Birincil Persona: Öğrenci (Z ve Alpha Kuşağı)**

* **Profil:** Lise (YKS hazırlık) ve Ortaokul öğrencisi. Dikkat süresi kısa (ortalama 8 saniye), görsel odaklı, mobil cihazdan erişim sağlar.  
* **Beklenti:** "Burası sıkıcı bir okul gibi mi?" sorusuna "Hayır, burası modern ve cool bir çalışma alanı" cevabını görsel olarak almak ister. Uzun metinleri okumaz, tarar (scanning).  
* **UX Stratejisi:** Gamification (oyunlaştırma) öğeleri hissi veren ilerleme çubukları, dinamik görseller, karanlık mod (opsiyonel) veya yüksek kontrastlı modern renkler.

### **B. İkincil Persona: Karar Verici Veli (X ve Y Kuşağı)**

* **Profil:** Sonuç odaklı, güven arayan, şehrin en iyi kurumuna çocuğunu emanet etmek isteyen ebeveynler. Genellikle desktop veya tablet kullanır.  
* **Beklenti:** Çocuğunun nerede çalışacağını, kütüphaneyi, güvenlik önlemlerini ve en önemlisi geçmiş başarıları net verilerle görmek ister.  
* **UX Stratejisi:** Güven veren tipografi, şeffaf iletişim butonları, "Şehrin En İyisi \- Kurumsal Yapı" vurgusunun altını çizen profesyonel ton.

## **2\. TASARIM DİLİ VE ESTETİK (UI YAKLAŞIMI)**

Piyasadaki "metin yığını" sitelerden ayrışmak için **"Az Çoktur" (Less is More)** prensibi uygulanacaktır.

### **2.1. Görsel Stil ve Renk Paleti**

* **Renk Psikolojisi:** Kurumsal köklülüğü ve akademik disiplini yansıtmak amacıyla; **Lacivert (Otorite ve Profesyonellik)**, **Kırmızı (Dinamizm ve Kararlılık)** ve **Beyaz (Netlik ve Ferahlık)** ana renk paleti olarak kullanılacaktır.  
* **White Space (Beyaz Boşluk):** İçeriklerin nefes alması için %40 oranında beyaz/negatif alan kullanılacak. Bu, seçkin ve ferah bir kurum algısı yaratır.  
* **Tipografi:** Tırnaksız (Sans-serif), geometrik ve modern font aileleri (Örn: *Inter, Satoshi* veya *General Sans*). Başlıklarda cesur ve büyük puntolar.

### **2.2. Görsel Bileşenler**

* **Bento Grid Düzeni:** Apple tarzı, kutucuklu yapılarla kütüphane, etüt odası ve başarıların sergilenmesi. (Mobil uyumu kusursuzdur).  
* **High-End Fotoğrafçılık:** Stok fotoğraf YASAKTIR. Kurumun gerçek kütüphanesinden, dersliklerinden profesyonel, sıcak, "yaşayan" fotoğraflar kullanılacak.  
* **Parallax Efektler:** Scroll (kaydırma) yaptıkça hafifçe hareket eden arka plan öğeleri ile derinlik hissi.

## **3\. BİLGİ MİMARİSİ (SITEMAP)**

İlkokulun olmadığını netleştiren ve liderlik vurgusunu güçlendiren yalın ağaç yapısı.

1. **ANASAYFA** (Vitrinin tamamı)  
2. **KURUMSAL KİMLİK**  
   * Hakkımızda / Neden Lideriz?  
   * Felsefemiz (Kurumsal Güç, Odaklanmış Başarı)  
   * Eğitmen Kadrosu (Yatay kaydırmalı kartlar)  
3. **PROGRAMLAR** (Açılır menü DEĞİL, yan yana iki net blok)  
   * **Lise & YKS** (Mezun ve 9-12. Sınıf)  
   * **Ortaokul & LGS** (5-8. Sınıf)  
   * *Not: Menüde "İlkokul" ibaresi kesinlikle geçmeyecek, böylece negatif filtreleme yapılacak.*  
4. **KAMPÜS & İMKANLAR** (Görsel ağırlıklı galeri)  
   * Kütüphane / Sessiz Çalışma Alanları  
   * Birebir Etüt Odaları  
5. **BAŞARI HİKAYELERİ** (İsim/Puan/Üniversite formatında)  
6. **İLETİŞİM** (Harita ve Hızlı Form)

## **4\. FONKSİYONEL GEREKSİNİMLER**

### **4.1. Başarı Hikayeleri Modülü (Dinamik Kartlar)**

* **Görünüm:** Tinder kartları veya Instagram hikayeleri benzeri kaydırılabilir yapı.  
* **İçerik:** Öğrencinin kazandığı bölüm ve üniversite logosu ön planda, puanı vurgulu.  
* **Filtre:** "Tıp Fakülteleri", "Mühendislikler", "Fen Liseleri" gibi hızlı filtreleme butonları.

### **4.2. Hızlı İletişim (Modal Form & Sticky CTA)**

* **Modal Form Yapısı:** "Sizi Arayalım" veya "İletişim" butonlarına tıklandığında kullanıcı başka bir sayfaya yönlendirilmez. **Aynı sayfa üzerinde**, ekranın ortasında beliren minimal bir pencere (pop-up) açılır.  
  * **İçerik:** Sadece "Ad-Soyad" ve "Telefon Numarası" alanları bulunur.  
  * **Aksiyon:** "Gönder" butonuna basıldığında form kapanır ve "En kısa sürede size dönüş yapacağız" mesajı belirir.  
* **Mobil:** Ekranın altında sabit (sticky) bar. İkiye bölünmüş yapı:  
  * Sol: "WhatsApp'tan Yaz" (İkonlu)  
  * Sağ: "Hemen Ara" (Direkt arama tetikleyici)

### **4.3. "Merkez Kampüs" Vurgusu (Lokasyon Modülü)**

* Genel iletişim sayfalarında şube seçimi yaptırılmaz. Bunun yerine, "Şehrin Eğitim Üssü" sloganıyla Google Maps Embed (HTML Iframe) kullanılarak harita yerleştirilir. (API maliyetinden kaçınmak ve performans için).

### **4.4. Mobil Uyumluluk (Responsive)**

* Tasarım **"Mobile-First"** (Önce Mobil) yaklaşımıyla kodlanacaktır. Menü, klasik "hamburger menü" yerine, modern uygulamalarda kullanılan "Bottom Navigation" (Alt Navigasyon) mantığına yakın, kolay erişilebilir olmalıdır.

## **5\. ANASAYFA AKIŞ SENARYOSU (WIREFRAME MANTIĞI)**

Ziyaretçinin siteye girdiği andan itibaren aşağıya doğru (scroll) deneyimleyeceği görsel hikaye:

**BÖLÜM 1: Hero Section (Vurucu Giriş)**

* **Görsel:** Tam ekran, yüksek kaliteli video (sessiz). Öğrencilerin kütüphanede odaklanmış ders çalışma anları ve öğretmenle birebir soru çözümü.  
* **Manşet (H1):** "Geleceğiniz, Kalabalıklar Arasında Kaybolmasın."  
* **Alt Metin:** "Elazığ'ın en köklü kurumsal yapısı ve uzman kadrosuyla YKS ve LGS'de zirve odaklı başarı."  
* **Aksiyon:** $$  
  Programları İncele  
  ![][image1]  
  Tanışma Randevusu Al  
  $$ (Modal Formu Tetikler).

**BÖLÜM 2: Segmentasyon (Ayrım)**

* Ekran ikiye bölünür veya yan yana iki büyük kart görünür.  
* **Kart 1:** "Lise & YKS Hazırlık" (Arka plan: Dinamik, üniversite odaklı görsel).  
* **Kart 2:** "Ortaokul & LGS Hazırlık" (Arka plan: Daha renkli, lise hedefli görsel).  
* *Amaç:* Kullanıcıyı ilgisiz içerikten anında kurtarmak.

**BÖLÜM 3: Neden Biz? (Bento Grid Tasarımı)**

* Kare ve dikdörtgen kutulardan oluşan asimetrik ızgara yapısı.  
* **Kutu 1:** "Sınırsız Kütüphane" (Görsel ağırlıklı).  
* **Kutu 2:** "Koçluk Sistemi" (İkonografik).  
* **Kutu 3:** "Kurumsal Güç" (Kurumun dış cephe veya geniş sınıf görseli).

**BÖLÜM 4: Sosyal Kanıt (Sayılar Konuşur)**

* Metin yerine büyük tipografik rakamlar.  
* "%90 Yerleştirme Oranı", "12 Kişilik Sınıflar", "+500 Başarı Hikayesi".  
* Sayılar scroll edildikçe artarak (counter animation) gelir.

**BÖLÜM 5: Footer Öncesi (Call to Action)**

* Arka plan rengi değişir.  
* "Deneme dersine katılmak veya kütüphanemizi gezmek ister misiniz? Çayımız hazır." mesajı.  
* Büyük ve sade bir iletişim formu (Alternatif olarak Modal Form butonu).

## **6\. TEKNİK TESLİMAT FORMATLARI**

* **Tasarım Aracı:** Figma veya Adobe XD.  
* **Development:** React veya Next.js (SEO performansı ve hız için SSR \- Server Side Rendering).  
* **CMS:** Headless CMS (Strapi veya Contentful) \- Yönetimin içerikleri (başarılar, duyurular) kod bilmeden, mobilden bile güncelleyebilmesi için.

[image1]: <data:image/png;base64,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>