export default function Favorites() {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];

    return (
        <div className="p-6 text-white">
            <h1 className="text-2xl mb-4">Your Favorite Movies</h1>

            {favs.length === 0 ? (
                <p>No favorites yet</p>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {favs.map((movie) => (
                        <div key={movie.imdbID} className="bg-gray-900 p-3 rounded">
                            <img src={movie.Poster} className="h-48 w-full object-cover rounded" />
                            <h3 className="text-lg mt-2">{movie.Title}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
