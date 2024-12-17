import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const token = import.meta.env.VITE_API_TOKEN;

const options = {
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`
    }
};

export const movieService = {
    getNowPlaying: async () => {
        try {
            const response = await axios.get(
                `${API_URL}/movie/now_playing?language=fr-FR`,
                options
            );
            return response.data.results;
        } catch (error) {
            console.error("Erreur lors de la récupération des films :", error);
            return [];
        }
    },

    searchMovies: async (query) => {
        try {
            const response = await axios.get(
                `${API_URL}/search/movie?query=${query}&language=fr-FR`,
                options
            );
            return response.data.results;
        } catch (error) {
            console.error("Erreur complète:", error.response?.data || error);
            return [];
        }
    },

    getMovieDetails: async (id) => {
        try {
            const [movieResponse, videoResponse] = await Promise.all([
                axios.get(`${API_URL}/movie/${id}?language=fr-FR`, options),
                axios.get(`${API_URL}/movie/${id}/videos?language=fr-FR`, options)
            ]);
            
            const trailer = videoResponse.data.results.find(
                video => video.type === "Trailer" && video.official === true
            );
            
            const teaser = videoResponse.data.results.find(
                video => video.type === "Teaser" && video.official === true
            );
            
            return {
                movieDetails: movieResponse.data,
                videoKey: trailer?.key || teaser?.key || null
            };
        } catch(error) {
            console.error("Erreur lors de la récupération des détails:", error);
            return null;
        }
    }
};