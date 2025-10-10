import React, { useState } from "react";
import axios from "axios";
import Card from "../components/Card";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  function onSearch(strSearch) {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + strSearch)
      .then((res) => {
        setRecipes(res.data.meals);
      });
  }

  return (
    <div className="header">
      <h1>React Cook</h1>
      <input
        type="text"
        placeholder="Tapez le nom d'un aliment"
        onChange={(e) => onSearch(e.target.value)}
      />
      <div className="recipe-container">
        <ul className="recipe">
          {recipes &&
            recipes
              .slice(0, 24)
              .map((recipe) => <Card key={recipe.idMeal} recipe={recipe} />)}
        </ul>
      </div>
    </div>
  );
};

export default Home;
