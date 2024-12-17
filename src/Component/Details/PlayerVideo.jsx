import ReactPlayer from "react-player";

export default function PlayerVideo({ videoKey }) {
  if (!videoKey) return null;

  return (
    <div className="flex justify-center w-full aspect-video rounded-lg overflow-hidden">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoKey}`}
        width="50%"
        height="50%"
        controls={true}
        playing={false}
        config={{
          youtube: {
            playerVars: {
              showinfo: 1,
              origin: window.location.origin,
            },
          },
        }}
      />
    </div>
  );
}
