// let textbox = document.querySelector("#my_textbox");
let title = document.querySelector("#my_title");

// title.innerHTML = "MY WEBSITE";
// title.style.color = "red";
// title.style.color = "steelblue";

let textbox = document.querySelector("#my_textbox");
// textbox.value = "Sophia Fisher";

let button = document.querySelector("#my_button");

// Listening for a click event
button.addEventListener('click', function() {
    title.innerHTML = textbox.value;
});