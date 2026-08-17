document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.auth-form');

    if (loginForm) {
        let errorMsg = document.querySelector('.auth-form__error');
        if (!errorMsg) {
            errorMsg = document.createElement('p');
            errorMsg.className = 'auth-form__error';

            const submitBtn = document.querySelector('.auth-form__submit');
            loginForm.insertBefore(errorMsg, submitBtn);
        }

        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const emailInput = document.getElementById('email').value.trim();
            const passwordInput = document.getElementById('password').value.trim();

            if (emailInput === 'admin@example.com' && passwordInput === 'Admin@123') {
                localStorage.setItem('authState', 'logged_in');
                errorMsg.classList.remove('auth-form__error--visible');
                window.location.href = '/index.html';
            } else {
                errorMsg.textContent = 'Invalid email or password. Please try again.';
                errorMsg.classList.add('auth-form__error--visible');
            }
        });
    }
});