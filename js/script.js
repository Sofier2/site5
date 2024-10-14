let left = 0;
const slideBlock = document.querySelector('.slider-block');

document.querySelector(".arrow-next").addEventListener('click', function() { 
    left = left + 450;
    if (left > 1350) { // Припускаю, що є 4 слайди по 450px кожен (450 * 3 = 1350), щоб повернути до початку.
        left = 0;
    }
   
    slideBlock.style.left = -left + 'px';
});

document.querySelector(".arrow-prev").addEventListener('click', function() { 
    left = left - 450;
    if (left < 0) {
        left = 1350; // 3 слайди по 450px (450 * 3 = 1350).
    }
   
    slideBlock.style.left = -left + 'px';
});
