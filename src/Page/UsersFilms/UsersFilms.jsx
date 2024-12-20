import { useContext, useEffect } from "react";
import { UsersFilmsContext } from "../../context/UsersFilmsContext";
import { apiFilmsData } from "../../services/apiFilmsData";
import UserFilmsPost from "../../Component/UsersFilmsPost/UserFilmsPost";
import { useAuth } from "../../context/AuthContext";

const UsersFilms = () => {
    const { usersFilmsData, setUsersFilmsData } = useContext(UsersFilmsContext);
    const { isLoggedIn } = useAuth();

    useEffect(() => {
        const fetchUsersFilms = async () => {
            const response = await apiFilmsData.getUsersFilms();
            setUsersFilmsData(response);
        };
        
        if (isLoggedIn) {
            fetchUsersFilms();
        }
    }, [setUsersFilmsData, isLoggedIn]);

    return (
        <div>
            <UserFilmsPost usersFilmsData={usersFilmsData} />
        </div>
    );
};

export default UsersFilms;
