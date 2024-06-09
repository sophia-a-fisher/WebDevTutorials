let mins = document.querySelector("#mins");
let secs = document.querySelector("#secs");
let startBtn = document.querySelector("#start");
let resetBtn = document.querySelector("#reset");
let stopBtn = document.querySelector("#stop");

let myTimer;
let myCounter = 0;
let mySecs = 0;
let myMins = 0;

stopBtn.disabled = true;
resetBtn.disabled = true;



startBtn.addEventListener('click',() => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;
    
    myTimer = setInterval(() => {
        myCounter++;
        mySecs = myCounter;

        secs.innerHTML = mySecs;
        mins.innerHTML = myMins;

        if (myCounter > 59) {
            myCounter = 0;
            myMins++;
        }

        if (parseInt(secs.innerHTML) < 10) {
            secs.innerHTML = '0' + secs.innerHTML;
        } else if (parseInt(secs.innerHTML) == 60) {
            secs.innerHTML = '00';
        }

        if (parseInt(mins.innerHTML) < 10) {
            mins.innerHTML = '0' + mins.innerHTML;
        } else if (parseInt(mins.innerHTML) == 60){
            clearInterval(myTimer);
            myCounter = 0;
            myMins = 0;
            mySecs = 0;
            mins.innerHTML = '00';
            secs.innerHTML = '00';
        }
    }, 1000);
});

stopBtn.addEventListener('click',() => {
    clearInterval(myTimer);
    startBtn.disabled = false;
    // myCounter = 0;
    // mins.innerHTML = '00';
    // secs.innerHTML = '00';
});

resetBtn.addEventListener('click',() => {
    clearInterval(myTimer);
    myCounter = 0;
    myMins = 0;
    mySecs = 0;
    mins.innerHTML = '00';
    secs.innerHTML = '00';
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
});