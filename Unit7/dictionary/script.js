let meaning = document.querySelector("#meaning");

function defineThis(){
    let inputWord = document.querySelector("#inputWord");
    let targetWord = inputWord.value.trim();

    if (targetWord != '') {
        inputWord.value = '';
        let existingLi = meaning.querySelector("li");
        if (existingLi) {
            // Erasing previous child
            existingLi.remove();
        }
        // Reading from a website aPi
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${targetWord}`).then(response => response.json()
        ).then((data) => {
            // const myData = JSON.parse(data);
            console.log(data[0].meanings[0].definitions[0].definition);

            let li = document.createElement('li');
            li.innerHTML = data[0].meanings[0].definitions[0].definition;

            meaning.appendChild(li);


        }).catch((error) => {
            console.error('Failed to get data',error);
        })
    } else {
        alert("Please enter a word!");
    }
    
}


