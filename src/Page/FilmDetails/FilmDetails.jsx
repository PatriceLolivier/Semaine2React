import { useEffect, useState } from "react";
import HeroDetails from "../../Component/Details/HeroDetails";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function FilmDetails() {
    const [detailFilm, setDetailFilm] = useState(null);
    const [videoKey, setVideoKey] = useState(null);
    const [token] = useState(import.meta.env.VITE_BEARER_TOKEN);
    const { id } = useParams();
    
    const options = {
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    }

    const URL_ID = `https://api.themoviedb.org/3/movie/${id}`;
    const URL_VIDEO = `https://api.themoviedb.org/3/movie/${id}/videos`;

    const fetchFilmsById = async () => {
        try {
            const [movieResponse, videoResponse] = await Promise.all([
                axios.get(URL_ID, options),
                axios.get(URL_VIDEO, options)
            ]);
            
            setDetailFilm(movieResponse.data);
            
            const trailer = videoResponse.data.results.find(
                video => video.type === "Trailer" && video.official === true
            );
            
            const teaser = videoResponse.data.results.find(
                video => video.type === "Teaser" && video.official === true
            );
            
            if (trailer) {
                setVideoKey(trailer.key);
                console.log("Bande-annonce trouvée:", trailer);
            } else if (teaser) {
                setVideoKey(teaser.key);
                console.log("Teaser trouvé:", teaser);
            } else {
                console.log("Aucune bande-annonce ou teaser trouvé");
            }
        } catch(error) {
            console.log(error, "error")
        }
    }

    useEffect(() => {
        fetchFilmsById()
    }, [id])

    return(
        <div>
            {detailFilm && <HeroDetails filmData={detailFilm} videoKey={videoKey} />}
        </div>
    )
}