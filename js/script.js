// partnership slider
const container = document.querySelector('.partnership__slider');
const commonSlide = document.querySelectorAll('.p-slider__item');

const nextButton = document.getElementById('p-next');
const prevButton = document.getElementById('p-prev');

let index = 0;
const countOfSlides = commonSlide.length

function updateSlider() {
    commonSlide.forEach((slide) => {
        const translateValue = `calc((-100% - var(--slider-gap)) * ${index})`;
        slide.style.transform = `translate(${translateValue}, 0)`;
        slide.style.transition = 'var(--transition)';
    });
}

prevButton.addEventListener('click', () => {
    if (index > 0) index -= 1;
    updateSlider();
})
nextButton.addEventListener('click', () => {
    if (index <= 5) index += 1;
    updateSlider();
});