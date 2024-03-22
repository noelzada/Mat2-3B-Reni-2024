const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-08-18T15:37:07")

let tempo = tempoObjetivo1.getFullYear();

contadores[0].textContent = tempo;

let segundos = Math.floor(tempoFinal / 1000);
let minutos = Math.floor(segundos / 60);
let horas = Math.floor(minutos / 60);
let dias = Math.floor(horas / 24);
