// Créer un événement à la validation du form pour lancer le compte à rebours
let totalSeconds = 0;
let timerId;

function compteARebour() {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  countdownDisplay.textContent = `${minutes} : ${seconds}`;
  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    stopperCompteARebour();
  }
}

function demarrerCompteARebour() {
  // Un appel de fonction via le setInterval ne prend pas de parenthèse !!!
  timerId = setInterval(compteARebour, 1000);
}

function stopperCompteARebour() {
  clearInterval(timerId);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  totalSeconds = choice.value * 60;
  choice.value = "";

  demarrerCompteARebour();
});
