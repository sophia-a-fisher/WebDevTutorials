let btns = document.querySelectorAll('.wrap-toggle');
let wraps = document.querySelectorAll('.wrap');

for (let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', () => {
        wraps[i].classList.toggle('active');
    });
}