export const getPopularMovies = async () => {
    const res = await fetch(`https://www.omdbapi.com/?s=avengers&apikey=3c1c65fe`);
    const json = await res.json();
    return json.Search || [];
};

export const searchMovie = async (query) => {
    const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=3c1c65fe`);
    const json = await res.json();
    return json.Search || [];
};
