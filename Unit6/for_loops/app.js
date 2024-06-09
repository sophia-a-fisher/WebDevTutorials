 let num = 0;

//  for(num; num < 10; num++){
//     if(num % 2 == 0){
//         console.log("even");
//     } else {
//         console.log(num);
//     }
//  }

// num = 0;
// let ul = document.querySelector(".container");

//  for(num; num < 10; num++){
//     let new_item = document.createElement("li");
//     if(num % 2 == 0){
//         new_item.innerHTML = 'even';
//     } else {
//         new_item.innerHTML = num;
//     }
//     ul.appendChild(new_item);
//  }

//  num = 1;
// let ul = document.querySelector(".container");

//  for(num; num <= 20; num++){
//     let new_item = document.createElement("li");
//     if(num % 3 == 0){
//         new_item.innerHTML = 'multiple of three';
//         ul.appendChild(new_item);
//     } else {
//         new_item.innerHTML = num;
//         ul.appendChild(new_item);
//     }
//  }

// FizzBUZZ exercise

for (let i = 1; i < 100; i++) {
    if (i%3 == 0 && i%5 == 0) {
        console.log("FizzBuzz");
    } else if (i%3 == 0) {
        console.log("Fizz");
    } else if (i%5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}