import { useLoaderData } from "react-router-dom"
import { MovieCard } from "./MovieCard";

export const Movie = ()=> {

    const moviesData = useLoaderData();
    console.log(moviesData)

    return <MovieCard />
    
}