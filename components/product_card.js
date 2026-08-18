export function createProductCard(id, imgURL, rating,name) {

    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            starsHtml += '<span class="product-card__star product-card__star--filled">★</span>';
        } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            starsHtml += `<span class="product-card__star product-card__star--filled">⯪
                          </span>`;
        } else {
            starsHtml += '<span class="product-card__star product-card__star--empty">★</span>';
        }
    }

    const card = document.createElement('li')
    card.classList.add('product-card__item');
    card.innerHTML = `
       <a href="./pages/product/product.html?id=${id}" class="product-card__link">
                     <article class="product-card">
                         <img src=${imgURL} alt="${name}"
                             class="product-card__image">
                         <div class="product-card__content">
                             <h3 class="product-card__title">${name}</h3>
                             <p class="product-card__rating">
                            ${starsHtml}
                             ${rating}/5</p>
                             <p class="product-card__price">$120</p>
                         </div>
                     </article>
                 </a>
    `

    return card

}