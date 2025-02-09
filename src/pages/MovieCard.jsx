import "./MovieCard.css"

export const MovieCard = ({ curMovie }) => {
  return (
      <div className="card">
          <img 
              src={curMovie.Poster} 
              alt={curMovie.Title} 
              style={{ width: "100%", height: "60%", objectFit: "cover" }} 
          />
          <h2>{curMovie.Title}</h2>
          <p>{curMovie.Year}</p>
      </div>
  );
};
