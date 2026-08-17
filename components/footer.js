export function createFooter() {

    const footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.innerHTML = `
     <div class="newsletter">
            <h2 class="newsletter__heading">STAY UPTO DATE ABOUT<br>OUR LATEST OFFERS</h2>

            <form class="newsletter__form">
                <div class="newsletter__input-wrapper">
                    <img src="/assests/icons/mail_icon.svg" alt="" class="newsletter__input-icon">
                    <input type="email" placeholder="Enter your email address" class="newsletter__input">
                </div>
                <button type="submit" class="newsletter__button">Subscribe to Newsletter</button>
            </form>
        </div>

        <div class="footer__main">
            <div class="footer__brand">
                <p class="footer__logo">SHOP.CO</p>
                <p class="footer__description">We have clothes that suits your style and which you're proud to wear.
                    From women to men.</p>

                <ul class="footer__social">
                    <li><a href="#" aria-label="Twitter"><img src="/assests/icons/twitter_icon.svg" alt=""></a></li>
                    <li><a href="#" aria-label="Facebook" class="footer__social-link--filled"><img
                                src="/assests/icons/facebook_icon.svg" alt=""></a></li>
                    <li><a href="#" aria-label="Instagram"><img src="/assests/icons/instagram_icon.svg" alt=""></a></li>
                    <li><a href="#" aria-label="Github"><img src="/assests/icons/github_icon.svg" alt=""></a></li>
                </ul>
            </div>

            <nav class="footer__column" aria-label="Company">
                <h3 class="footer__column-title">COMPANY</h3>
                <ul class="footer__links">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">Career</a></li>
                </ul>
            </nav>

            <nav class="footer__column" aria-label="Help">
                <h3 class="footer__column-title">HELP</h3>
                <ul class="footer__links">
                    <li><a href="#">Customer Support</a></li>
                    <li><a href="#">Delivery Details</a></li>
                    <li><a href="#">Terms &amp; Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </nav>

            <nav class="footer__column" aria-label="FAQ">
                <h3 class="footer__column-title">FAQ</h3>
                <ul class="footer__links">
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Manage Deliveries</a></li>
                    <li><a href="#">Orders</a></li>
                    <li><a href="#">Payments</a></li>
                </ul>
            </nav>

            <nav class="footer__column" aria-label="Resources">
                <h3 class="footer__column-title">RESOURCES</h3>
                <ul class="footer__links">
                    <li><a href="#">Free eBooks</a></li>
                    <li><a href="#">Development Tutorial</a></li>
                    <li><a href="#">How to - Blog</a></li>
                    <li><a href="#">Youtube Playlist</a></li>
                </ul>
            </nav>
        </div>

        <div class="footer__bottom">
            <p class="footer__copyright">Shop.co © 2000-2023, All Rights Reserved</p>

            <ul class="footer__payments">
                <li><img src="/assests/icons/visa_logo.svg" alt="Visa"></li>
                <li><img src="/assests/icons/mastercard_logo.svg" alt="Mastercard"></li>
                <li><img src="/assests/icons/paypal_logo.svg" alt="PayPal"></li>
                <li><img src="/assests/icons/apple_pay_logo.svg" alt="Apple Pay"></li>
                <li><img src="/assests/icons/g_pay_logo.svg" alt="Google Pay"></li>
            </ul>
        </div>
    `
    return footer
}