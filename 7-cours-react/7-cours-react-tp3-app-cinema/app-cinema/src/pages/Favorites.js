import Navigation from "../components/Navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieDetail from "../components/MovieDetail";

const Favorites = () => {
  let [favoritesMovies, setFavoritesMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https:api.themoviedb.org/3/genre/movie/list?language=fr&api_key=ed82f4c18f2964e75117c2dc65e2161d"
      )
      .then((res) => setGenres(res.data.genres));

    loadMovies();
  }, []);

  async function loadMovies() {
    const ids = JSON.parse(localStorage.getItem("tmdbFavorites")) || [];

    if (ids.length === 0) {
      const moviesDetail = document.getElementById("movies-detail");
      if (moviesDetail) {
        moviesDetail.remove();
      }
      return;
    }

    // Crée un tableau de promesses pour chaque requête
    const promises = ids.map((mid) =>
      axios.get(
        `https://api.themoviedb.org/3/movie/${mid.id}?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR`
      )
    );

    // Attend que toutes les requêtes soient terminées
    const responses = await Promise.all(promises);
    // Met à jour l'état avec les données de toutes les réponses
    setFavoritesMovies(responses.map((res) => res.data));
  }

  return (
    <div className="favorites-container">
      <div className="header-container">
        <div className="favorites-navigation">
          <Navigation />
        </div>
        <div className="title">
          <h1>React Movies</h1>
        </div>
      </div>
      <div className="movies-detail" id="movies-detail">
        {favoritesMovies.length > 0
          ? favoritesMovies
              .sort((a, b) => a.title.localeCompare(b.title))
              .map((movie) => (
                <MovieDetail
                  key={movie.id}
                  parent="favorites"
                  movie={movie}
                  genres={genres}
                  onMovieRemoved={loadMovies}
                />
              ))
          : ""}
      </div>
    </div>
  );
};

export default Favorites;
