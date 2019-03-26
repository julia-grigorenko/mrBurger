
let slider = document.querySelector('.slider'),
    backButton = slider.querySelector('.slider__back-arrow'),
    nextButton = slider.querySelector('.slider__next-arrow'),
    slides = slider.querySelectorAll('.slider__content .slide'),
    currentSlide = 0;

var slideInterval;


function sliderRevival() {
  slideInterval = setInterval(nextSlide,4500);
}

function pauseSlideshow() {
    clearInterval(slideInterval);
}

function goToSlide(n) {
  slides[currentSlide].className = 'slide unvisible';
  currentSlide = (n + slides.length)%slides.length;
  slides[currentSlide].className = 'slide visible';
}

function nextSlide() {
  goToSlide(currentSlide +1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

nextButton.onclick = function() {
  pauseSlideshow();
  nextSlide();
  setTimeout(sliderRevival,6000);
};
backButton.onclick = function() {
  pauseSlideshow();
  previousSlide();
  setTimeout(sliderRevival,6000);
};

sliderRevival();
