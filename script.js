let index = 0;

function moveSlide(step) {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel img');
    index = (index + step + slides.length) % slides.length;
    carousel.style.transform = `translateX(${-index * 100}%)`;
}
