import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../../Component/Card/Card";
import Search from "../../Component/Search/Search";
import { MovieContext } from "../../context/MovieContent";
import { movieService } from "../../services/movieService";

export default function Film() {
    const { films, setFilms } = useContext(MovieContext);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const loadMovies = async () => {
            const query = searchParams.get("query");
            if (!query) {
                const results = await movieService.getNowPlaying();
                setFilms(results);
            }
        };

        loadMovies();
    }, []);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Films en cours de diffusion</h1>
            <Search />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
                {films?.map((film) => (
                    <Card 
                        key={film.id}
                        id={film.id}
                        title={film.title}
                        overview={film.overview}
                        poster_path={film.poster_path}
                    />
                ))}
            </div>
        </div>
    );
}