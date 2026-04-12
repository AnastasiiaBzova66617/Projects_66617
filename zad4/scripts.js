// Toggle between themes
const themeStyle = document.getElementById('theme-style');
const themeBtn = document.getElementById('theme-toggle');

themeBtn.addEventListener('click', () => {
    if (themeStyle.getAttribute('href') === './red.css') {
        themeStyle.setAttribute('href', './green.css');
        themeStyle.classList.remove('red-theme');   
        themeStyle.classList.add('green-theme');
    } else {
        themeStyle.setAttribute('href', './red.css');
        themeStyle.classList.remove('green-theme');
        themeStyle.classList.add('red-theme');
    }
});
