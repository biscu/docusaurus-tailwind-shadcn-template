import Howler from "react-howler";
import { useState } from "react";
import { Play, Pause } from "lucide-react";

const Audio = ({ src }) => {
  const [playing, setPlaying] = useState(false);
  const [howlerRef, setHowlerRef] = useState(null);

  const toggleAudio = () => {
    if (playing) {
      howlerRef.seek(0);
      setPlaying(false);
    } else {
      setPlaying(true);
    }
  };

  const handleEnd = () => {
    setPlaying(false);
  };

  return (
    <div className="flex justify-start items-center p-4 rounded-full bg-[var(--ifm-background-color-subtle)]">
      <Howler
        src={src}
        playing={playing}
        onEnd={handleEnd}
        ref={(ref) => setHowlerRef(ref)}
      />
      <button
        onClick={toggleAudio}
        className="flex flex-row items-center px-4 py-2 border-none rounded-full cursor-pointer text-neutral-900 bg-neutral-100"
      >
        {playing ? <Pause className="mr-2" /> : <Play className="mr-2" />}
        {playing ? "Stop" : "Play"}
      </button>
    </div>
  );
};

export default Audio;
