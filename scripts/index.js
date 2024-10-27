const navButton = document.getElementById('site-nav-button');
const navList = document.getElementById('site-nav-list');

navButton.addEventListener('click', () => {
    navList.classList.toggle('toggled');
});


const container = document.querySelector('.container');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

let currentIndex = 0;

document.getElementById('next').addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
        updateSlidePosition();
    }
});

document.getElementById('prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlidePosition();
    }
});

function updateSlidePosition() {
    const offset = -currentIndex * 100; 
    container.style.transform = `translateX(${offset}vw)`;
}
