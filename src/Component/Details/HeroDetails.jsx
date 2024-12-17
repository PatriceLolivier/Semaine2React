import PlayerVideo from "./PlayerVideo";

export default function HeroDetails({ filmData, videoKey }) {
  return (
    <div className="container mx-auto p-4">
      <div className="w-full h-[500px] bg-gray-900 rounded-lg shadow-lg flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img
            className="w-full h-[500px] object-cover rounded-lg md:rounded-lg"
            src={`https://image.tmdb.org/t/p/w500${filmData.poster_path}`}
            alt={filmData.title}
          />
        </div>
        <div className="md:w-2/3 p-6 flex flex-col gap-5 text-white">
          <h1 className="text-3xl font-bold">{filmData.title}</h1>
          <p className="text-lg">{filmData.overview}</p>
          <div className="mt-4">
            <p>Date de sortie : {filmData.release_date}</p>
            <p>Note moyenne : {filmData.vote_average}/10</p>
          </div>
          {videoKey && (
            <div className="mt-2">
              <PlayerVideo videoKey={videoKey} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
