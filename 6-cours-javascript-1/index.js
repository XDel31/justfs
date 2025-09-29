/* alert("salut js"); */

let maSuperVariable = "hello";

/* console.log(maSuperVariable); */

//Ancienne façon de déclarer qui fonctionne toujours
var unTexte = "Voici un texte";

//console.log(unTexte);

//Nouvelle façon

//Constante
const prenom = "Justine";
//Variable
let unChiffre = 24;

unChiffre = 22;

//console.log(unChiffre);

let chaine =
  "Je suis une chaine de caractère et le caractère permettant d'échapper \" est l'antislash";

//console.log(chaine);

let nouvelleChaine = "Chaine précédente : " + chaine;

//console.log(nouvelleChaine);

//Concaténation avec ALTGR+7
let autreConcatenation = `Chaine précédente : ${chaine} `;

//console.log(autreConcatenation);

//Type de données
let string = "Ceci est une chaine de caractère";
let number = 24;
let boolean = false;
let array = ["je", "suis", 47, true];

//console.log(array);

let object = {
  prenom: "Audrey",
  age: 33,
  ville: "Bordeaux",
  getAge() {
    return this.age;
  },
};

//console.log(object.getAge());

// les opérateurs
/* console.log(4 + 5);
console.log(4 - 5);
console.log(4 / 5);
console.log(4 * 5);
console.log(4 ** 5);
 */

// Les opérateurs d'affectations
/* let total = 0;

total = total + 1;
total++;
total += 5;

console.log(total);
 */

//Structures de controle
/*
let x = 3;
let y = 5;

if (x > y) {
  alert("YES x est plus gros que y");
} else if (y > x) {
  alert("c'est faux");
} else {
  alert("Ils sont égaux !");
}
 */

// Test l'égalité en type et valeur
/* let x = 3;
let y = 5;

if (x === y) {
  console.log("ils sont égaux");
} else {
  console.log("Ils sont inégaux");
}
 */

//Test de l'égalité en valeur uniquement
/* let z = "5";
let o = 5;

if (z == o) {
  console.log("ils sont égaux");
} else {
  console.log("Ils sont inégaux");
}
 */
/* 
let a = 2;
let b = 2;
// || ou
// && et
if (a <= b || a > 6) {
  console.log("UI");
}

if ((a = b && a > 1)) {
  console.log("UI");
}
 */

//Les fonctions - ancienne façon d'écrire à priori
/* function faireQuelqueChose() {
  console.log("Je fais un truc");
  console.log(5 + 6);
  console.log("calcul terminé !");
}

faireQuelqueChose();
 */
//Fonction fléchée
/* const addition = (a, b) => {
  console.log(a + b);
};

addition(2, 3);
addition(432, 578481);
 */

//portée des variables
function add2() {
  let num = 4;
  return num + 2;
}

console.log(add2());
