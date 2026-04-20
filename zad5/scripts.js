// Zadanie 4 - Theme and section toggle
// Toggle between themes
const themeStyle = document.getElementById('theme-style');
const themeBtn = document.getElementById('theme-toggle');

themeBtn.addEventListener('click', () => {
    if (themeStyle.getAttribute('href') === './red.css') {
        themeStyle.setAttribute('href', './green.css');
        themeBtn.textContent = 'Green Theme';
    } else {
        themeStyle.setAttribute('href', './red.css');
        themeBtn.textContent = 'Red Theme';
    }
});

// Toggle visibility of the section
const projectsSection = document.getElementById('projects');
const sectionBtn = document.getElementById('section-toggle');

sectionBtn.addEventListener('click', () => {
    if (projectsSection.style.display === 'none') {
        projectsSection.style.display = 'block';
        sectionBtn.textContent = 'Hide "Projects"';
    } else {
        projectsSection.style.display = 'none';
        sectionBtn.textContent = 'Show "Projects"';
    }
});


// Zadanie 5 - Form validation
const form = document.getElementById('myForm');

form.addEventListener('submit', function(e) {

    let isValid = true;
});