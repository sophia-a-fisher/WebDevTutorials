//Method Chaining

// function displayString(str){
//     console.log(str);

//     return {
//         name:"Sophia",
//         age:20,
//         displayNumber: function(num){
//             console.log(num);
//         }
//     }
// }

// displayString('uyfu');

function returnThis(){
    return {
                name:"Sophia",
                age:20,
                displayNumber: function(num){
                    console.log(num);
                    return {
                        displaySymbols: function (symbol){
                            console.log(symbol);
                        }
                    }
                }
            }
}

console.log(returnThis().displayNumber(3).displaySymbols('d'));