// Cache DOM
const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const errorMessage = document.querySelector('.error-message');

// Event Listener for Form Submit
form.addEventListener('submit', validateForm);

// Check Inputs
function validateForm(e) {

    const inputs = document.querySelectorAll('.form-control');
    inputs.forEach(function(input) {
        checkForBlanks(input);
    });

    validateEmail(email);

    e.preventDefault();
}

// Check for Blanks
function checkForBlanks(input) {
        if(input.value.trim() === '') {
            showError(input, `This field cannot be empty`);
        } else {
            input.nextElementSibling.style.display = 'none';
            // input.nextElementSibling.nextElementSibling.style.display = 'none';
        } 
}

// Validate Email
function validateEmail(email) {
    const emailInput = email.value.trim();
    const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(!re.test(emailInput)) {
        showError(email, 'Looks like this is not an email');
    } else {
        email.nextElementSibling.nextElementSibling.style.display = 'none';
    }
}

// Show Error
function showError(input, message) {

    // Show error icon and error message
    input.nextElementSibling.style.display = 'block';
    
    // Add error text and display message
    input.nextElementSibling.nextElementSibling.innerText = message;
    input.nextElementSibling.nextElementSibling.style.display = 'block';
}