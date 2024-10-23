    const langSelector1 = document.getElementById('langSelector1');
    const langSelector2 = document.getElementById('langSelector2');

    function changeLanguage(selectedLang) {
        langSelector1.value = selectedLang;
        langSelector2.value = selectedLang;

        if (selectedLang === 'ua') {
            window.location.href = 'index.html';
        } else if (selectedLang === 'en') {
            window.location.href = 'index-en.html';
        }
    }

    langSelector1.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        changeLanguage(selectedLang);
    });

    langSelector2.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        changeLanguage(selectedLang);
    });