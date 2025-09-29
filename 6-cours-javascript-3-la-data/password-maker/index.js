const dataLowercase = "azertyuiopmlkjhgfdsqwxcvbn";
const dataUppercase = dataLowercase.toLocaleUpperCase();
const dataNumber = "0123456789";
const dataSymbol = "$^*ù!:;,&é\"'(-è_çà)";
const passwordOutput = document.getElementById("password-output");

//const generatePassword = () => { bla bla bla}
function generatePassword() {
  const rangeValue = document.getElementById("password-length").value;

  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (number.checked) data.push(...dataNumber);
  if (symbol.checked) data.push(...dataSymbol);

  if (data.length === 0) {
    alert("Veuillez selectionner au moins 1 critère.");
  }

  for (let i = 1; i < rangeValue; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }
  passwordOutput.value = password;

  /*   
  passwordOutput.select();
  document.execCommand("copy");
  */
  // Remplace le code ci-dessus dont execCommand a été déprécié pour des raisons évidentes de sécurité
  navigator.clipboard.writeText(password);

  generateButton.textContent = "Copié !";

  setTimeout(() => {
    generateButton.style.transition = "0.5s";
    generateButton.textContent = "Générer un mot de passe";
  }, 2000);
}

generateButton.addEventListener("click", generatePassword);

passwordOutput.addEventListener("dblclick", () => {
  passwordOutput.select();
});
