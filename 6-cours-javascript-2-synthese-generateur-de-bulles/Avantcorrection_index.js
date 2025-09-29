function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

let nb = 0;
let bubbleACreer;
let left;

/*
setInterval(() => {
  //anim.setProperty("--left", getRandomInt(1, 100) + "px");
  //document.body.innerHTML += "<div class='bubble'>ICI</div>";
  //console.log(document.body);
}, 100);
*/

setInterval(() => {
  let taille = getRandomInt(50, 300);
  let positionLeft = getRandomInt(0, window.innerWidth);
  let bubbleObjects;

  nb++;

  document.body.innerHTML += `<div class='bubble' id='bubble${nb}'></div>`;

  bubbleACreer = document.getElementById("bubble" + nb);

  bubbleACreer.style.clipPath = "circle(50% at 50% 50%)";

  bubbleACreer.style.left = positionLeft + "px";
  bubbleACreer.style.height = taille + "px";
  bubbleACreer.style.width = taille + "px";
}, 1000);

document.body.addEventListener("click", (e) => {
  let bubbleASupprimer;
  let nombreBulleEclate;

  const baliseH3 = document.body.querySelector("h3");

  //console.log(baliseH3);

  if (e.target.className === "bubble") {
    bubbleASupprimer = document.getElementById(e.target.id);
    //console.log(bubbleASupprimer);
    bubbleASupprimer.remove();

    nombreBulleEclate = baliseH3.textContent;
    // console.log(nombreBulleEclate);
    nombreBulleEclate++;
    baliseH3.textContent = nombreBulleEclate;
    // console.log(baliseH3.textContent);
  }
});

document.addEventListener("animationstart", (e) => {
  left = getRandomInt(0, window.innerWidth) + "px";

  bubbleObjects = document.body.querySelectorAll(".bubble");

  bubbleObjects.forEach((bubble) => {
    bubble.style.bottom = bubble.offsetTop - 5 + "px";
  });
});
