export default function MovieCard({ movie, onAddFavorite }) {

    return (
        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition transform duration-300">
            <div className="relative">
                <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="w-full h-60 object-cover"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 flex items-center justify-center transition">
                    <button
                        onClick={() => onAddFavorite(movie)}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700"
                    >
                       🤍
                    </button>
                </div>
            </div>

            <div className="p-4 text-white">
                <h3 className="text-lg font-semibold">{movie.Title}</h3>
                <p className="text-gray-400">{movie.Year}</p>
            </div>
        </div>
    );
}
