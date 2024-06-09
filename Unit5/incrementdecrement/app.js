const minus = document.querySelector("#minus");
let numBox = document.querySelector("#numberbox");
const plus = document.querySelector("#plus");
const reset = document.querySelector("#reset");

let my_number = 0;

plus.addEventListener('click', function () {
    my_number++;
    numBox.value = my_number;
})

minus.addEventListener('click', () => {
    my_number--;
    numBox.value = my_number;
})

reset.addEventListener('click', () => {
    my_number = 0;
    numBox.value = my_number;
})

numBox.addEventListener('change', () => {
    my_number = numBox.value;
})