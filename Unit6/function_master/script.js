// Generic Function

function someFunc (a) {
    console.log(a);
}

someFunc("asd8");

// Anonymous Function
const myVar = function () {
    console.log("Hello");
}

myVar();

// Arrow Function

const func = () => {
    console.log("Hello");
}

func();

function greet(a) {
    return a;
}

const myfuncy = () => console.log(greet("cookie"));

myfuncy();

function multiple(a, b) {
    return a * b;
}

console.log(multiple(2,4));

const multiply = (a,b) => a * b;
console.log(multiple(2,3));