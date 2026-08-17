import { products } from './constants.js';
import { createNavbar } from './components/navbar.js';
import { createFooter } from './components/footer.js';
import { createProductCard } from './components/product_card.js';
localStorage.setItem('products', JSON.stringify(products));

const header_group_container = document.querySelector('.header-group');
const footer_element = document.querySelector('.footer-container')
const products_container_element = document.querySelector('.products-container')
const top_selling_element = document.querySelector('.top-selling')


header_group_container.appendChild(createNavbar())
footer_element.appendChild(createFooter())

products.forEach((item)=>{
    products_container_element.appendChild(createProductCard(item.id,item.poster_image))
    top_selling_element.appendChild(createProductCard(item.id,item.poster_image))
})
