{/* <div class="container">
        <h3>Creating Element Using Javascript</h3>
        <input type="text" id="textbox" placeholder="Enter text">
        <button id="button">Create Element</button>
    
        
    </div>

    <div class="container2">
        <ul id="my_list">
            <li>Sample Data</li>
        </ul>
    </div> */}

let textbox = document.querySelector("#textbox");
let button = document.querySelector("#button");
let my_list = document.querySelector("#my_list");

button.addEventListener('click',function() {
    // Making sure that there isn't whitespace
    // on beginning or end of string
    textbox.value = textbox.value.trim();
    if (textbox.value != '') {
        // Forcing to uppercase
        let label = textbox.value.toUpperCase();
        // Forcing to lowercase
        // let label = textbox.value.toLowerCase();
        let new_elem = document.createElement('li');
        new_elem.innerHTML = label;
        my_list.appendChild(new_elem);
    } else {
        alert("Please enter data!");
    }
    
});