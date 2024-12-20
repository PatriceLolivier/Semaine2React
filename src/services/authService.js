import axios from "axios";

const API_URL = "https://backend-node-9ioh.onrender.com"
// const API_URL = "http://localhost:3002"

export const authService = {
    login: async (email, password) => {
        try {
            const response = await axios.post(`${API_URL}/login`, {
                email,
                password
            });
            const token = response.data;
            localStorage.setItem('token', token);
            return true;
        } catch (error) {
            console.error("Erreur de connexion:", error);
            throw error;
        }
    },

    logout: () => {
        localStorage.removeItem('token');
    }
} 