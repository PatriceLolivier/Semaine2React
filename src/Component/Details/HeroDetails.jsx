import PlayerVideo from "./PlayerVideo";

export default function HeroDetails({ filmData, videoKey }) {
  return (
    <div className="container mx-auto p-4">
      <div className="w-full min-h-[500px] bg-gray-900 rounded-lg shadow-lg flex flex-col md:flex-row">
        <div className="w-full md:w-1/3">
          <img
            className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
            src={`https://image.tmdb.org/t/p/w500${filmData.poster_path}`}
            alt={filmData.title}
          />
        </div>
        <div className="w-full md:w-2/3 p-4 md:p-6 flex flex-col gap-3 md:gap-5 text-white">
          <h1 className="text-2xl md:text-3xl font-bold">{filmData.title}</h1>
          <p className="text-base md:text-lg">{filmData.overview}</p>
          <div className="mt-2 md:mt-4">
            <p className="mb-1">Date de sortie : {filmData.release_date}</p>
            <p>Note moyenne : {filmData.vote_average}/10</p>
          </div>
          {videoKey && (
            <div className="mt-2 w-full">
              <PlayerVideo videoKey={videoKey} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
