let tbody = document.querySelector("#tbody");
let submit = document.querySelector("#submit");
let firstN = document.querySelector("#firstName");
let lastN = document.querySelector("#lastName");

submit.addEventListener('click', function(){
    if (firstN.value.trim() == "" || lastN.value.trim() == ""){
        alert("Please enter name!");
    } else {
        let new_first = document.createElement("td");
        let new_last = document.createElement("td");

        new_first.innerHTML = firstN.value;
        new_last.innerHTML = lastN.value;
        
        let new_row = document.createElement("tr");

        new_row.appendChild(new_first);
        new_row.appendChild(new_last);
        tbody.appendChild(new_row);

        firstN.value = '';
        lastN.value = '';
    }
})