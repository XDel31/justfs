/* document.querySelector("p").style.background = "red";
document.querySelector("p").style.visibility = "visible";

const baliseHTML = document.querySelector("h4");

baliseHTML.style.background = "Red";
 */

//----------------------------------------------------------------------------
//Clic Event
const questionContainer = document.querySelector(".click-event");
//idem
//const questionContainer = document.querySelector(".box");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

/*
console.log(btn1);
console.log(btn2);
*/
questionContainer.addEventListener("click", () => {
  // Ajoute une classe ou l'enlève si elle n'existe pas
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.style.background = "green";
  response.textContent = "Bonne réponse !";
  response.classList.add("show-response");
});

btn2.addEventListener("click", () => {
  response.style.background = "red";
  response.textContent = "Mauvaise réponse, La bonne réponse était Berne";
  response.classList.add("show-response");
});

//Priorité des référencement d'éléments
// <div style=""> > #id > .class > baliseHTML

//----------------------------------------------------------------------------
//Mouse event
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  // e.target : l'élément survolé
  // e.pageX : A utilisé pour obtenir la bonne valeur X
  // e.pageY : A utilisé pour obtenir la bonne valeur Y
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});
/* 
window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(0, 0)";
  mousemove.style.border = "2px solid teal";
});
 */
questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "rgba(0,0,0,1)";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//----------------------------------------------------------------------------
//Keypress
const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = (sFile) => {
  const audio = new Audio();
  audio.src = "./" + sFile + ".mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  /*   if (e.key === "j") {
    keypressContainer.style.background = "teal";
  }
 */
  switch (e.key) {
    case "k":
    case "j":
      keypressContainer.style.background = "pink";
      break;

    case "h":
      keypressContainer.style.background = "teal";
      ring(e.key);
      break;

    default:
      keypressContainer.style.background = "black";
  }
});

//----------------------------------------------------------------------------
//Scroll Event
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-50px";
  }
});

//----------------------------------------------------------------------------
// Form
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");

let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked === true) {
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Langage préféré : ${language}</h4>

    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

//----------------------------------------------------------------------------
// Load event : permet de réaliser des traitement une fois le document chargé
window.addEventListener("load", () => {
  console.log("document chargé !");
});

//----------------------------------------------------------------------------
// ForEach
// Renvoi un HTMLCollection qui ne possède pas la methode forEach
let boxes = document.getElementsByClassName("box");

console.log(boxes);

// Renvoi un NodeList qui lui possède la methode forEach
boxes = document.querySelectorAll(".box");

console.log(boxes);

boxes.forEach((box) => {
  box.style.background = "teal";
});

//----------------------------------------------------------------------------
// addEventListener Vs onclick
/* document.body.onclick = function () {
  console.log("click 1 !");
};
 */

//Bubbling
document.body.addEventListener(
  "click",
  () => {
    console.log("click 1 !");
  },
  false //s'execute après celui en usecapture
);

//UseCapture
document.body.addEventListener(
  "click",
  () => {
    console.log("click 2 !");
  },
  true //s'execute avant celui en bubbling
);

//----------------------------------------------------------------------------
// Stop propagation
/*
questionContainer.addEventListener("click", (e) => {
  alert("test !");
  //arrête la pile d'évenement click
  e.stopPropagation();
});
*/

//----------------------------------------------------------------------------
// BOM : Browser Object Model

/* console.log(window.innerHeight);
console.log(window.scrollY);

let windowObjectReference;

windowObjectReference = window.open(
  "http://google.com",
  "cours js",
  "height=100",
  "width=200"
);

windowObjectReference.close();
*/

//confirm
/* if (window.confirm("Voulez vous vraiment confirmer ?")) {
  alert("Réponse OK");
} else {
  alert("Réponse Annuler");
}
 */

//prompt
btn1.addEventListener("click", () => {
  let answer = prompt("Entrez votre nom : ");
  questionContainer.innerHTML = "<h3>Bravo " + answer + "</h3>";
});

setTimeout(() => {
  questionContainer.style.borderRadius = "300px";
}, 2000);

/*
let interval = setInterval(() => {
  document.body.innerHTML += "<div class='box'><h2>Nouvelle boite</h2></div>";
}, 1000);

document.body.addEventListener("click", () => {
  clearInterval(interval);
});
*/

//Location
console.log(location.href);
console.log(location.host);
console.log(location.pathname);
console.log(location.search);
//location.replace("http://lequipe.fr");

/*
window.onload = () => {
  location.href = "https://www.wowhead.com/fr";
};
*/
/*
console.log(navigator.userAgent);
*/

/*
https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition
*/

/* var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  var crd = pos.coords;

  console.log("Votre position actuelle est :");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude : ${crd.longitude}`);
  console.log(`La précision est de ${crd.accuracy} mètres.`);
}

function error(err) {
  console.warn(`ERREUR (${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
 */
//console.log(history);
//window.history.back();
//history.go(-2);

//----------------------------------------------------------------------------
// SetProperty
window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
