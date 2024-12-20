import axios from "axios";

const API_URL = "https://backend-node-9ioh.onrender.com"
// const API_URL = "http://localhost:3002"

export const apiFilmsData = {
    getUsersFilms: async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${API_URL}/usersfilms`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error("Erreur lors de la récupération des films :", error);
            return [];
        }
    }
}