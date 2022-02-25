let minute = document.querySelector('#minute');
let seconds = document.querySelector('#seconds');
let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let reset = document.querySelector('#reset');
let timeMinute = 00;
let timeSeconds = 00;
var minuteInterval;
var secondsInterval;

function timerMinuteStart() {
    timeMinute++;
    if(timeMinute < 10) {
        minute.innerHTML = "0" + timeMinute;
    }
}
function timerSecondsStart() {
    timeSeconds++;
    if(timeSeconds < 9) {
        seconds.innerHTML = "0" + timeSeconds;
    } else {
        seconds.innerHTML = timeSeconds;
    }
    if(timeSeconds >= 59) {
        timeSeconds = -1;
    }
}
start.addEventListener('click', function() {
    minuteInterval = setInterval(timerMinuteStart, 60000);
    secondsInterval = setInterval(timerSecondsStart, 1000);
});
stop.addEventListener('click', function() {
    clearInterval(minuteInterval);
    clearInterval(secondsInterval);
})
reset.addEventListener('click', function() {
    timeMinute = -1;
    timeSeconds = -1;
});