import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [rangeValue, setRangeValue] = useState([36]);
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const [selectedRadio, setSelectedRadio] = useState([""]);
  //Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,continents,translations"
      )
      .then((res) => setCountries(res.data));
  }, []);

  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="255"
          defaultValue={rangeValue}
          onChange={(e) => {
            setRangeValue(e.target.value);
          }}
        />
        {radios.map((continent) => (
          <li>
            <input
              type="radio"
              id={continent}
              name="contientRadio"
              checked={continent === selectedRadio}
              onChange={(e) => {
                setSelectedRadio(e.target.id);
              }}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      {selectedRadio !== "" && (
        <button
          onClick={() => {
            setSelectedRadio("");
          }}
        >
          Annuler la recherche
        </button>
      )}

      <ul>
        {countries
          .filter((country) => country.continents[0].includes(selectedRadio))
          .sort((a, b) =>
            a.translations.fra.common.localeCompare(b.translations.fra.common)
          )
          .slice(0, rangeValue)

          .map((country, index) => (
            <Card key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
