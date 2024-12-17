import { useState, useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MovieContext } from "../../context/MovieContent";
import { movieService } from "../../services/movieService";

export default function Search() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [search, setSearch] = useState(searchParams.get("query") || "");
    const { setFilms } = useContext(MovieContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Token:", import.meta.env.VITE_API_TOKEN);
        if (search.trim() === "") {
            navigate("/");
            const results = await movieService.getNowPlaying();
            setFilms(results);
        } else {
            navigate(`?query=${search}`);
            const results = await movieService.searchMovies(search);
            setFilms(results);
        }
    }

    return (
        <form className="flex justify-center items-center gap-2" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Rechercher un film" 
                className="p-2 border border-red-300 rounded-md"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="bg-red-500 text-white p-2 rounded-md">
                Rechercher
            </button>
        </form>
    )
}