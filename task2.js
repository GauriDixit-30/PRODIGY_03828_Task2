let hours = 0;
let minutes = 0;
let seconds = 0;
let timerInterval = null;
let lapTimes = [];

document.getElementById('start-button').addEventListener('click', startTimer);
document.getElementById('pause-button').addEventListener('click', pauseTimer);
document.getElementById('reset-button').addEventListener('click', resetTimer);

function startTimer() {
    timerInterval = setInterval(() => {
        seconds++;
        if (seconds >= 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes >= 60) {
            hours++;
            minutes = 0;
        }
        updateDisplay();
    }, 1000);
    document.getElementById('start-button').disabled = true;
    document.getElementById('pause-button').disabled = false;
}

function pauseTimer() {
    clearInterval(timerInterval);
    document.getElementById('start-button').disabled = false;
    document.getElementById('pause-button').disabled = true;
}

function resetTimer() {
    clearInterval(timerInterval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    lapTimes = [];
    updateDisplay();
    document.getElementById('lap-times').innerHTML = '';
    document.getElementById('start-button').disabled = false;
    document.getElementById('pause-button').disabled = true;
}

function updateDisplay() {
    document.getElementById('hours').innerText = pad(hours);
    document.getElementById('minutes').innerText = pad(minutes);
    document.getElementById('seconds').innerText = pad(seconds);
}

function pad(time) {
    return (time < 10 ? '0' : '') + time;
}

// Lap time functionality
document.getElementById('start-button').addEventListener('click', () => {
    const lapTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    lapTimes.push(lapTime);
    const lapTimeHTML = `<li>${lapTime}</li>`;
    document.getElementById('lap-times').innerHTML += lapTimeHTML;
});
