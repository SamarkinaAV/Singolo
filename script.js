window.onload = function () {
    addNavClickHandler();
    addBorderInPortfolioImg();
    addTagsClickHandler();
    switchDisplayVertical();
    switchDisplayHorizontal();
    initSlider();
};

const PORTFOLIO = document.querySelector('.portfolio__block');
const MENU = document.querySelector('.navigation');
const TAGS = document.querySelector('.portfolio__tags');


// selected item menu in navigation
const addNavClickHandler = () => {
    MENU.addEventListener('click', (event) => {
        MENU.querySelectorAll('a').forEach(el => el.classList.remove('navigation__link-active'));
        event.target.classList.add('navigation__link-active');
    });
};

// add border around img in portfolio-block
const addBorderInPortfolioImg = () => {
    PORTFOLIO.addEventListener('click', (event) => {
        if (event.target.classList.contains('portfolio__image')) {
            PORTFOLIO.querySelectorAll('.portfolio__image').forEach(el => el.classList.remove('portfolio__image-active'));
            event.target.classList.add('portfolio__image-active');
        };
    });
};

// selected tag in portfolio-block
const addTagsClickHandler = () => {
    TAGS.addEventListener('click', (event) => {
        if (event.target.classList.contains('tag')) {
            TAGS.querySelectorAll('.tag').forEach(el => el.classList.remove('tag-active'));
            event.target.classList.add('tag-active');
            // shift img clicked tag
            let portfolioList = PORTFOLIO.querySelectorAll('.portfolio__image');
            PORTFOLIO.prepend(portfolioList[portfolioList.length - 1]);
        };
    });
};

// switch display phone
const switchDisplayVertical = () => {
    document.getElementById('phone_vert').addEventListener('click', event => {
        let display = document.getElementById('phone_vert').querySelector('div');
        display.classList.toggle('display-off')
        event.preventDefault()
    });
};

const switchDisplayHorizontal = () => {
    document.getElementById('phone_hor').addEventListener('click', event => {
        let display = document.getElementById('phone_hor').querySelector('div');
        display.classList.toggle('display-off')
        event.preventDefault()
    });
};