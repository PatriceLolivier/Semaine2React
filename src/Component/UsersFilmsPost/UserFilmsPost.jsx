import LoginForm from "../Login/LoginForm";
import { useAuth } from "../../context/AuthContext";
import CardPostUserFillms from "../Card/CardPostUserFillms";

const UserFilmsPost = ({ usersFilmsData }) => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <div className="flex w-full mt-2 justify-center">
      <div className="flex flex-col justify-center items-center w-full max-w-7xl">
        <div className="w-full flex justify-between items-center px-4 mb-6">
          <h1 className="text-2xl font-bold">Users Films</h1>
          {isLoggedIn && (
            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Se déconnecter
            </button>
          )}
        </div>
        <p className="text-sm text-gray-500 mb-6">
          Liste des films choisis par les utilisateurs
        </p>
        
        {!isLoggedIn ? (
          <LoginForm />
        ) : (
          <CardPostUserFillms usersFilmsData={usersFilmsData} />
        )}
      </div>
    </div>
  );
};

export default UserFilmsPost;
