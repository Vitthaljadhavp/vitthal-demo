document.addEventListener('DOMContentLoaded', function() {
    const toggleLoginBtn = document.getElementById('toggle-login');
    const toggleRegisterBtn = document.getElementById('toggle-register');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    toggleLoginBtn.addEventListener('click', function() {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        toggleLoginBtn.classList.add('active');
        toggleRegisterBtn.classList.remove('active');
    });

    toggleRegisterBtn.addEventListener('click', function() {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        toggleLoginBtn.classList.remove('active');
        toggleRegisterBtn.classList.add('active');
    });

    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Firebase login logic here
        });
    }

    // Handle registration form submission
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Firebase registration logic here
        });
    }
});
