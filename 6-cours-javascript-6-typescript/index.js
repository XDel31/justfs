//Variables
let nMonNombre;
let strMachaine;
let anyNumOrString;
//Tableaux
let tabNumber;
let tab = ["123", "456"];
let zidane = {
    id: 0,
    name: "Zidane",
};
//les classes
class Singer {
    constructor(id, name, alive) {
        this.alive = true;
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
function sayMyName(name) {
    console.log("Bonjour " + name);
}
sayMyName("Bob");
sayMyName();
function ageDuCapitaine(age, size) {
    if (size) {
        return ("La taille du capitaine est de " +
            size +
            "cm et il est agé de " +
            age +
            "ans");
    }
    else {
        return "Le capitaine est agé de " + age + "ans";
    }
}
console.log(ageDuCapitaine(16, 185));
// Tuple : un Tuple est un tableau dont le nombre d'éléments est fixe.
// Chaque élément du Tuple peut avoir un type différent.
// Le Tuple est en fait une sorte de mini-array où vous connaissez le nombre d'éléments et leur type à l'avance.
let author;
author = ["Margaret Mitchell", 1900];
//Enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["PREMIUM"] = 1] = "PREMIUM";
    Role[Role["BASIC"] = 2] = "BASIC";
})(Role || (Role = {}));
console.log(Role.ADMIN);
const user1 = {
    name: "Julien",
    attributes: [false, "author"],
    role: Role.ADMIN,
};
if (user1.role === Role.ADMIN) {
    console.log("Connexion spéciale");
}
export {};
//# sourceMappingURL=index.js.map