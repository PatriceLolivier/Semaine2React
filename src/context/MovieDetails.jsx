import { useState, createContext } from "react";

export const MovieDetailsContext = createContext(null);

export const MovieDetails = ({ children }) => {
    const [detailFilm, setDetailFilm] = useState(null);
    const [videoKey, setVideoKey] = useState(null);
    
    const value = {
        detailFilm,
        setDetailFilm,
        videoKey,
        setVideoKey
    };

    return (
        <MovieDetailsContext.Provider value={value}>
            {children}
        </MovieDetailsContext.Provider>
    );
};