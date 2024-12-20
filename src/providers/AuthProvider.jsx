import { useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { authService } from '../services/authService';

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    const login = async (email, password) => {
        try {
            await authService.login(email, password);
            setIsLoggedIn(true);
            return true;
        } catch (error) {
            console.error("Erreur de connexion:", error);
            throw error;
        }
    };

    const logout = () => {
        authService.logout();
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}; 