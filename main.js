const toggleButton = document.getElementById('toggleLangButton');

let isEnglishVisible = true;

function toggleLanguage() {
    const englishElements = document.querySelectorAll('[class$="-en"]');
    const frenchElements = document.querySelectorAll('[class$="-fr"]');

    if (isEnglishVisible) {
        englishElements.forEach(el => el.style.display = 'none');
        frenchElements.forEach(el => el.style.display = 'flex');
    } else {
        englishElements.forEach(el => el.style.display = 'flex');
        frenchElements.forEach(el => el.style.display = 'none');
    }

    isEnglishVisible = !isEnglishVisible;
}

toggleButton.addEventListener('click', toggleLanguage);
