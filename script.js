// slider-script.js

document.querySelectorAll('.slider').forEach((sliderContainer, sliderIndex) => {
    const slides = sliderContainer.querySelector('.slides');
    const slide = sliderContainer.querySelectorAll('.slide');
    const prev = sliderContainer.querySelector('#prev');
    const next = sliderContainer.querySelector('#next');
    const dots = sliderContainer.querySelectorAll('.dot');
    let currentIndex = 0;

    function updateSlider() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slide.length;
        updateSlider();
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slide.length) % slide.length;
        updateSlider();
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }

    next.addEventListener('click', showNextSlide);
    prev.addEventListener('click', showPrevSlide);

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            goToSlide(parseInt(e.target.dataset.slide));
        });
    });

    updateSlider();
});