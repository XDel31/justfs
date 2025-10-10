import React, { useEffect } from "react";

const Card = ({ recipe }) => {
  useEffect(() => {
    getIngredients();
  }, []);

  const getIngredients = () => {
    let ingredients = [];

    for (let i = 1; i < 21; i++) {
      if (
        recipe[`strIngredient${i}`] !== "" &&
        recipe[`strIngredient${i}`] !== null
      ) {
        ingredients.push(
          recipe[`strIngredient${i}`] + " - " + recipe[`strMeasure${i}`]
        );
      }
    }
    return ingredients;
  };

  return (
    <div className="card">
      <h3>{recipe.strMeal}</h3>
      <p>Origin : {recipe.strArea}</p>
      <img src={recipe.strMealThumb} alt={"photo " + recipe.strMeal} />
      <p>{recipe.strInstructions}</p>
      <h4>Ingrédients</h4>
      <ul>
        {getIngredients().map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>;
        })}
      </ul>
    </div>
  );
};

export default Card;
