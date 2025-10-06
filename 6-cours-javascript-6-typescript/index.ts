//Variables
let nMonNombre: number;
let strMachaine: string;
let anyNumOrString: number | string | boolean;

//Tableaux
let tabNumber: number[];
let tab = ["123", "456"];

//Objet
interface Player {
  id: number;
  name: string;
  jersey?: number;
}
let zidane: Player = {
  id: 0,
  name: "Zidane",
};

//les classes
class Singer {
  id: number;
  name: string;
  alive: boolean = true;

  constructor(id: number, name: string, alive?: boolean) {
    this.id = id;
    this.name = name;
    if (alive != null) {
      this.alive = alive;
    }
  }
}

const prince = new Singer(0, "Prince");
console.log(prince);

const prince2 = new Singer(0, "Prince", false);
console.log(prince2);

//les fonctions
function sayMyName(name?: string) {
  console.log("Bonjour " + name);
}

sayMyName("Bob");
sayMyName();

function ageDuCapitaine(age: number | string, size?: number): string {
  if (size) {
    return (
      "La taille du capitaine est de " +
      size +
      "cm et il est agé de " +
      age +
      "ans"
    );
  } else {
    return "Le capitaine est agé de " + age + "ans";
  }
}

console.log(ageDuCapitaine(16, 185));

// Tuple : un Tuple est un tableau dont le nombre d'éléments est fixe.
// Chaque élément du Tuple peut avoir un type différent.
// Le Tuple est en fait une sorte de mini-array où vous connaissez le nombre d'éléments et leur type à l'avance.
let author: [string, number];
author = ["Margaret Mitchell", 1900];

//Enum
enum Role {
  ADMIN,
  PREMIUM,
  BASIC,
}
console.log(Role.ADMIN);

interface User {
  name: string;
  attributes: [number | boolean, string];
  role: Role;
}

const user1: User = {
  name: "Julien",
  attributes: [false, "author"],
  role: Role.ADMIN,
};

if (user1.role === Role.ADMIN) {
  console.log("Connexion spéciale");
}
