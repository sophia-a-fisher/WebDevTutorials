let openBtn = document.querySelector(".open-btn");
let closeBtn = document.querySelector(".close-btn");
let wraps = document.querySelectorAll(".wrap");

openBtn.addEventListener('click', () => {
    for (let x = 0; x < wraps.length; x++) {
        wraps[x].classList.add('visible');
    }
});

closeBtn.addEventListener('click', () => {
    for (let x = 0; x < wraps.length; x++) {
        wraps[x].classList.remove('visible');
    }
});