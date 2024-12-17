import { Link } from "react-router-dom";

export default function Card({ title, overview, poster_path, id }) {
  return (
    <div className="w-full">
      <Link to={`/film/${id}`}>
        <div className="bg-black rounded-lg border-2 border-red-500 h-full flex flex-col">
            <img 
              className="w-full h-[400px] object-cover rounded-t-lg"
              src={`https://image.tmdb.org/t/p/w500${poster_path}`} 
              alt={title}
            />
            <div className="flex flex-col flex-grow p-4 leading-normal text-white">
                <h2 className="text-xl font-bold mb-2 line-clamp-2">{title}</h2>
                <p className="line-clamp-4">{overview}</p>
            </div>
        </div>
      </Link>
    </div>
  );
}
