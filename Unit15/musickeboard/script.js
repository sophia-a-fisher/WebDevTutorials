let keys = document.querySelectorAll('.key');

for (let x = 0; x < keys.length; x++){
    keys[x].addEventListener('click', () => {
        playSound(keys[x].innerHTML.toUpperCase()); 
    });
}

document.addEventListener('keydown', (btn) =>{
    playSound(btn.key.toUpperCase());
    let pressed_key = btn.key.toLowerCase();

    for(let x = 0; x < keys.length; x++){
        keys[x].classList.remove('activated');
    }

    for(let x = 0; x < keys.length; x++){
        if(pressed_key == keys[x].innerHTML.toLowerCase()){
            keys[x].classList.add('activated');
        }
        
    }
});

function playSound(key){
    // let audio;

    switch (key){
        case 'C':
            var audio = new Audio('doremi/do.mp3');
            audio.play();
            break;
        case 'D':
            var audio = new Audio('doremi/re.mp3');
            audio.play();
            break;
        case 'E':
            var audio = new Audio('doremi/mi.mp3');
            audio.play();
            break;
        case 'F':
            var audio = new Audio('doremi/fa.mp3');
            audio.play();
            break;
        case 'G':
            var audio = new Audio('doremi/sol.mp3');
            audio.play();
            break;
        case 'A':
            var audio = new Audio('doremi/la.mp3');
            audio.play();
            break;
        case 'B':
            var audio = new Audio('doremi/ti.mp3');
            audio.play();
            break;
        case 'K':
            var audio = new Audio('doremi/doh.mp3');
            audio.play();
            break;
        default:
            console.log(key);
    }  
    
}