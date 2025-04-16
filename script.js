
// Timer de 50:43 minutos
let totalSeconds = 50 * 60 + 43;
const countdownElement = document.getElementById('countdown');

function updateTimer() {
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    countdownElement.textContent = `${minutes}:${seconds}`;
    if (totalSeconds > 0) {
        totalSeconds--;
    }
}

setInterval(updateTimer, 1000);
updateTimer();
