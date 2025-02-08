export const getMoviesData = async()=> {
    try {
        const response  = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=c6e45184");
        const data = response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}