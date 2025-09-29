const target = document.getElementById("target");

let array = ["développeur", "photographe", "créatif"];
let wordIndex = 0;
let letterIndex = 0;

const fCreateLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.textContent = array[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 2800);
};

const fLoop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      fLoop();
    } else if (letterIndex < array[wordIndex].length) {
      fCreateLetter();
      letterIndex++;
      fLoop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        fLoop();
      }, 2800);
    }
  }, 100);
};

fLoop();
