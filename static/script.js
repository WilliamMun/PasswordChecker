// Grab the elements from the HTML
const passwordInput = document.getElementById('passwordInput');
const strengthBar = document.getElementById('strengthBar');
const feedbackText = document.getElementById('feedbackText');

// Listen for typing in the password box
passwordInput.addEventListener('input', function() {
    const password = passwordInput.value;
    let score = 0;
    let feedback = [];

    // 1. Check Length
    if (password.length > 8) {
        score += 1;
    } else {
        feedback.push("Make it longer than 8 characters.");
    }

    // 2. Check for Lowercase & Uppercase
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
        score += 1;
    } else {
        feedback.push("Use both upper and lowercase letters.");
    }

    // 3. Check for Numbers
    if (password.match(/\d/)) {
        score += 1;
    } else {
        feedback.push("Add a number.");
    }

    // 4. Check for Special Characters
    if (password.match(/[^a-zA-Z\d]/)) {
        score += 1;
    } else {
        feedback.push("Add a special symbol (like @, #, or !).");
    }

    // Update the UI based on the score
    updateUI(score, feedback, password.length);
});

function updateUI(score, feedback, length) {
    // If the input is empty, reset everything
    if (length === 0) {
        strengthBar.style.width = '0%';
        feedbackText.innerText = "Enter a password to see its strength.";
        return;
    }

    // Change bar width and color based on the score (0 to 4)
    if (score === 1 || score === 0) {
        strengthBar.style.width = '25%';
        strengthBar.style.backgroundColor = 'red';
        feedbackText.innerText = "Weak: " + feedback[0];
    } else if (score === 2) {
        strengthBar.style.width = '50%';
        strengthBar.style.backgroundColor = 'orange';
        feedbackText.innerText = "Fair: " + feedback[0];
    } else if (score === 3) {
        strengthBar.style.width = '75%';
        strengthBar.style.backgroundColor = 'yellow';
        feedbackText.innerText = "Good: Almost there!";
    } else if (score === 4) {
        strengthBar.style.width = '100%';
        strengthBar.style.backgroundColor = 'green';
        feedbackText.innerText = "Strong: Great password!";
    }
}