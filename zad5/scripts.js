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

    // Validate first name (required, no digits)
    const firstName = document.getElementById('firstName').value.trim();
    const nameRegex = /^[A-Za-zА-Яа-яЁёІіЇїЄє\s]+$/;    

    if (!firstName) {
        document.getElementById('firstNameError').textContent = 'First name is required';
        isValid = false;
    } else if (!nameRegex.test(firstName)) {
        document.getElementById('firstNameError').textContent = 'First name cannot contain numbers';
        isValid = false;
    }

    // Validate last name (required, no digits)
    const lastName = document.getElementById('lastName').value.trim();

    if (!lastName) {
        document.getElementById('lastNameError').textContent = 'Last name is required';
        isValid = false;
    } else if (!nameRegex.test(lastName)) {
        document.getElementById('lastNameError').textContent = 'Last name cannot contain numbers';
        isValid = false;
    }

    // Validate email (required, valid format)
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email address';
        isValid = false;
    }
});