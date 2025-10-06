const obj = {
  pseudo: "From Scratch",
  ville: "Bordeaux",
  admin: false,
  /*   direBonjour() {
    console.log("Bonjour je suis " + this.pseudo);
  }, */
  direBonjour: function () {
    console.log("Bonjour je suis " + this.pseudo);
  },
};

// Ajouter
obj.age = 24;
obj["admin"] = true;

// Modifier
obj.pseudo = "FS";

// Supprimer
delete obj.ville;
//console.log(obj);

// Checker si propriété existe
//console.log("pseudo" in obj);
//console.log("ville" in obj);

// Parcourir l'objet
for (const key in obj) {
  //console.log(key + " : " + obj[key]);
}
//obj.direBonjour();

//Obtenir les clés
const keys = Object.keys(obj);
//console.log(keys);

//Obtenir les valeurs
const values = Object.values(obj);
//console.log(values);

const nestedArray = Object.entries(obj);
//console.log(nestedArray);

const obj2 = {
  taille: "1m80",
  poids: "75kg",
};

// Fusionner objects
const fusion = Object.assign({}, obj, obj2);
//console.log(fusion);

//Empecher les modifications
//const newObj = Object.freeze(obj); //Permet de vérouiller l'objet key et values non modifiable
const newObj = Object.seal(obj); //Permet de vérouiller partiellement l'objet seul,
// on ne peut plus modifier la propriété seul la valeur est modificable

newObj.pseudo = "Test";
newObj.adresse = "42 avenue du code";
//console.log(newObj);

//----------------------------------
// Construire des objects
//----------------------------------

// Fonction constructeur
function User(strPseudo, strVille) {
  this.pseudo = strPseudo;
  this.ville = strVille;

  this.getVille = function () {
    return this.ville;
  };
}

const user1 = new User("FromScratch", "Bordeaux");
const user2 = new User("Denis", "Nantes");
//console.log(user2);
//console.log(user2.getVille());

//----------------------------------
// Factory functions

function User3(pseudo, ville) {
  return {
    pseudo,
    ville,
  };
}

const user4 = User3("FS", "Nice");
//console.log(user4);

//----------------------------------
// Class

class Utilisateur {
  constructor(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;
  }
  setAdmin(boolean) {
    this.admin = boolean;
  }
}

const user5 = new Utilisateur("Samia", "Lyon");
user5.setAdmin(false);

Utilisateur.prototype.getVille = function () {
  return this.ville;
};

console.log(user5.getVille());

//----------------------------------
// L'héritage
//----------------------------------
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  saySomething(text) {
    console.log(this.name + " dit " + text);
  }
}

class Dog extends Animal {
  run() {
    console.log("Le chien court !");
  }
}

class Cat extends Animal {
  hunt() {
    console.log("Je chasse un oiseau");
  }
}

const rintintin = new Dog("Rintintin", 9);
console.log(rintintin.run());
