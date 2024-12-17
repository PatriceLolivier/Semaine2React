import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "../../services/movieService";
import { MovieDetailsContext } from "../../context/MovieDetails";
import HeroDetails from "../../Component/Details/HeroDetails";

export default function FilmDetails() {
    const { detailFilm, setDetailFilm, videoKey, setVideoKey } = useContext(MovieDetailsContext);
    const { id } = useParams();
    
    useEffect(() => {
        const fetchMovieDetails = async () => {
            const data = await movieService.getMovieDetails(id);
            if (data) {
                setDetailFilm(data.movieDetails);
                setVideoKey(data.videoKey);
            }
        };
        
        fetchMovieDetails();
    }, [id, setDetailFilm, setVideoKey]);

    if (!detailFilm) return <div>Chargement...</div>;

    return (
        <HeroDetails filmData={detailFilm} videoKey={videoKey} />
    );
}