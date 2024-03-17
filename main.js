let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    } else if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    showSlide(currentSlideIndex);
}


showSlide(currentSlideIndex);
// Thiết lập hằng số cho hướng chuyển đổi (1 cho slide tiếp theo, -1 cho slide trước đó)
const DIRECTION_NEXT = 1;


// Thiết lập thời gian chuyển đổi slide (4 giây)
const INTERVAL_TIME = 4000;

// Thiết lập hàm setInterval để tự động chuyển đổi slide
setInterval(function() {
    changeSlide(DIRECTION_NEXT);
}, INTERVAL_TIME);

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav');
    if (window.scrollY > 0) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});
