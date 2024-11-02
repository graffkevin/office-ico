document.querySelector('.lang-toggle').addEventListener('click', function() {
    const isFrench = document.querySelector('.text-fr').style.display !== 'none';
    document.querySelectorAll('.text-fr').forEach(el => el.style.display = isFrench ? 'none' : 'block');
    document.querySelectorAll('.text-en').forEach(el => el.style.display = isFrench ? 'block' : 'none');
});
