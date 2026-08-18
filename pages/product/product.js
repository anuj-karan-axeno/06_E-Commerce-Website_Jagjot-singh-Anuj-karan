import { createNavbar } from "../../components/navbar.js";
import { createFooter } from "../../components/footer.js";
import { products } from "../../constants.js";
import { createProductCard } from "../../components/product_card.js";
let selectedProduct = null;
let quantity = 1;

function getProduct() {
    const params = new URLSearchParams(window.location.search);
    const idFromUrl = Number(params.get('id'));

    const products = JSON.parse(localStorage.getItem('products') || '[]');

    return products.find((product) => {
        return Number(product.id) === idFromUrl;
    });
}

function getDiscountedPrice(product) {
    const originalPrice = Number(product.originalPrice);
    const discountPercent = Number(product.discount);

    return originalPrice - (originalPrice * discountPercent / 100);
}

function updateQuantityView() {
    const quantityBox = document.querySelector('.quantity-selector__value');
    quantityBox.textContent = quantity;
}

function increaseQuantity() {
    quantity = quantity + 1;
    updateQuantityView();
}

function decreaseQuantity() {
    if (quantity > 1) {
        quantity = quantity - 1;
        updateQuantityView();
    }
}
const header_element = document.querySelector('.header');
const footer_element = document.querySelector('.footer-container')
const might_like_container_element = document.querySelector('.might-like')

header_element.appendChild(createNavbar());
footer_element.appendChild(createFooter());

products.forEach((item) => {
    might_like_container_element.append(createProductCard(item.id, item.poster_image))
})

function showProduct(product) {
    if (!product) {
        const layout = document.querySelector('.product-detail__layout');
        const info = document.querySelector('.product-detail__info');
        const gallery = document.querySelector('.product-detail__gallery');

        if (layout) layout.innerHTML = '<p>Product not found.</p>';
        if (info) info.innerHTML = '';
        if (gallery) gallery.innerHTML = '';
        return;
    }

    selectedProduct = product;

    const currentPrice = getDiscountedPrice(product);

    document.querySelector('.product-detail__title').textContent = product.title.toUpperCase();
    document.querySelector('.product-detail__description').textContent = product.description;
    document.querySelector('.product-detail__price-current').textContent = '$' + currentPrice.toFixed(0);
    document.querySelector('.product-detail__price-original').textContent = '$' + Number(product.originalPrice).toFixed(0);
    document.querySelector('.product-detail__discount-badge').textContent = '-' + product.discount + '%';
    document.querySelector('.product-detail__rating-value').textContent = product.rating + '/5';

    const mainImage = document.querySelector('.product-detail__image');
    mainImage.src = product.poster_image;
    mainImage.alt = product.title;

    const thumbs = document.querySelector('.product-detail__thumbnails');
    thumbs.innerHTML = product.sub_images.map(function (image, index) {
        const activeClass = index === 0 ? 'product-detail__thumbnail--active' : '';
        return `
            <li>
                <button type="button" class="product-detail__thumbnail ${activeClass}">
                    <img src="${image}" alt="${product.title} ${index + 1}" class="product-detail__thumbnail-image"/>
                </button>
            </li>
        `;
    }).join('');

    const colors = document.querySelector('.product-detail__color-options');
    colors.innerHTML = product.colors.map(function (color, index) {
        const activeClass = index === 0 ? 'color-swatch--active' : '';
        return `
            <button
                type="button"
                class="color-swatch ${activeClass}"
                style="background-color:${color}"
                aria-label="${color}"
            ></button>
        `;
    }).join('');

    const sizes = document.querySelector('.product-detail__size-options');
    sizes.innerHTML = product.sizes.map(function (size, index) {
        const activeClass = index === 2 ? 'size-option--active' : '';
        return `
            <button type="button" class="size-option ${activeClass}">
                ${size}
            </button>
        `;
    }).join('');
}

function addToCart() {
    let cart = [];

    try {
        const savedCart = localStorage.getItem('cart');
        cart = savedCart ? JSON.parse(savedCart) : [];
        if (!Array.isArray(cart)) {
            cart = [];
        }
        alert("Item successfully added to cart :)")
    } catch (error) {
        cart = [];
    }

    const itemAlreadyInCart = cart.find(function (item) {
        return Number(item.id) === Number(selectedProduct.id);
    });

    if (itemAlreadyInCart) {
        itemAlreadyInCart.quantity = Number(itemAlreadyInCart.quantity) + quantity;
    } else {
        cart.push({
            id: selectedProduct.id,
            title: selectedProduct.title,
            price: getDiscountedPrice(selectedProduct),
            quantity: quantity,
            image: selectedProduct.poster_image
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Cart saved:', cart);
}

const product = getProduct();
console.log(product)
showProduct(product);
updateQuantityView();

document.querySelector('.quantity-selector__button--increase')
    .addEventListener('click', increaseQuantity);

document.querySelector('.quantity-selector__button--decrease')
    .addEventListener('click', decreaseQuantity);

document.querySelector('.product-detail__add-to-cart')
    .addEventListener('click', addToCart);