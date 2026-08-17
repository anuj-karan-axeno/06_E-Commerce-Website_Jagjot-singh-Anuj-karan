document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.toLowerCase();
    const isProtectedPage = currentPath.includes('product.html') || currentPath.includes('cart.html');
    const isLoggedIn = localStorage.getItem('authState') === 'logged_in';

    if (isProtectedPage && !isLoggedIn) {
        window.location.href = '/pages/login/login.html';
        return;
    }

    const profileLink = document.querySelector('a.header__action-btn[href="login.html"], .header__action-btn[aria-label="Profile"]');
    if (profileLink && isLoggedIn) {
        profileLink.title = 'Logout';
        profileLink.setAttribute('aria-label', 'Logout');

        profileLink.addEventListener('click', (e) => {
            e.preventDefault();

            localStorage.removeItem('authState');
            window.location.href = '/pages/login/login.html';
        });
    }
});