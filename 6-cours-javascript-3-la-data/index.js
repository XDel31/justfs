// Rappel des types de données
let maString = "Chaine";
let monNumber = 25;
let monBoolean = true;
let maVariable;

//Tableaux
let monTableau = ["Bordeaux", "Toulouse", "Nantes"];
//console.log(monTableau[0][3]); affiche d

let monTableau2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];
/* 
console.log(monTableau2[3][1]);
console.log(monTableau2[4].nom);
 */

let monObjet = {
  pseudo: "Denis",
  age: 33,
  tecnhos: ["JavaScript", "React", "NodeJS"],
  admin: false,
};

/* monObjet.adresse = "22 rue du code";
console.log(monObjet);
 */

let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["JavaScript", "React", "NodeJS"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["CSS", "React", "NodeJS"],
    admin: false,
  },
  {
    pseudo: "Nikola",
    age: 42,
    technos: ["PHP", "React", "NodeJS"],
    admin: true,
  },
];

/* console.log(data[2].pseudo); */

// -----------------------------
// Structure de controle
// -----------------------------

if (data[0].age > data[1].age) {
  //console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
}

let w = 0;

while (w < 10) {
  w++;
  //console.log("La valeur de w est de " + w);
}

let d = 0;
do {
  d++;
  //console.log(d);
} while (d < 5);

for (const user of data) {
  document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
}

for (let cpt = 0; cpt < data.length; cpt++) {
  document.body.innerHTML +=
    "<h4>" + data[cpt].pseudo + " - " + data[cpt].technos[0] + "</h4>";
}

document.body.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;

    case "php":
      document.body.style.background = "purple";
      break;

    case "python":
      document.body.style.background = "blue";
      break;

    default:
      document.body.style.background = "white";
      break;
  }
});

//---------------------------------------------------------
//Méthode String
let string2 = "JavaScript est un langage orienté objet";

//console.log(eval("1" + 2));
//console.log(eval(parseInt("1") + 2));
//console.log(isNaN("4A")); //IsNan (is not a number)
//console.log(string2.length);
//console.log(string2[string2.length - 1]);
//console.log(string2.indexOf("langage"));
//console.log(string2.indexOf("x"));

//let newString = string2.slice(20);
//let newString = string2.slice(5, 17);
//console.log(newString);

//console.log(string2.split(" "));

//console.log(string2.toLowerCase());
//console.log(string2.toUpperCase());
//console.log(string2.replace("JavaScript", "PHP"));

//---------------------------------------------------------
//Méthode Numbers

/* 
let number2 = 42.1234;
let numberString = "42.12 est un chiffre";

console.log(number2.toFixed(2));
console.log(parseInt("43"));
console.log(parseInt(numberString));
console.log(parseFloat(numberString));
 */

//---------------------------------------------------------
// Math
/* 
console.log(Math.PI);
console.log(Math.round(4.5));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));
console.log(Math.pow(2, 7)); //puissance
console.log(Math.sqrt(16)); //racine

console.log(Math.ceil(Math.random() * 50));
 */

//---------------------------------------------------------
// Méthode array

let array3 = ["JavaScript", "PHP", "Python"];
let array4 = ["Ruby", "Solidity"];
let array5 = ["24", "24", "24"];

let newArray = array3.concat(array4);
/*
console.log(newArray);
 */

/* let newArray = [...array3, ...array4];
console.log(newArray);
 */

//console.log(array3.join(" - "));

//console.log(array3.slice(1));
//console.log(newArray.slice(1, 4));

//console.log(array3.indexOf("Python"));

/* array3.forEach((language) => {
  console.log(language);
});
 */

/* 
console.log(array5.every((num) => num === "24"));
console.log(array3.some((language) => language === "PHP"));
 */

/* 
console.log(array3.shift()); //Supprime le 1er élément du tableau
console.log(array3.pop()); //Supprime le dernier élément du tableau
console.log(array3);
 */

/* 
let restArray = array3.splice(1, 1, "C++");
console.log(array3);
console.log(restArray);
restArray = array3.splice(0, 2, ...array4); //On remplace les 2 premiers éléments du tableau par le contenu d'un autre tableau avec un spread operator "..."
console.log(array3);
console.log(array4);
console.log(restArray);
 */

let arrayNumber = [4, 74, 28, 12, 1];
/*
//console.log(arrayNumber.reduce((x, y) => x + y));

arrayNumber.push("Coucou");
console.log(arrayNumber);
 */

//---------------------------------------------------------
// FILTER / SORT / MAP
//console.log(arrayNumber.filter((number) => number > 10));

//console.log(arrayNumber.sort());

/* 
console.log(arrayNumber.sort((a, b) => b - a));
console.log(arrayNumber.sort((a, b) => a - b));
console.log(arrayNumber.filter((number) => number > 10).sort((a, b) => a - b));
 */
/*
document.body.innerHTML = arrayNumber
  .map((number) => `<li>${number}</li>`)
  .join("");
*/

/*
// Méthode map sur les objets
document.body.innerHTML = data
  //.filter((user) => user.admin === false)
  .filter((user) => user.pseudo.includes("i"))
  //.sort((a, b) => a.age - b.age) //tri sur des nombres
  .sort((a, b) => a.pseudo.localeCompare(b.pseudo)) //tri de chaine de caractères avec localeCompare
  // s'écrie également:
  // .sort(function (a, b) {return a.pseudo.localeCompare(b.pseudo);})

  .map(
    (user) =>
      `
      <div class="user-card">
        <h2>${user.pseudo}</h2>
        <p>Age : ${user.age} ans</p>
        <p>Status : ${user.admin ? "Modérateur" : "Membre"}</p>

      </div>
      `
  )
  .join("");
*/

//---------------------------------------------------------
// Les dates

//Date classique
let date = new Date();
//console.log(date);

//Timestamp
let timestamp = Date.parse(date);
//console.log(timestamp);

//IsoString
let iso = date.toISOString();
//console.log(iso);

function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    //    hour: "numeric",
    //    minute: "numeric",
  });
  return newDate;
}

/* 
console.log(dateParser(date));
console.log(dateParser(timestamp));
console.log(dateParser(iso));
 */

//---------------------------------------------------------
//Destructuring
let moreData = {
  destVar: ["Element 1", "Element 2"],
};

//console.log(moreData.destVar);

//Permet de raccourcir l'accès au contenu
const { destVar } = moreData;

//console.log(destVar);

let array6 = [70, 80, 90];
/* 
console.log(array6[0]);
console.log(array6[1]);
console.log(array6[2]);
 */
let [x, y, z] = array6;

/* console.log(x);
console.log(y);
console.log(z);

console.log(iso);
 */
const dateDestructuring = (chaine) => {
  let newDate = chaine.split("T")[0];
  let [y, m, d] = newDate.split("-");
  return [d, m, y].join("/");
};

//console.log(dateDestructuring(iso));

//---------------------------------------------------------
//Les DataSets

//const h3js = document.getElementById("javascript");
//console.log(h3js.dataset.lang);
/* 
const h3 = document.querySelectorAll("h3");
h3.forEach((language) => console.log(language.dataset.lang));
 */
//---------------------------------------------------------
//Les Regex
let mail = "from_scratch33@gmail.com";
// console.log(mail.search(/from/)); //retourne 0 si il a trouvé et -1 autrement
// console.log(mail.replace(/from/, "de"));

//console.log(mail.match(/SCratch/i)); //SCratch figure dans la chaine i ignore la casse
//console.log(mail.match(/[zug]/)); //z u ou g figure dans la chaine mail

console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/)); //regex pour les emails

let separator = 123123456498;

console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."));
