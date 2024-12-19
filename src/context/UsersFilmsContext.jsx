import { useState, createContext } from "react";

export const UsersFilmsContext = createContext(null)

export const UsersFilmsController = ({ children }) => {
    const [usersFilmsData, setUsersFilmsData] = useState([])

    const value = {
        usersFilmsData,
        setUsersFilmsData
    }

    return (
        <UsersFilmsContext.Provider value={value}>
            {children}
        </UsersFilmsContext.Provider>
    )
}