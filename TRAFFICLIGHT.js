let currentLight = 0; // 0: red, 1: green, 2: yellow
let timeRemaining = 6; // 6 seconds interval
const lights = [document.getElementById('red'), document.getElementById('green'), document.getElementById('yellow')];
const timerElement = document.getElementById('timer');

function changeLight() {
    // Turn off all lights
    lights.forEach(light => light.style.opacity = '0.3');

    // Turn on the current light
    lights[currentLight].style.opacity = '1';

    // Update the current light index
    currentLight = (currentLight + 1) % lights.length;

    // Reset the timer to 6 seconds and start countdown
    timeRemaining = 6;
    timerElement.textContent = timeRemaining;
    startTimer();
}

function startTimer() {
    const countdown = setInterval(() => {
        timeRemaining--;
        timerElement.textContent = timeRemaining;
        if (timeRemaining <= 0) {
            clearInterval(countdown);
            changeLight(); // Change light after the timer reaches 0
        }
    }, 1000); // Update the timer every second
}

// Start the traffic light cycle
changeLight();
