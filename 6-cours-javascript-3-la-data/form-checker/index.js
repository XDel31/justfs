let pseudo, email, password, confirmP;

const form = document.querySelector("form");
const progressBar = document.getElementById("progress-bar");
const inputs = document.querySelectorAll(
  'input[type="text"],input[type="password"]'
);

function errorDisplay(tag, message) {
  errorDisplay(tag, message, false);
}

function errorDisplay(tag, message, valid) {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  if (valid) {
    container.classList.remove("error");
  } else {
    container.classList.add("error");
  }
  span.textContent = message;
}

function pseudoChecker(tag, value) {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay(tag, "Le pseudo doit faire entre 3 et 20 caractères");
    pseudo = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(tag, "Le pseudo contentient un caractère interdit");
    pseudo = null;
  } else {
    errorDisplay(tag, "", true);
    pseudo = value;
  }
}

function emailChecker(tag, value) {
  if (value.length > 0 && !value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/)) {
    errorDisplay(tag, "Email incorrect");
    email = null;
  } else {
    errorDisplay(tag, "", true);
    email = value;
  }
}

function passwordChecker(tag, value) {
  progressBar.classList.remove("progressRed", "progressGreen", "progressBlue");

  if (value.length === 0) {
    errorDisplay(tag, "", true);
    return;
  }

  if (
    !value.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    )
  ) {
    progressBar.classList.add("progressRed");
    errorDisplay(
      tag,
      "Minimim de 8 caractères, une majuscule, un chiffre et un caractère spécial"
    );
    password = null;
  } else if (value.length < 12) {
    progressBar.classList.add("progressBlue");
    errorDisplay(tag, "", true);
    password = value;
  } else {
    progressBar.classList.add("progressGreen");
    errorDisplay(tag, "", true);
    password = value;
  }

  if (confirmP) confirmChecker("confirmP", confirmP.value);
}

function confirmChecker(tag, value) {
  const passwordValue = document.getElementById("password").value;

  if (passwordValue.length > 0 && value.length > 0 && passwordValue !== value) {
    errorDisplay(tag, "Les mots de passe ne correspondent pas");
    confirmP = null;
  } else {
    errorDisplay(tag, "", true);
    confirmP = value;
  }
}

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    console.log(e.target.id);
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.id, e.target.value);
        break;

      case "email":
        emailChecker(e.target.id, e.target.value);
        break;

      case "password":
        passwordChecker(e.target.id, e.target.value);
        break;

      case "confirmP":
        console.log(e.target.id);
        console.log(e.target.value);

        confirmChecker(e.target.id, e.target.value);
        break;

      default:
        break;
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (pseudo && email && password && confirmP) {
    const data = {
      pseudo: pseudo,
      email: email,
      password: password,
    };
    //Simulation du post
    console.log(data);
    alert("Inscription validée");

    inputs.forEach((input) => (input.value = ""));

    progressBar.classList.remove(
      "progressRed",
      "progressGreen",
      "progressBlue"
    );
  } else {
    alert("Veuillez remplir correctement les informations");
  }
});
