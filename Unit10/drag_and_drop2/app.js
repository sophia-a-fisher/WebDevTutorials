const dropZone = document.querySelector("#blank");
const draggables = document.querySelectorAll('.draggable');
let answerBtn = document.querySelector("#checkAnswer");
let answerMessage = document.querySelector("#answerMessage");

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.textContent);
    })
})

dropZone.addEventListener('dragover', (event) => {
    event.preventDefault();
});

dropZone.addEventListener('drop', (event) => {
    event.preventDefault();
    const answer = event.dataTransfer.getData('text/plain').toLowerCase().trim();
    dropZone.value = answer;
    answerMessage.style.color = 'black';
    answerMessage.style.display = 'none';
});

answerBtn.addEventListener('click', (event) => {
    answerMessage.style.display = 'block';
    answerMessage.innerHTML = 'Your answer is...'
    if (dropZone.value == 'html') {
        answerMessage.style.color = 'green';
        answerMessage.innerHTML += ' correct!';
    } else {
        answerMessage.style.color = 'red';
        answerMessage.innerHTML += ' wrong!';
    }
});

