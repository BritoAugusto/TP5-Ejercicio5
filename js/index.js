//5- Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.

let horas = 0;
let minutos = 0;
let segundos = 0;
let cronometro;
const salidaCronometro = document.querySelector("#cronometro");
let cronometroIniciado = false;
const btnIniciar = document.querySelector("#iniciar");
const btnPausar = document.querySelector("#pausar");
const btnReiniciar = document.querySelector("#reiniciar");

const iniciarCronometro = () => {
  segundos++;
  if (segundos === 60) {
    segundos = 0;
    minutos++;
    if (minutos === 60) {
      minutos = 0;
      horas++;
    }
  }
  const formatoHora = horas < 10 ? `0${horas}` : horas;
  const formatoMinutos = minutos < 10 ? `0${minutos}` : minutos;
  const formatoSegundos = segundos < 10 ? `0${segundos}` : segundos;
  salidaCronometro.innerHTML = `<h2>${formatoHora}:${formatoMinutos}:${formatoSegundos}</h2>`;
};

btnIniciar.addEventListener("click", () => {
  if (!cronometroIniciado) {
    cronometro = setInterval(iniciarCronometro, 1000);
    cronometroIniciado = true;
  }
});

btnPausar.addEventListener('click', ()=>{
    clearInterval(cronometro);
    cronometroIniciado = false;
})
btnReiniciar.addEventListener('click', ()=>{
    clearInterval(cronometro);
    horas = 0;
    minutos = 0;
    segundos = 0;
    salidaCronometro.innerHTML = '<h2>00:00:00</h2>'
    cronometroIniciado = false;
})
