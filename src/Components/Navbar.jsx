import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-black text-white px-6 py-4 flex items-center justify-between shadow-lg">
      
      <div className="text-2xl font-bold">
        <Link to="/">Movie App</Link>
      </div>

      <div className="flex items-center gap-6">
        <Link to="/" className="hover:text-red-400 transition">Home</Link>
        <Link to="/favorites" className="hover:text-red-400 transition">Favorites</Link>
      </div>

    </div>
  );
}
