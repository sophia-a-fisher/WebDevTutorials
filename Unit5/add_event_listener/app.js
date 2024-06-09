let title = document.querySelector("#title");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2")
let btn3 = document.querySelector("#btn3");
let reset = document.querySelector("#reset");

btn1.addEventListener('click', function () {
    title.innerHTML = "Button 1 clicked"
})

btn2.addEventListener('click', function () {
    title.innerHTML = "Button 2 clicked"
})

btn3.addEventListener('click', function () {
    title.innerHTML = "Button 3 clicked"
})

reset.addEventListener('click', function () {
    title.innerHTML = "WELCOME TO THE PAGE"
})