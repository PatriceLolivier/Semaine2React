import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Search({ onSearch }) {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [search, setSearch] = useState(searchParams.get("query") || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.trim() === "") {
            navigate("/");
            onSearch("");
        } else {
            navigate(`?query=${search}`);
            onSearch(search);
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