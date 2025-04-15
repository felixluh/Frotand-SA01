let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo;
let pausado = false;

function start() {
  if (!pausado) {
    intervalo = setInterval(timer, 1000);
  } else {
    pausado = false;
  }
}

function pause() {
  clearInterval(intervalo);
  pausado = true;
}

function reset() {
  clearInterval(intervalo);
  segundos = 0;
  minutos = 0;
  horas = 0;
  pausado = false;
  document.getElementById('display').textContent = '00:00:00';
}

function timer() {
  segundos++;
  if (segundos === 60) {
    segundos = 0;
    minutos++;
    if (minutos === 60) {
      minutos = 0;
      horas++;
    }
  }

  let formatHora = (horas < 10 ? '0' + horas : horas);
  let formatMin = (minutos < 10 ? '0' + minutos : minutos);
  let formatSeg = (segundos < 10 ? '0' + segundos : segundos);

  document.getElementById('display').textContent = `${formatHora}:${formatMin}:${formatSeg}`;
}
