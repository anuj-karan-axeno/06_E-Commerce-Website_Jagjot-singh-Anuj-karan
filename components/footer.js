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
                    <li class="footer__social-item">
                         <a href="#" aria-label="Twitter" class="footer__social-link">
                            <img src="/assests/icons/twitter_icon.svg" alt="">
                        </a>
                    </li>
                    <li class="footer__social-item">
                         <a href="#" aria-label="Facebook" class="footer__social-link footer__social-link--filled">
                             <img src="/assests/icons/facebook_icon.svg" alt="">
                         </a>
                    </li>
                    <li class="footer__social-item">
                        <a href="#" aria-label="Instagram" class="footer__social-link">
                            <img src="/assests/icons/instagram_icon.svg" alt="">
                        </a>
                    </li>
                    <li class="footer__social-item">
                        <a href="#" aria-label="Github" class="footer__social-link">
                            <img src="/assests/icons/github_icon.svg" alt="">
                        </a>
                        </li>
                </ul>
            </div>

            <nav class="footer__column" aria-label="Company">
                <h3 class="footer__column-title">COMPANY</h3>
                <ul class="footer__links">
                    <li class="footer__links-item"><a href="#" class="footer__links-link">About</a></li>
                    <li class="footer__links-item"><a href="#" class="footer__links-link">Features</a></li>
                    <li class="footer__links-item"><a href="#" class="footer__links-link">Works</a></li>
                    <li class="footer__links-item"><a href="#" class="footer__links-link">Career</a></li>
                </ul>
            </nav>

            <nav class="footer__column" aria-label="Help">
                <h3 class="footer__column-title">HELP</h3>
                <ul class="footer__links">
                    <li class="footer__links-item"><a href="#" class="footer__links-link">Customer Support</a></li>
                    <li class="footer__links-item"><a href="#" class="footer__links-link">Delivery Details</a></li>
                    <li class="footer__links-item"><a href="#" class="footer__links-link">Terms &amp; Conditions</a></li>
                    <li class="footer__links-item"><a href="#" class="footer__links-link">Privacy Policy</a></li>
                </ul>
            </nav>

            <nav class="footer__column" aria-label="FAQ">
                <h3 class="footer__column-title">FAQ</h3>
                <ul class="footer__links">
                    <li class="footer__links-item"><a href="#" class="footer__links-link">Account</a></li>
                    <li class="footer__links-item"><a href="#" class="footer__links-link">Manage Deliveries</a></li>
                    <li class="footer__links-item"><a href="#" class="footer__links-link">Orders</a></li>
                    <li class="footer__links-item"><a href="#" class="footer__links-link">Payments</a></li>
                </ul>
            </nav>

            <nav class="footer__column" aria-label="Resources">
                <h3 class="footer__column-title">RESOURCES</h3>
                <ul class="footer__links">
                    <li class="footer__links-item"><a href="#" class="footer__links-link">Free eBooks</a></li>
                    <li class="footer__links-item"><a href="#" class="footer__links-link">Development Tutorial</a></li>
                    <li class="footer__links-item"><a href="#" class="footer__links-link">How to - Blog</a></li>
                    <li class="footer__links-item"><a href="#" class="footer__links-link">Youtube Playlist</a></li>
                </ul>
            </nav>
        </div>

        <div class="footer__bottom">
            <p class="footer__copyright">Shop.co © 2000-2023, All Rights Reserved</p>

            <ul class="footer__payments">
                <li class="footer__payments-item"><img src="/assests/icons/visa_logo.svg" alt="Visa"></li>
                <li class="footer__payments-item"><img src="/assests/icons/mastercard_logo.svg" alt="Mastercard"></li>
                <li class="footer__payments-item"><img src="/assests/icons/paypal_logo.svg" alt="PayPal"></li>
                <li class="footer__payments-item"><img src="/assests/icons/apple_pay_logo.svg" alt="Apple Pay"></li>
                <li class="footer__payments-item"><img src="/assests/icons/g_pay_logo.svg" alt="Google Pay"></li>
            </ul>
        </div>
    `
    return footer
}