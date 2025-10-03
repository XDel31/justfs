let quizzProgression = 0;
let quizzScore = 0;

class Question {
  constructor(strQuestion, strChoixMultiple, strReponse) {
    this.question = strQuestion;
    this.choixMultiple = strChoixMultiple;
    this.reponse = strReponse;
  }
}

function quizzTermine() {
  document.body.innerHTML = `<h1>quiz terminé !</h1>
  <h3>Votre score est de ${quizzScore} / ${questions.length}</h3>
  `;
}

function prochaineQuestion() {
  if (quizzProgression + 1 > questions.length) {
    quizzTermine();
    return;
  }

  question.textContent = questions[quizzProgression].question;

  for (i = 0; i < questions[quizzProgression].choixMultiple.length; i++) {
    const btnChoix = quiz.querySelector("#choice" + i);
    btnChoix.textContent = questions[quizzProgression].choixMultiple[i];
  }
  progress.textContent = `Question ${quizzProgression + 1} sur ${
    questions.length
  }`;
  quizzProgression++;
}

const questions = [
  new Question(
    "Quelle méthode Javascript permet de filtrer les éléments d'un tableau",
    ["indexOf()", "map()", "filter()", "reduce()"],
    "filter()"
  ),
  new Question(
    "Quelle méthode Javascript permet de vérifier si un élément figure dans un tableau",
    ["isNaN()", "includes()", "findIndex()", "isOdd()"],
    "includes()"
  ),
  new Question(
    "Quelle méthode transforme du JSON en un objet Javascript ?",
    ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toJS"],
    "JSON.parse()"
  ),
  new Question(
    "Quel objet Javascript permet d'arrondir à l'entier le plus proche",
    ["Math.ceil()", "Math.floor()", "Math.round()", "Math.random()"],
    "Math.round()"
  ),
  new Question(
    "Quel est la couleur du cheval noir d'Henry IV",
    ["Noir", "Marron", "Blanc", "Gris"],
    "Noir"
  ),
];

window.addEventListener("load", () => {
  prochaineQuestion();
});

document.querySelectorAll(".btn").forEach((btnchoix) => {
  btnchoix.addEventListener("click", () => {
    const pos = btnchoix.id.slice(btnchoix.id.length - 1);
    const response = document.querySelector("#choice" + pos).textContent;

    if (response === questions[quizzProgression - 1].reponse) {
      quizzScore++;
    }
    prochaineQuestion();
  });
});
