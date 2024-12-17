import { useState, createContext } from "react";

export const MovieContext = createContext(null);

export const MovieController = ({ children }) => {
    const [films, setFilms] = useState([]);
    
    const value = {
        films,
        setFilms
    };

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    );
};