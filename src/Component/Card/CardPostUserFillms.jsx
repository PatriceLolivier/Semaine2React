import { useAuth } from "../../context/AuthContext";

const CardPostUserFillms = ({ usersFilmsData }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <div>Vous devez être connecté pour voir les posts des utilisateurs !</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-4">
      {usersFilmsData.map((film, index) => (
        <div
          key={film.id || index}
          className="p-4 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="space-y-2">
            <h3 className="font-semibold text-lg border-b pb-2 mb-2">
              Informations du post
            </h3>
            <p className="text-gray-800">
              <span className="font-medium">Titre :</span> {film.title}
            </p>
            <p className="text-gray-800">
              <span className="font-medium">Note :</span> {film.rating}
            </p>
            <p className="text-gray-800">
              <span className="font-medium">Genre :</span> {film.genre}
            </p>
            <div className="mt-4 pt-2 border-t">
              <p className="text-gray-800">
                <span className="font-medium">Utilisateur :</span>{" "}
                {film.userId.name}
              </p>
              <p className="text-gray-800">
                <span className="font-medium">Email :</span> {film.userId.email}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardPostUserFillms;
