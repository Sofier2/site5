let left = 0;

const slideBlock = document.querySelector('.slider-block3');

document.querySelector(".arrow-next3").addEventListener('click', function() { 
    left = left + 1050;
    if (left > 2100) { // Якщо слайди йдуть по 1050px, і їх три (0px, 1050px, 2100px)
        left = 0;
    }
   
    slideBlock.style.left = -left + 'px';
});

document.querySelector(".arrow-prev3").addEventListener('click', function() { 
    left = left - 1050;
    if (left < 0) {
        left = 2100; // Припускаючи, що максимальне значення для трьох слайдів
    }
   
    slideBlock.style.left = -left + 'px';
});
