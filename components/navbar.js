export function createNavbar() {
    const navbar = document.createElement("nav");
    navbar.classList.add("navbar");
    navbar.innerHTML = `
    <div class="navbar__offer">
    <div></div> 
    <p>Sign up and get 20% off to your first order. <span>Sign Up Now</span></p>
    <img src="/assests/icons/cancel_icon.svg" alt="menu" class="cancel">
    
    </div>
    <div class="navbar__container">
    <div class="navbar__group">
                <img src="/assests/icons/hamburger_icon.svg" alt="menu" class="navbar__menu">
                <a href="/index.html">
                <img src="/assests/icons/brand_logo.svg" alt="SHOP.CO" class="navbar__brand-logo">
                </a>
                </div>
                <ul class="navbar__links">
                <li>
                <a href="#">
                        Shop <img src="/assests/icons/chevron_down_icon.svg" alt="">
                        </a>
                </li>
                <li>
                <a href="#">
                        On Sale
                    </a>
                    </li>
                <li>
                    <a href="#">
                        New Arrivals
                        </a>
                </li>
                <li>
                    <a href="#">
                        Brands
                    </a>
                </li>
            </ul>
            <div class="navbar__search">
                <img src="/assests/icons/search_icon.svg" alt="search">
                <input type="text" placeholder="Search for products...">
                </div>
                <div class="navbar__group">
                <a href="#">
                
                <img src="/assests/icons/black_search_icon.svg" alt="menu" class="navbar__cart-profile__search">
                </a>
                <a href="/pages/cart/cart.html">

                    <img src="/assests/icons/cart_icon.svg" alt="cart">
                </a>
                <a href="/pages/login/login.html" class="navbar__profile-link">
                
                <img src="/assests/icons/profile_icon.svg" alt="profile">
                </a>
    </div>
    </div>
                `

    const profileLink = navbar.querySelector('.navbar__profile-link');
    const isLoggedIn = localStorage.getItem('authState') === 'logged_in';

    if (isLoggedIn) {
        profileLink.setAttribute('aria-label', 'Logout');
        profileLink.title = 'Logout';

        profileLink.addEventListener('click', (event) => {
            event.preventDefault();
            localStorage.removeItem('authState');
            window.location.href = '/pages/login/login.html';
        });
    }

    return navbar;
}