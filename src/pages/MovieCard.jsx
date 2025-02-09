import { NavLink } from "react-router-dom";
import "./MovieCard.css"

export const MovieCard = ({ curMovie }) => {
  return (
      <div className="card">
          <img 
              src={curMovie.Poster} 
              alt={curMovie.Title} 
              style={{ width: "90%", height: "60%", objectFit: "fill" }} 
          />
          <h2>{curMovie.Title}</h2>
          <p>{curMovie.Year}</p>

          <NavLink to={`/movie/${curMovie.imdbID}`}>
            <button className="ticket_but-btn">Watch Now</button>
          </NavLink>
      </div>
  );
};
