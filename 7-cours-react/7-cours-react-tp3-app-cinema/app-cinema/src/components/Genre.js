const Genre = ({ genreIds, genres }) => {
  if (!genreIds || !genres || genres.length === 0) {
    return null;
  }

  // Filtre les genres dont l'id est dans genreIds
  const movieGenres = genres.filter((genre) => genreIds.includes(genre.id));

  if (movieGenres.length === 0) {
    return <div className="genre-container">Aucun genre trouvé</div>;
  }

  return (
    <div className="genre-container">
      {movieGenres.map((genre) => (
        <span key={genre.id}>{genre.name}</span>
      ))}
    </div>
  );
};

export default Genre;
