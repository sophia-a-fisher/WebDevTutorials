// let eventTeller = document.querySelector("#eventTeller");
// let myItem = document.querySelector("#myItem");
const dropZone = document.querySelector(".dropzone");
const draggables = document.querySelectorAll('.draggable');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.textContent);
    })
})

dropZone.addEventListener('drop', (event) => {
    event.preventDefault();
    const text = event.dataTransfer.getData('text/plain');
    dropZone.value = text;
});

// myItem.addEventListener('dragstart', () => {
//     eventTeller.innerHTML = "A user is dragging an item";
// });

// dropZone.addEventListener('dragover', (event) => {
//     event.preventDefault();
//     eventTeller.innerHTML = "Something above us";
// });


// dropZone.addEventListener('drop', (event) => {
//     event.preventDefault();
//     dropZone.value = myItem.innerHTML;
// });