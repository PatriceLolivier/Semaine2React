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
            console.log("Options complètes:", options);
            const response = await axios.get(
                `${API_URL}/search/movie?query=${(query)}&language=fr-FR`,
                options
            );
            return response.data.results;
        } catch (error) {
            console.error("Erreur complète:", error.response?.data || error);
            return [];
        }
    }
};