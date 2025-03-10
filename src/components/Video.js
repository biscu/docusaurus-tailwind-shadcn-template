import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause } from "lucide-react"; 

const Video = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoElement.play();
          setIsPlaying(true); // Set playing state to true when the video starts playing
        } else {
          videoElement.pause();
          setIsPlaying(false); // Set playing state to false when the video is not in view
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5 // Adjust this value as needed
    });

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <div className="flex relative flex-col">
      <video 
        ref={videoRef} 
        src={src} 
        muted
        loop 
        className="w-full max-w-md rounded-md"
      />
        <button 
          onClick={togglePlay} 
          className="absolute bottom-3 left-3 p-3 w-12 h-12 text-white rounded-full border-none transition-all cursor-pointer bg-neutral-950/20 hover:bg-neutral-950/30"
        >
          {isPlaying ? <Pause /> : <Play />}
        </button>
    </div>
  );
};

export default Video;