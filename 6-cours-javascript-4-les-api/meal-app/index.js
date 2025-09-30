const form = document.querySelector("form");
let meals = [];

const getListIngredient = (meal) => {
  let list = "";

  for (i = 1; i < 21; i++) {
    if (
      meal[`strIngredient${i}`] !== "" &&
      meal[`strIngredient${i}`] !== null
    ) {
      list +=
        "<li>" +
        meal[`strIngredient${i}`] +
        " - " +
        meal[`strMeasure${i}`] +
        "</li>";
    }
  }
  return list;
};

const fetchMeals = async () => {
  let strSearch = search.value;

  await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=" + strSearch
  )
    .then((res) => res.json())
    .then((data) => {
      meals = data.meals;
      console.log(data);
    });
};

const listRecipe = () => {
  if (meals.length == 0) {
    result.innerHTML = "<h2>Aucun résultat</h2>";
  } else {
    //On limite volontairement à 12 éléments
    meals.length = 12;

    meals.forEach((meal) => {
      result.innerHTML += `
    <li>
    <h2>${meal.strMeal}</h2>
    <p>${meal.strArea}</p>
    <img src="${meal.strMealThumb}" alt=${meal.strMeal}></img>
    <ul>${getListIngredient(meal)}<ul>
    </li>`;
    });
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchMeals().then(() => listRecipe());
});
