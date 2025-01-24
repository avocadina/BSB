const windowWidth = window.innerWidth
const isSmall = windowWidth <= 1150
console.log(isSmall)

// PARTNERSHIP SLIDER
const commonSlidesPartnership = document.querySelectorAll('.p-slider__item');

const nextButton = document.getElementById('p-next');
const prevButton = document.getElementById('p-prev');

let indexP = 0;
const countOfSlides = commonSlidesPartnership.length;

function updatePartnershipSlider() {
    commonSlidesPartnership.forEach((slide) => {
        let translateValue = `calc((-100% - var(--slider-gap) ${isSmall ? '- var(--padding-4)' : ''}) * ${indexP})`;
        slide.style.transform = `translate(${translateValue}, 0)`;
    });
}

prevButton?.addEventListener('click', () => {
    if (indexP > 0) {
        indexP -= 1;
        updatePartnershipSlider();
    }
})
nextButton?.addEventListener('click', () => {
    if (indexP < (countOfSlides - 6)) {
        indexP += 1;
        updatePartnershipSlider();
    }
});

// NEWS SLIDER
const commonSlidesNews = document.querySelectorAll('.n-slider__item');

const nextButtonNews = document.getElementById('n-next');
const prevButtonNews = document.getElementById('n-prev');

let index = 0;
const countOfNews = commonSlidesNews.length;

function updateSlider() {
    commonSlidesNews.forEach((slide) => {
        let translateValue = `calc((-100% - var(--space-6) ${isSmall ? '- var(--padding-5)' : ''}) * ${index})`;
        slide.style.transform = `translate(${translateValue}, 0)`;
    });
}

prevButtonNews.addEventListener('click', () => {
    if (index > 0) {
        index -= 1;
        updateSlider();
    }
});
nextButtonNews.addEventListener('click', () => {
    if (index < countOfNews - 3) {
        index += 1;
        updateSlider();
    };
});

// SHAKING SLIDES
function shakingSlides(slides) {
    slides.forEach(slide => {
        if ( !slide.classList.contains('shake') && !slide.classList.contains('normal') ) {
            slide.classList.add('shake')
        };
        setTimeout(() => {
            slide.classList.remove('shake')
        }, 2000);
    });
};