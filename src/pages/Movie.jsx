import { useLoaderData } from "react-router-dom";
import { MovieCard } from "./MovieCard";

export const Movie = () => {
    const moviesData = useLoaderData();

    return (
        <section>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                {moviesData.Search.map((curMovie) => (
                    <div key={curMovie.imdbID} style={{ width: "calc(25% - 16px)" }}>
                        <MovieCard curMovie={curMovie} />
                    </div>
                ))}
            </div>
        </section>
    );
};
