let body = document.querySelector("body");
let red = document.querySelector("#red");
let yellow = document.querySelector("#yellow");
let blue = document.querySelector("#blue");
let green = document.querySelector("#green");
let reset = document.querySelector("#reset");
let card = document.querySelector("#card")

red.addEventListener("click", function() {
    body.style.backgroundColor = "red";
    card.style.backgroundColor = "darkred"
})

yellow.addEventListener("click", function() {
    body.style.backgroundColor = "yellow";
    card.style.backgroundColor = "gold"
})

blue.addEventListener("click", function() {
    body.style.backgroundColor = "blue";
    card.style.backgroundColor = "darkblue"
})

green.addEventListener("click", function() {
    body.style.backgroundColor = "green";
    card.style.backgroundColor = "darkgreen"
})

reset.addEventListener("click", function() {
    body.style.backgroundColor = "white";
    card.style.backgroundColor = "darkgrey"
})