import "./MovieCard.css"; // Import CSS file

export const MovieCard = () => {
  // Hardcoded Movie Data
  const movie = {
    title: "Inception",
    poster: "https://m.media-amazon.com/images/I/51oDujvFafL._AC_UF894,1000_QL80_.jpg",
    year: "2010",
    rating: "8.8",
  };

  return (
    <div className="movie-card">
      <img className="movie-poster" src={movie.poster} alt={movie.title} />
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-year">{movie.year}</p>
        <p className="movie-rating">⭐ {movie.rating}</p>
      </div>
    </div>
  );
};
