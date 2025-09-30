//https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags

// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.

// 3 - Passer les données à une variable

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
//coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
let countries;
let setOrder = "A";

const fetchCountries = async () => {
  await fetch(
    "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,translations"
  )
    .then((res) => res.json())
    .then((data) => (countries = data));
  console.log(countries);
};

const countriesDisplay = () => {
  const countriesContainer = document.getElementById("countries-container");

  countriesContainer.innerHTML = countries
    .filter((country) =>
      country.translations.fra.common
        .toLowerCase()
        .includes(inputSearch.value.toLowerCase())
    )
    .sort((a, b) => {
      switch (setOrder) {
        case "A":
          return a.translations.fra.common.localeCompare(
            b.translations.fra.common
          );
          break;
        case "C":
          return a.population - b.population;
          break;
        case "D":
          return b.population - a.population;
          break;
        default:
          break;
      }
    })
    .slice(0, inputRange.value)
    .map(
      (country) =>
        `
      <div class="card">
      <img src=${country.flags.png} alt=${country.flags.alt}></img>
      <h2>${country.translations.fra.common}</h2><br>
      <h4>${country.capital}</h4><br>
      <p>Population : ${country.population.toLocaleString("fr-FR")}</p>
    </div>
    `
    )
    .join("");
};

inputSearch.addEventListener("input", () => {
  countriesDisplay();
});
inputRange.addEventListener("input", () => {
  rangeValue.textContent = inputRange.value;
  countriesDisplay();
});
minToMax.addEventListener("click", () => {
  setOrder = "C";
  countriesDisplay();
});
maxToMin.addEventListener("click", () => {
  setOrder = "D";
  countriesDisplay();
});
alpha.addEventListener("click", () => {
  setOrder = "A";
  countriesDisplay();
});

fetchCountries().then(() => countriesDisplay());
