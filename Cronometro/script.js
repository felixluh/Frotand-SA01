let timer;
let running = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let clickSound = document.getElementById("clickSound");

function playClickSound() {
  clickSound.play(); // Toca o som ao clicar
}

function start() {
  playClickSound();
  if (!running) {
    running = true;
    timer = setInterval(updateTime, 1000); // Atualiza o tempo a cada segundo
  }
}

function pause() {
  playClickSound();
  running = false;
  clearInterval(timer); // Pausa o cronômetro
}

function reset() {
  playClickSound();
  running = false;
  clearInterval(timer); // Reseta o cronômetro
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay(); // Atualiza a tela
}

function updateTime() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent =
    (hours < 10 ? "0" : "") + hours + ":" +
    (minutes < 10 ? "0" : "") + minutes + ":" +
    (seconds < 10 ? "0" : "") + seconds;
}
