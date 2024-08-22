let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let carousel = document.querySelector('.carousel');
let items = carousel.querySelectorAll('.list .item');
let indicator = carousel.querySelector('.indicators');
let dots = indicator.querySelectorAll('.indicators ul li');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;
let autoPlay;

const startAutoPlay = () => {
    clearInterval(autoPlay); 
    autoPlay = setInterval(() => {
        nextBtn.click();
    }, 5000);
}
startAutoPlay();

const setSlider = () => {
    let itemActiveOld = carousel.querySelector('.list .item.active');
    if (itemActiveOld) itemActiveOld.classList.remove('active');
    items[active].classList.add('active');

    let dotActiveOld = indicator.querySelector('.indicators ul li.active');
    if (dotActiveOld) dotActiveOld.classList.remove('active');
    dots[active].classList.add('active');

    indicator.querySelector('.number').innerText = '0' + (active + 1);
    startAutoPlay();
}
setSlider();

nextBtn.onclick = () => {
    active = (active + 1 > lastPosition) ? 0 : active + 1;
    carousel.style.setProperty('--calculation', 1);
    setSlider();
}

prevBtn.onclick = () => {
    active = (active - 1 < firstPosition) ? lastPosition : active - 1;
    carousel.style.setProperty('--calculation', -1);
    setSlider();
}

dots.forEach((item, position) => {
    item.onclick = () => {
        active = position;
        setSlider();
    }
});

// Optional: Add swipe functionality for mobile
let touchStartX = 0;
let touchEndX = 0;

carousel.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

carousel.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

const handleSwipe = () => {
    if (touchEndX < touchStartX) {
        nextBtn.click();
    }
    if (touchEndX > touchStartX) {
        prevBtn.click();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Spinner loading logic (optional)
    const spinner = document.getElementById('loading-spinner');
    const pageContent = document.getElementById('page-content');

    window.addEventListener('load', function() {
        setTimeout(function() {
            if (spinner) {
                spinner.style.display = 'none';
            }
            if (pageContent) {
                pageContent.style.visibility = 'visible';
            }
        }, 1000);
    });
});
