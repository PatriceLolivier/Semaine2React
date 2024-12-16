export default function Card({ title, overview, poster_path,  }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
        <div className="bg-black rounded-lg border-2 border-red-500 h-full flex flex-col">
            <img 
              className="w-full h-[400px] object-cover rounded-t-lg"
              src={`https://image.tmdb.org/t/p/w500${poster_path}`} 
              alt={title}
            />
            <div className="flex flex-col flex-grow p-4 leading-normal text-white">
                <h2 className="text-xl font-bold mb-2 line-clamp-2">{title}</h2>
                <p className="line-clamp-4">{overview}</p>
                <p></p>
            </div>
        </div>
    </div>
  );
}
