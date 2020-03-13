// selected item menu in navigation
document.querySelector('.navigation').addEventListener('click', (event) => {
    document.querySelector('.navigation').querySelectorAll('a').forEach(el => el.classList.remove('navigation__link-active'));
    event.target.classList.add('navigation__link-active');
});

// add border around img in portfolio-block
document.querySelector('.portfolio__block').addEventListener('click', (event) => {
    if (event.target.classList.contains('portfolio__image')) {
        document.querySelector('.portfolio__block').querySelectorAll('.portfolio__image').forEach(el => el.classList.remove('portfolio__image-active'));
        event.target.classList.add('portfolio__image-active');
    };
});


