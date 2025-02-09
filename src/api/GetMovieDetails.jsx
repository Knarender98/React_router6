
export const getMovieDetails = async ({params}) => {

    console.log(params)
    const id = params.movieID;

    try {
        const apiKey = import.meta.env.VITE_API_KEY; // Get API Key from env
        const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching movie data:", error);
    }
};
