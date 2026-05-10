const headerHTML = `
    <!-- ================================================
       HEADER
  ================================================ -->
    <header class="header" id="header">
        <div class="container">
            <div class="header-ici">
                <a href="/" class="logo">
                    <img src="assets/sigma_logo.png?v=1.1" alt="6 Sigma Eğitim Kurumları Logo">
                </a>
                <nav class="nav">
                    <a href="/">Anasayfa</a>
                    <div class="dropdown">
                        <span class="dropdown-toggle">Kurumsal</span>
                        <div class="dropdown-menu">
                            <a href="6-sigma-lise.html" class="dropdown-vurgulu">6 Sigma Lise</a>
                            <a href="6-sigma-ortaokul.html" class="dropdown-vurgulu">6 Sigma Ortaokul</a>
                        </div>
                    </div>
                    <a href="kutuphane">Kütüphane</a>
                    <a href="basarılar">Başarılar</a>
                </nav>
                <button class="hamburger" id="hamburger" aria-label="Menü">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>

    <!-- Mobil Menü -->
    <div class="mobil-menu" id="mobilMenu">
        <a href="/" onclick="menuKapat()">Anasayfa</a>
        <div class="mobil-dropdown">
            <span class="mobil-dropdown-toggle">Kurumsal</span>
            <div class="mobil-dropdown-menu">
                <a href="6-sigma-lise.html" class="dropdown-vurgulu" onclick="menuKapat()">6 Sigma Lise</a>
                <a href="6-sigma-ortaokul.html" class="dropdown-vurgulu" onclick="menuKapat()">6 Sigma Ortaokul</a>
            </div>
        </div>
        <a href="kutuphane" onclick="menuKapat()">Kütüphane</a>
        <a href="basarılar" onclick="menuKapat()">Başarılar</a>
    </div>
`;

// Inject header synchronously
document.getElementById('header-container').innerHTML = headerHTML;
