import React, { useState, useRef, useEffect } from "react";
import { Play } from "lucide-react";

const EASING_OPTIONS = ["linear", "ease", "ease-in", "ease-out", "ease-in-out"];
const DURATION_OPTIONS = ["0.5s", "1s", "1.5s", "2s"];

function AnimationControls({
  label,
  easing,
  duration,
  onEasingChange,
  onDurationChange,
}) {
  return (
    <div className="">
      <h3 className="">{label}</h3>
      <div className="flex gap-4">
        <div className="space-y-2">
          <label className="block text-sm">Easing</label>
          <select
            value={easing}
            onChange={(e) => onEasingChange(e.target.value)}
            className="block bg-[var(--ifm-background-color-subtle)] w-full rounded-md border-[var(--ifm-toc-border-color)] p-2"
          >
            {EASING_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label className="block text-sm">Duration</label>
          <select
            value={duration}
            onChange={(e) => onDurationChange(e.target.value)}
            className="block bg-[var(--ifm-background-color-subtle)] rounded-md w-full border-[var(--ifm-toc-border-color)] p-2"
          >
            {DURATION_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

function Motion() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [direction, setDirection] = useState("forward");
  const blockRef = useRef(null);

  const [forwardConfig, setForwardConfig] = useState({
    easing: "ease-in-out",
    duration: "1s",
  });

  const [backwardConfig, setBackwardConfig] = useState({
    easing: "ease-in",
    duration: "1s",
  });

  useEffect(() => {
    const block = blockRef.current;
    if (!block) return;

    const handleAnimationEnd = () => {
      setDirection((prev) => (prev === "forward" ? "backward" : "forward"));
      if (direction === "backward") {
        setIsPlaying(false);
        setDirection("forward");
      }
    };

    block.addEventListener("animationend", handleAnimationEnd);
    return () => block.removeEventListener("animationend", handleAnimationEnd);
  }, [direction]);

  const handlePlay = () => {
    if (!isPlaying) {
      setDirection("forward");
      setIsPlaying(true);
    }
  };

  const currentConfig =
    direction === "forward" ? forwardConfig : backwardConfig;

  return (
    <div className="space-y-8 w-full max-w-3xl">
      <div className="">
        <AnimationControls
          label="Animate In"
          easing={forwardConfig.easing}
          duration={forwardConfig.duration}
          onEasingChange={(easing) =>
            setForwardConfig((prev) => ({ ...prev, easing }))
          }
          onDurationChange={(duration) =>
            setForwardConfig((prev) => ({ ...prev, duration }))
          }
        />

        <AnimationControls
          label="Animate Out"
          easing={backwardConfig.easing}
          duration={backwardConfig.duration}
          onEasingChange={(easing) =>
            setBackwardConfig((prev) => ({ ...prev, easing }))
          }
          onDurationChange={(duration) =>
            setBackwardConfig((prev) => ({ ...prev, duration }))
          }
        />
      </div>

      <div className="overflow-hidden relative h-24 bg-[var(--ifm-background-color-subtle)] rounded-lg">
        <div
          ref={blockRef}
          className={`absolute left-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-lg shadow-lg transition-colors
            ${
              isPlaying
                ? direction === "forward"
                  ? "animate-move-forward"
                  : "animate-move-backward"
                : "left-4"
            }`}
          style={{
            animationTimingFunction: currentConfig.easing,
            animationDuration: currentConfig.duration,
            animationFillMode: "forwards",
          }}
        />
      </div>

      <div className="flex justify-center">
        <button
          onClick={handlePlay}
          disabled={isPlaying}
          className={`inline-flex items-center px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
            ${
              isPlaying
                ? "bg-gray-400 cursor-not-allowed"
                : "text-white bg-blue-600 hover:bg-blue-700"
            }`}
        >
          <Play className="w-5 h-5" />
          <span className="ml-2">Play</span>
        </button>
      </div>
    </div>
  );
}

export default Motion;
