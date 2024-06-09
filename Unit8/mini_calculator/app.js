let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");

let add = document.querySelector("#add");
let minus = document.querySelector("#minus");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let resultText = document.querySelector("#resultText");

add.addEventListener('click', () => {
    let sum = addTwoNums(parseFloat(num1.value), parseFloat(num2.value));
    resultText.innerHTML = sum;
    num1.value = '0';
    num2.value = '0';
})

minus.addEventListener('click', () => {
    let sub = subTwoNums(parseFloat(num1.value), parseFloat(num2.value));
    resultText.innerHTML = sub;
    num1.value = '0';
    num2.value = '0';
})

multiply.addEventListener('click', () => {
    let mul = multTwoNums(parseFloat(num1.value), parseFloat(num2.value));
    resultText.innerHTML = mul;
    num1.value = '0';
    num2.value = '0';
})

divide.addEventListener('click', () => {
    if ((num2.value) != '0') {
        let div = divTwoNums(parseFloat(num1.value), parseFloat(num2.value));
        num1.value = '0';
        num2.value = '0';
    resultText.innerHTML = div;
    } else {
        alert('Divide by Zero Error!');
    }
    
})



function addTwoNums(a, b){
    let sum = a + b;
    return sum;
}

function subTwoNums(a, b){
    let dif = a - b;
    return dif;
}

function multTwoNums(a, b){
    let res = a * b;
    return res;
}

function divTwoNums(a, b){
    let div = a / b;
    return div;
}