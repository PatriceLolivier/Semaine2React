import axios from "axios";

const API_URL = "http://localhost:3002"

export const apiFilmsData = {
    getUsersFilms: async () => {
        try{
            const response = await axios.get(`${API_URL}/usersfilms`)
            console.log(response.data)
            return response.data
        } catch (error) {
            console.error("Erreur lors de la récupération des films :", error)
            return []
        }
    }
}