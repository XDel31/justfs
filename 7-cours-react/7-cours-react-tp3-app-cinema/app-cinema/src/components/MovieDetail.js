import { useEffect, useState } from "react";
import Genre from "./Genre";

const MovieDetail = ({ parent, movie, genres, onMovieRemoved }) => {
  const [favoriteMode, setFavoriteMode] = useState(false);
  let [genreIds, setGenreIds] = useState([]);

  useEffect(() => {
    if (parent === "favorites") {
      setFavoriteMode(true);
    } else {
      setFavoriteMode(false);
    }
    // Met à jour genreIds quand `parent` ou `movie` change
    if (parent === "favorites" && movie.genres) {
      const tabTmp = movie.genres.map((genre) => genre.id);
      setGenreIds(tabTmp);
    } else if (movie.genre_ids) {
      setGenreIds(movie.genre_ids);
    }
  }, [parent, movie]);

  function toggleFavorites() {
    let tmdbFavorites = [];
    let strFavorites = "";

    strFavorites = localStorage.getItem("tmdbFavorites");

    if (strFavorites.length > 0) {
      tmdbFavorites = JSON.parse(strFavorites);
    }

    if (favoriteMode) {
      tmdbFavorites = tmdbFavorites.filter(
        (tmdbFavorite) => tmdbFavorite.id !== movie.id
      );

      localStorage.setItem("tmdbFavorites", JSON.stringify(tmdbFavorites));
      onMovieRemoved();
    } else {
      tmdbFavorites.push({ id: movie.id });
      localStorage.setItem("tmdbFavorites", JSON.stringify(tmdbFavorites));
    }
  }

  return (
    <div className="moviedetail-container">
      <img
        src={
          movie.poster_path !== "" && movie.poster_path !== null
            ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
            : "poster.jpg"
        }
        alt={movie.title}
      />
      <h5>{movie.title}</h5>
      <p>Sorti le : {movie.release_date}</p>
      <h5>{Number(movie.vote_average).toFixed(1)}/10⭐</h5>
      <div className="movies-genre">
        <Genre genreIds={genreIds} genres={genres} />
      </div>
      <h5>Synopsis</h5>
      <p className="overview">
        {movie.overview !== "" ? movie.overview : "Aucun résumé"}
      </p>
      <button id="favoris" onClick={() => toggleFavorites()}>
        {favoriteMode ? "Supprimer des favoris" : "Ajouter aux favoris"}
      </button>
    </div>
  );
};

export default MovieDetail;
