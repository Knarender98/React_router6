export const getMoviesData = async () => {
    try {
        const apiKey = import.meta.env.VITE_API_KEY; // Get API Key from env
        const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=titanic&page=1`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching movie data:", error);
    }
};
