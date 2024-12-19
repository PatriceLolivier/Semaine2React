import { useContext, useEffect } from "react";
import { UsersFilmsContext } from "../../context/UsersFilmsContext";
import { apiFilmsData } from "../../services/apiFilmsData";
import UserFilmsPost from "../../Component/UsersFilmsPost/UserFilmsPost";

const UsersFilms = () => {
    const { usersFilmsData, setUsersFilmsData } = useContext(UsersFilmsContext)

    useEffect(() => {
        const fetchUsersFilms = async () => {
            const response = await apiFilmsData.getUsersFilms()
            setUsersFilmsData(response)
        }
        fetchUsersFilms()
    }, [setUsersFilmsData])

    return (
        <div>
            <UserFilmsPost usersFilmsData={usersFilmsData} />
        </div>
    )
}

export default UsersFilms
