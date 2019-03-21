
let slider = document.querySelector('.slider'),
    backButton = slider.querySelector('.slider__back-arrow'),
    nextButton = slider.querySelector('.slider__next-arrow'),
    slides = slider.querySelectorAll('.slider__content .slide'),
    currentSlide = 0;

function nextSlide() {
  goToSlide(currentSlide +1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].className = 'slide unvisible';
  currentSlide = (n + slides.length)%slides.length;
  slides[currentSlide].className = 'slide visible';
}

nextButton.onclick = function() {
    // pauseSlideshow();
    nextButton.style.fill = 'red';
    nextSlide();
};
backButton.onclick = function() {
    // pauseSlideshow();
    nextButton.style.fill = 'green';
    previousSlide();
};
