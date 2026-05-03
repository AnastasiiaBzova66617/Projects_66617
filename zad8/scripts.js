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

// Zadanie 8: Backend
const firebaseURL = 'https://cv-backend-66617-default-rtdb.firebaseio.com/messages.json';

// Zadanie 5 - Form validation
const form = document.getElementById('myForm');

form.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Clear previous errors
    document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
    document.getElementById('formSuccess').textContent = '';

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

    // Validate message (required)
    const message = document.getElementById('message').value.trim();
    
    if (!message) {
        document.getElementById('messageError').textContent = 'Message cannot be empty';
        isValid = false;
    }

    // IF IT'S VALID - SHOW SUCCESS MESSAGE
    if (isValid) {
        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            message: message,
            timestamp: new Date().toISOString()
        };

       
    }
});


// Zadanie 6 - Dynamic loading from JSON
async function loadData() {
    try {
        const response = await fetch('./data.json'); // using fetch()
        if (!response.ok) {
            throw new Error('Error loading JSON');
        }
        const data = await response.json();

        // (Tech Skills)
        const skillsContainer = document.getElementById('tech-skills-list');
        skillsContainer.innerHTML = ''; // clear container
        data.techSkills.forEach(skill => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${skill}</strong>`;
            skillsContainer.appendChild(li);
        });

        // (Projects)
        const projectsContainer = document.getElementById('projects-list');
        projectsContainer.innerHTML = ''; // clear container
        data.projects.forEach(project => {
            const li = document.createElement('li');
            li.innerHTML = `
                <a href="${project.link}" target="_blank" rel="noopener noreferrer">
                    <strong>${project.name}</strong>
                </a>
                [ ${project.tech} ]
            `;
            projectsContainer.appendChild(li);
        });

        console.log("Data loaded successfully from JSON - (Projects and Tech Skills)");
    } catch (error) {
        console.error("Error:", error);
    }
}

// Launch data loading when the page is loaded
window.addEventListener('DOMContentLoaded', loadData);


// Task 7: Local Storage
const goalInput = document.getElementById('goalInput');
const addGoalBtn = document.getElementById('addGoalBtn');
const goalsList = document.getElementById('goalsList');

// Function to load data from LocalStorage
function displayGoals() {
    const savedGoals = JSON.parse(localStorage.getItem('userGoals')) || [];
    goalsList.innerHTML = ''; // Clear list 
    
    savedGoals.forEach((goal, index) => {
        const li = document.createElement('li');
        li.className = 'goal-item';
        li.innerHTML = `
            <span>${goal}</span>
            <button onclick="deleteGoal(${index})" class="delete-btn">Delete</button>
        `;
        goalsList.appendChild(li);
    });
}

// Function to add a new item
addGoalBtn.addEventListener('click', () => {
    const newGoal = goalInput.value.trim();
    if (newGoal) {
        const savedGoals = JSON.parse(localStorage.getItem('userGoals')) || [];
        savedGoals.push(newGoal);
        localStorage.setItem('userGoals', JSON.stringify(savedGoals)); // Save
        goalInput.value = ''; // Clear input
        displayGoals(); // Update view
    }
});

// Function to delete
window.deleteGoal = function(index) {
    const savedGoals = JSON.parse(localStorage.getItem('userGoals')) || [];
    savedGoals.splice(index, 1); // Remove item by index
    localStorage.setItem('userGoals', JSON.stringify(savedGoals));
    displayGoals();
};

// Load list on page start
document.addEventListener('DOMContentLoaded', displayGoals);