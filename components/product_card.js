export function createProductCard(id, imgURL) {
    const card = document.createElement('li')
    card.innerHTML = `
       <a href="./pages/product/product.html?id=${id}">
                     <article class="product-card">
                         <img src=${imgURL} alt="T-SHIRT WITH TAPE DETAILS"
                             class="product-card__image">
                         <div class="product-card__content">
                             <h3 class="product-card__title">T-SHIRT WITH TAPE DETAILS</h3>
                             <p class="product-card__rating">4.5/5</p>
                             <p class="product-card__price">$120</p>
                         </div>
                     </article>
                 </a>
    `

    return card

}