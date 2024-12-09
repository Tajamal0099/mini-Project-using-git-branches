// Get references to the signup and login pages
let signupPage = document.getElementById('signup-page');
let loginPage = document.getElementById('login-page');

// Function to show the Signup page
function showSignupPage() {
    // Remove the 'hidden' class from the signupPage to make it visible
    signupPage.classList.remove('hidden');
    
    // Add the 'hidden' class to the loginPage to hide it
    loginPage.classList.add('hidden');
}

// Function to show the Login page
function showLoginPage() {
    // Remove the 'hidden' class from the loginPage to make it visible
    loginPage.classList.remove('hidden');
    
    // Add the 'hidden' class to the signupPage to hide it
    signupPage.classList.add('hidden');
}

// Signup form submission
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let email = document.getElementById('signupEmail').value;
    let password = document.getElementById('signupPassword').value;

    // Store user data in localStorage
    let user = { email: email, password: password };
    localStorage.setItem(email, JSON.stringify(user));

    alert('Account created successfully!');
    loginPage.classList.remove('hidden');
    
    // Add the 'hidden' class to the loginPage to hide it
    signupPage.classList.add('hidden'); 
});

// Login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Retrieve the user data from localStorage
    let storedUser = localStorage.getItem(email);

    if (storedUser) {
        let user = JSON.parse(storedUser);
        if (user.password === password) {
            alert('Welcome ' + user.email);
            window.location.href = 'dashboard.html'; // Redirect to dashboard after successful login
        } else {
            alert('Invalid email or password');
        }
    } else {
        alert('User not found');
    }
});
