// Creating our own function
function addTwoNumbers(a,b){
    console.log(a+b);
}

function goodMorning(greeting){
    console.log(greeting);
}

function numbers(...args) {
    console.log(args);
}

function multnumbers(...args) {
   let result = 1;
    for (let num of args){
        result *= num;
   }
   console.log(result);
}

// addTwoNumbers(2,5);

// let btn = document.querySelector("#btn");
// let morning = document.querySelector("#morning");

// btn.addEventListener('click', () => {
//     addTwoNumbers(2,5);
// });

// morning.addEventListener('click', () => {
//     goodMorning("Good Morning!");
// });



// numbers(1,2,3,4,5,"sophia", false);
// multnumbers(2,3,4,10);

// let fruits = ["orange","apple","pear"];
// let myNums = [1000,14,225];

// // Spead operator
// // let combinedArray = [...fruits, ...myNums];

// let fruitsCopy = [...fruits,"grapes"];
// console.log(fruitsCopy);

// Array of Objects in Javascript
let myData = [
    // {
    // first_name:"Paul",
    // last_name:"Mary",
    // age:32,
    // fullname: function () {
    //     return this.first_name + " " + this.last_name;
    // }
    // },
    // {
    // first_name:"Sir",
    // last_name:"Chicken",
    // age:35,
    // fullname: function () {
    //     return this.first_name + " " + this.last_name;
    // }
    // },
    // {
    // first_name:"McFly",
    // last_name:"Berry",
    // age:23,
    // fullname: function () {
    //     return this.first_name + " " + this.last_name;
    // }
    // },
    // {
    //     first_name:"Juicy",
    //     last_name:"Fruit",
    //     age:22,
    //     fullname: function () {
    //         return this.first_name + " " + this.last_name;
    //     }
    //     },
    //     {
    //         first_name:"Grel",
    //         last_name:"Paryu",
    //         age:47,
    //         fullname: function () {
    //             return this.first_name + " " + this.last_name;
    //         }
    //         }
];

// console.log(myData[0].fullname);
// console.log(myData[1].fullname);
// console.log(myData[2].fullname);

// myData.forEach((item, idx) => {
//     console.log(idx + ":" + item.fullname());
// });

// Same thing
// for (let i = 0; i < myData.length; i++) {
//     console.log(myData[i].fullname());
// }

let listHolder = document.querySelector("#listHolder");

// let tr = document.createElement("tr");
// tr.innerHTML = 
//             `<td>1</td>
//             <td>Mark</td>
//             <td>Otto</td>
//             <td>@mdo</td> `;

// listHolder.appendChild(tr);

function renderRecord(){
    myData.forEach((element,indx) => {
        let tr = document.createElement("tr");
        tr.innerHTML = 
                    `<td>${indx + 1}</td>
                    <td>${element.fullname()}</td>
                    <td>${element.age}</td>`;
        
        listHolder.appendChild(tr); 
    });
}

// renderRecord();

let btn = document.querySelector("#btn");
let first_name = document.querySelector("#first");
let last_name = document.querySelector("#last");
let age = document.querySelector("#age");

btn.addEventListener('click', function () {
    // Form Validation
    if ((first_name.value.trim() == '')
        || (last_name.value.trim() == '') ||
    (age.value.trim() == '')) {
        alert('Fill out the form completely.');
    } else {
        let copyData = [...myData];
        let newEntry = {
            first_name: first_name.value.trim(),
            last_name:last_name.value.trim(),
            age:age.value.trim(),
            fullname: function () {
                return this.first_name + " " + this.last_name;
            }
        }
        copyData.push(newEntry);

        myData.splice(0,myData.length, ...copyData);
        
        listHolder.innerHTML = "";
        renderRecord();

        first_name.value = "";
        last_name.value = "";
        age.value = "";
    }

})

