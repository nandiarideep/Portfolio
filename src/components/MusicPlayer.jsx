import { useState, useRef } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-md rounded-full p-3 flex items-center gap-3 z-50">
      <audio
        ref={audioRef}
        src="/missyou.mp3"
        loop
        onEnded={() => setIsPlaying(false)}
      />
      
      <button
        onClick={togglePlay}
        className="text-white hover:text-blue-400 transition-colors cursor-pointer"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
      
      <Volume2 size={20} className="text-white" />
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={handleVolumeChange}
        className="w-16 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
};

export default MusicPlayer;