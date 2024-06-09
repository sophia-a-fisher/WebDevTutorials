// https://cheese-36ee0-default-rtdb.firebaseio.com/

const myForm = document.querySelector("#myForm");
const tBody = document.querySelector("#dataHolder");

fetch(`https://cheese-36ee0-default-rtdb.firebaseio.com/cheeses.json`).then(response => response.json()).then(data => {
    for (const key in data) {
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${data[key].cheeseName}</td>
        <td>${data[key].descript}</td>`
        tBody.appendChild(tr);
    }
}).catch(error => {
    console.log('Something went wrong...',error);
})


myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formWithData = new FormData(myForm);

    fetch(`https://cheese-36ee0-default-rtdb.firebaseio.com/cheeses.json`,{
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formWithData)),
        headers: {
            'Content-Type':'application/json'
        }
    }).then(() => {
        myForm.reset();
        window.location.href="http://127.0.0.1:5500/Unit7/add_record_database/confirm.html"
    }).catch(error => {
        console.log('Something went wrong...',error);
    })
})


