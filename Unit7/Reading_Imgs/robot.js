// let container = document.querySelector("#container");

let container = document.querySelector(".RobotContainer");


for (let i = 1; i < 11; i++) {
    // Reading from a website aPi
    fetch(`https://robohash.org/${i}`)
    .then((response) => {

        let img = document.createElement('img');
        img.src = response.url;
        container.appendChild(img);
    }).catch((error) => {
        console.error('Failed to get data',error);
    })
}
