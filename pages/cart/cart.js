import { createNavbar } from "../../components/navbar.js";
import { createFooter } from "../../components/footer.js";

const header_element = document.querySelector('.header');
const footer_container_element = document.querySelector('.footer-container')

header_element.appendChild(createNavbar());
footer_container_element.appendChild(createFooter());

const cartContainer = document.querySelector('.cart__items');
const subtotalEl = document.querySelector('.order-summary__subtotal');
const discountRowEl = document.querySelector('.order-summary__discount-row');
const discountPercentEl = document.querySelector('.order-summary__discount-percent');
const discountAmountEl = document.querySelector('.order-summary__discount-amount');
const deliveryEl = document.querySelector('.order-summary__delivery');
const totalEl = document.querySelector('.order-summary__total');
const promoInput = document.querySelector('.order-summary__promo-input');
const promoButton = document.querySelector('.order-summary__promo-button');
const promoError = document.querySelector('.order-summary__promo-error');
const checkoutButton = document.querySelector('.order-summary__checkout');
const checkoutModal = document.getElementById('checkoutModal');
const modalCloseButton = document.querySelector('.modal__close');


const DELIVERY_FEE = 15;
let total;
const COUPONS = {
    SAVE10: 0.10,
    SAVE20: 0.20
};

let appliedDiscountRate = 0; 

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function renderCart() {
    const cart = getCart();
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = `<li class="cart__empty">Your cart is empty</li>`;
        updateSummary(cart);
        return;
    }

    cart.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('cart-item');
        li.dataset.id = item.id;

        li.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="cart-item__image">

            <div class="cart-item__content">
                <div class="cart-item__top">
                    <div class="cart-item__info">
                        <p class="cart-item__name">${item.title}</p>
                        ${item.size ? `<p class="cart-item__meta">Size: <span>${item.size}</span></p>` : ''}
                        ${item.color ? `<p class="cart-item__meta">Color: <span>${item.color}</span></p>` : ''}
                    </div>

                    <button type="button" class="cart-item__remove" aria-label="Remove item">
                        <img src="../../assests/icons/trash_icon.svg" alt="">
                    </button>
                </div>

                <div class="cart-item__bottom">
                    <p class="cart-item__price">$${item.price}</p>

                    <div class="quantity-selector">
                        <button type="button" class="quantity-selector__button quantity-selector__button--decrease" aria-label="Decrease quantity">−</button>
                        <span class="quantity-selector__value">${item.quantity}</span>
                        <button type="button" class="quantity-selector__button quantity-selector__button--increase" aria-label="Increase quantity">+</button>
                    </div>
                </div>
            </div>
        `;

        cartContainer.appendChild(li);
    });

    updateSummary(cart);
}

function updateSummary(cart) {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discountAmount = subtotal * appliedDiscountRate;
    const delivery = cart.length > 0 ? DELIVERY_FEE : 0;
     total = subtotal - discountAmount + delivery;

    subtotalEl.textContent = `$${subtotal.toFixed(0)}`;
    deliveryEl.textContent = `$${delivery}`;
    totalEl.textContent = `$${total.toFixed(0)}`;

    
    if (appliedDiscountRate > 0) {
        discountRowEl.hidden = false;
        discountPercentEl.textContent = `${appliedDiscountRate * 100}`;
        discountAmountEl.textContent = `-$${discountAmount.toFixed(0)}`;
    } else {
        discountRowEl.hidden = true;
    }
}


cartContainer.addEventListener('click', (event) => {
    const li = event.target.closest('.cart-item');
    if (!li) return;

    const id = Number(li.dataset.id);
    const cart = getCart();
    const item = cart.find(p => p.id === id);
    if (!item) return;

    if (event.target.closest('.cart-item__remove')) {
        saveCart(cart.filter(p => p.id !== id));
        renderCart();
        return;
    }

    if (event.target.closest('.quantity-selector__button--increase')) {
        item.quantity += 1;
        saveCart(cart);
        renderCart();
        return;
    }

    if (event.target.closest('.quantity-selector__button--decrease')) {
        if (item.quantity > 1) {
            item.quantity -= 1;
            saveCart(cart);
        } else {
            saveCart(cart.filter(p => p.id !== id));
        }
        renderCart();
        return;
    }
});

promoButton.addEventListener('click', () => {
    if(total==0){
        return
    }
    const code = promoInput.value.trim().toUpperCase();

    if (COUPONS[code]) {
        appliedDiscountRate = COUPONS[code];
        promoError.textContent = '';
        promoInput.value = '';
    } else {
        appliedDiscountRate = 0;
        promoError.textContent = 'Invalid promo code';
    }

    updateSummary(getCart());
});

renderCart();

checkoutButton.addEventListener('click', () => {
    const cart = getCart();

    if (cart.length === 0) {
        return; 
    }

   
    localStorage.removeItem('cart');
    appliedDiscountRate = 0;
    renderCart();

    checkoutModal.hidden = false;
});

modalCloseButton.addEventListener('click', () => {
    checkoutModal.hidden = true;
});