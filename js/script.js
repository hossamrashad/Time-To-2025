const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const newYears = "1 jan 2025";

function countdown() {
    const newYearsDate = new Date(newYears);

    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
    if (seconds < 50) {
        secondsEl.style.color = "cadetblue";
        minutesEl.style.color = "cadetblue";
        hoursEl.style.color = "cadetblue";
        daysEl.style.color = "cadetblue";

    }
    if (seconds < 40) {
        secondsEl.style.color = "#3498da";
        minutesEl.style.color = "#3498da";
        hoursEl.style.color = "#3498da";
        daysEl.style.color = "#3498da";

    }
    if (seconds < 30) {
        secondsEl.style.color = "#f44336";
        minutesEl.style.color = "#f44336";
        hoursEl.style.color = "#f44336";
        daysEl.style.color = "#f44336";

    }
    if (seconds < 20) {
        secondsEl.style.color = "#4caf50";
        minutesEl.style.color = "#4caf50";
        hoursEl.style.color = "#4caf50";
        daysEl.style.color = "#4caf50";

    }
    if (seconds < 10) {
        secondsEl.style.color = "#ffeb3b";
        minutesEl.style.color = "#ffeb3b";
        hoursEl.style.color = "#ffeb3b";
        daysEl.style.color = "#ffeb3b";

    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);