let timerDisplay = document.querySelector("#timerDisplay");
let start = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let pause = document.querySelector("#pause");

let theTimer = 0;
let myTimer;

start.addEventListener('click',() => {
    // 1000 Means 1 second
    myTimer = setInterval(function(){
        // Function occurs every time interval is up
        theTimer++;
        timerDisplay.innerHTML = theTimer; 
    },1000);
})

pause.addEventListener('click',() => {
    // Clears the behavior previously
   clearInterval(myTimer);
})

stopBtn.addEventListener('click',() => {
   // Clears the behavior previously
   clearInterval(myTimer);
   timerDisplay.innerHTML = '0';
   theTimer = 0;
})


