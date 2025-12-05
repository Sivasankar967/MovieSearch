import { useEffect, useState } from "react"
import MovieCard from "../Components/Moviecard"
import { searchMovie, getPopularMovies } from "../Services/Api";

export default function Home() {

    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loadMovies = async () => {
            const data = await getPopularMovies();
            setMovies(data);
            setLoading(false);
        };
        loadMovies();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();

        if (search.trim() === "") return;

        setLoading(true);
        const results = await searchMovie(search);
        setMovies(results);
        setLoading(false);
    };

    const addFavorite = (movie) => {
        let favs = JSON.parse(localStorage.getItem("favorites")) || [];
        
        if (!favs.find((m) => m.imdbID === movie.imdbID)) {
            favs.push(movie);
            localStorage.setItem("favorites", JSON.stringify(favs));
            alert("Added to favorites!");
        } else {
            alert("Already in favorites!");
        }
    };

    return (
        <div className="p-6">
            <form onSubmit={handleSearch} className="flex gap-3 mb-8 justify-center">
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-1/2 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600"
                />

                <button type="submit" className="px-6 py-2 bg-red-600 text-white rounded-lg">
                    Search
                </button>
            </form>

            {loading && <p className="text-white">Loading...</p>}
{!loading && movies?.length === 0 && (
    <p className="text-center text-gray-300 text-xl mt-10">
        No results found
    </p>
)}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {movies?.map((movie) => (
                    <MovieCard
                        movie={movie}
                        key={movie.imdbID}
                        onAddFavorite={addFavorite}
                    />
                ))}
            </div>

        </div>
    );
}
