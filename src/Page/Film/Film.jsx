import Card from "../../Component/Card/Card";
import Search from "../../Component/Search/Search";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

export default function Film() {
    const [searchParams] = useSearchParams();
    const [films, setFilms] = useState([]);
    const [token] = useState(import.meta.env.VITE_BEARER_TOKEN);
    
    const url = "https://api.themoviedb.org/3/movie/now_playing?language=fr-FR";
    const getSearchUrl = (query) => `https://api.themoviedb.org/3/search/movie?query=${query}&language=fr-FR`;
    const options = {
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    }

    const fetchFilm = async () => {
        try {
            const response = await axios.get(url, options);
            setFilms(response.data.results);
        } catch (error) {
            console.error("Erreur lors de la récupération des films :", error);
        }
    }

    const searchFilm = async (query) => {
        try {
            const response = await axios.get(getSearchUrl(query), options);
            setFilms(response.data.results);
            console.log(response.data.results, "Response search film");
        } catch (error) {
            console.error("Erreur lors de la récupération des films :", error);
        }
    } 

    useEffect(() => {
        const query = searchParams.get("query");
        if (query) {
            searchFilm(query);
        } else {
            fetchFilm();
        }
    }, []);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Films en cours de diffusion</h1>
            <Search onSearch={searchFilm} />
            <div className="flex flex-wrap -mx-4">
                {films.map((film) => (
                    <Card 
                        key={film.id}
                        title={film.title}
                        overview={film.overview}
                        poster_path={film.poster_path}
                    />
                ))}
            </div>
        </div>
    )
}