import { useEffect, useState } from "react";
import axios from "axios";
import MovieDetail from "./MovieDetail";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [isOrderAsc, setIsOrderAsc] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https:api.themoviedb.org/3/genre/movie/list?language=fr&api_key=ed82f4c18f2964e75117c2dc65e2161d"
      )
      .then((res) => setGenres(res.data.genres));
  }, []);

  function submitForm(e) {
    e.preventDefault();
    loadMovies();
  }

  function loadMovies() {
    const inputSearch = document.getElementById("iptSearch").value;

    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=" +
          inputSearch +
          "&language=fr-FR"
      )
      .then((res) => setMovies(res.data.results));
  }

  return (
    <div className="movies-container">
      <div className="search-container">
        <form id="searchForm" action="submit" onSubmit={(e) => submitForm(e)}>
          <input
            type="text"
            id="iptSearch"
            name="iptSearch"
            placeholder="Entrez le titre d'un film"
          />
          <button id="btnSearch" onClick={() => loadMovies()}>
            Rechercher
          </button>
        </form>
      </div>
      <div className="sort-container">
        <button id="goodToBad" onClick={() => setIsOrderAsc(true)}>
          Top ↑
        </button>
        <button id="badToGood" onClick={() => setIsOrderAsc(false)}>
          Flop ↓
        </button>
      </div>
      <div className="movies-detail">
        {movies
          .sort((a, b) =>
            isOrderAsc
              ? b.vote_average - a.vote_average
              : a.vote_average - b.vote_average
          )
          .map((movie) => (
            <MovieDetail
              key={movie.id}
              parent="movie"
              movie={movie}
              genres={genres}
              onMovieRemoved=""
            />
          ))}
      </div>
    </div>
  );
};

export default Movies;
