
// Reading the JSON text in a file
fetch('data.txt').then((response) => {
    return response.text();
}).then((data) => {
    const myData = JSON.parse(data);
    console.log(myData[1].Country);
}).catch((error) => {
    console.error('Failed to get data',error);
})

// Same thing
fetch('data.txt').then(response => response.text()
).then((data) => {
    const myData = JSON.parse(data);
    console.log(myData[1].Country);
    console.log(myData[1].name);
    console.log(myData[1].age);
}).catch((error) => {
    console.error('Failed to get data',error);
})

// let container = document.querySelector("#container");

let char_list = document.querySelector("#char_list");


for (let i = 1; i < 10; i++) {
    // Reading from a website aPi
    fetch(`https://swapi.dev/api/people/${i}`).then(response => response.text()
    ).then((data) => {
        const myData = JSON.parse(data);
        console.log(myData);

        let tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${myData.name}</td>
        <td>${myData.height}</td>
        <td>${myData.hair_color}</td>
        `
        char_list.appendChild(tr);
    }).catch((error) => {
        console.error('Failed to get data',error);
    })
}

