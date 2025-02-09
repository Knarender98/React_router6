import { useLoaderData, useParams } from "react-router-dom"
import "./MovieCard.css"

export const MovieDetails = ()=> {

    // const params = useParams();
    // console.log(params);
    
    const movieData = useLoaderData();
    console.log(movieData)

    return (
        <div className="card">
            <img 
                src={movieData.Poster} 
                alt={movieData.Actors} 
                style={{ width: "90%", height: "60%", objectFit: "fill" }} 
            />
            <h2>{movieData.Plot}</h2>
            <p>{movieData.Rated }</p>
        </div>
    );
}