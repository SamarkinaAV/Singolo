window.onload = function () {
    addNavClickHandler();
    addBorderInPortfolioImg();
    addTagsClickHandler();
    switchDisplayVertical();
    switchDisplayHorizontal();
    initSlider();
    popupMessage();
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

// add slider active
const initSlider = () => {
    let slides = document.querySelectorAll('.slide-single');
    let slider = [];
    for (let i = 0; i < slides.length; i++) {
        slider[i] = slides[i].src;
        slides[i].remove();
    };
    let step = 0;
    let offset = 0;

    function draw() {
        let img = document.createElement('img');
        img.src = slider[step];
        img.classList.add('slide-single');
        document.querySelector('.slider').appendChild(img);
        if (step + 1 == slider.length) {
            step = 0;
        } else {
            step++;
        }
        offset = 1;
    };

    function slideLeft() {
        let slides2 = document.querySelectorAll('.slide-single');
        let offset2 = 0;
        for (let i = 0; i < slides2.length; i++) {
            slides2[i].style.left = offset2 * 150 - 150 + 'px';
            offset2++;
        }
        setTimeout(function () {
            slides2[0].remove();
            draw();
        }, 500);
    }

    function slideRight() {
        let slides2 = document.querySelectorAll('.slide-single');
        let offset2 = 0;
        for (let i = 0; i < slides2.length; i++) {
            slides2[i].style.left = offset2 * -150 + 150 + 'px';
            offset2++;
        }
        setTimeout(function () {
            slides2[0].remove();
            draw();
        }, 500);
    }

    draw();
    document.getElementById('arrow_left').addEventListener('click', slideLeft);
    document.getElementById('arrow_right').addEventListener('click', slideRight);
};

// add pop-up message
const popupMessage = () => {
    let form = document.getElementById('contacts-form');
    let form_description = document.querySelector('.contact-form__input_description');
    let form_subject = document.querySelector('.contact-form__input_subject');

    form.addEventListener('submit', event => {
        event.preventDefault();
        if (form.checkValidity()) {
            if ((form_subject.value)) {
                document.querySelector('.popup__topic').innerHTML = '<b>Тема:</b> ' + form_subject.value
            } else {
                document.querySelector('.popup__topic').innerHTML = 'Без темы';
            };

            let description = '';
            if (form_description.value) {
                description = '<b>Описание:</b> ';
                if (form_description.value.length > 250) {
                    description += form_description.value.substring(0, 250) + '...';
                } else {
                    description += form_description.value;
                };
            } else {
                description = 'Без описания';
            };

            document.querySelector('.popup__description').innerHTML = description;
            document.querySelector('.message-block').classList.remove('hidden');
        }
        form.reset();
        return false;
    });
    const MESSAGE_BLOCK = document.querySelector('.message-block');
    const BUTTON_CLOSE = document.getElementById('close-button');

    function popup_close(event) {
        if (event.target === MESSAGE_BLOCK || event.target === BUTTON_CLOSE) {
            MESSAGE_BLOCK.classList.add('hidden');
        }
    }
    MESSAGE_BLOCK.addEventListener('click', popup_close);
    BUTTON_CLOSE.addEventListener('click', popup_close);
};