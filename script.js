

const form = document.getElementById('form');
const passwordEl1 = document.getElementById('password1');
const passwordEl2 = document.getElementById('password2');
const messageContainer = document.getElementById('message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // Using Contraint API
    isValid = form.checkValidity()
    // Style main message for an error
    if (!isValid) {
        message.textContent = 'Please fill out all fields.'
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    // Check to see if password match
    if (passwordEl1.value === passwordEl2.value) {
        passwordsMatch = true;
        passwordEl1.style.borderColor = 'green';
        passwordEl2.style.borderColor = 'green';
    } else {
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match!'
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        passwordEl1.style.borderColor = 'red';
        passwordEl2.style.borderColor = 'red';
        return;
    }
    // If form is valid and password match
    if (isValid && passwordsMatch) {
        message.textContent = ' Successfully Registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };
    //  console.log(user);
}

function processFormDate(e) {
    e.preventDefault();
    // Validate Form
    validateForm();
    // Submit data if Valid
    if (isValid && passwordsMatch) {
        storeFormData();
    }
}

// Event LIstener
form.addEventListener('submit', processFormDate)