let stickyNav = () => {
    document.querySelector(".nav_bar").style['transition'] = 'opacity 1s';
    document.querySelector(".nav_bar").style['opacity'] = '.75';
}

document.querySelector('.product-nav').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector(".products-page").style['display'] = 'block';
    document.querySelector(".home-page").style['display'] = 'none';
    document.querySelector(".contact-page").style['display'] = 'none';
})

document.querySelector('.home').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector(".home-page").style['display'] = 'block';
    document.querySelector(".products-page").style['display'] = 'none';
    document.querySelector(".contact-page").style['display'] = 'none';
})

document.querySelector('.contact').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector(".home-page").style['display'] = 'none';
    document.querySelector(".products-page").style['display'] = 'none';
    document.querySelector(".contact-page").style['display'] = 'block';
})