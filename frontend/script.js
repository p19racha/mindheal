function openChat() {
    window.location.href = 'login.html';
}

function togglePassword(button) {
    const input = button.previousElementSibling;
    const icon = button.querySelector('.material-icons');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.textContent = 'visibility';
    } else {
        input.type = 'password';
        icon.textContent = 'visibility_off';
    }
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;
    // Add login logic here
    console.log('Login attempt:', { email, password });
}

function handleSignup(event) {
    event.preventDefault();
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;
    const confirmPassword = document.querySelectorAll('input[type="password"]')[1].value;
    // Add signup logic here
    console.log('Signup attempt:', { name, email, password, confirmPassword });
}

function handleForgotPassword(event) {
    event.preventDefault();
    const email = document.querySelector('input[type="email"]').value;
    // Add password reset logic here
    console.log('Password reset requested for:', email);
}

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Toggle password visibility
    const toggleButtons = document.querySelectorAll('.toggle-password');
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => togglePassword(button));
    });

    // Handle form submissions
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Handle forgot password form
    const forgotPasswordForm = document.querySelector('.login-form');
    if (forgotPasswordForm && window.location.pathname.includes('forgot-password')) {
        forgotPasswordForm.addEventListener('submit', handleForgotPassword);
    }
});
