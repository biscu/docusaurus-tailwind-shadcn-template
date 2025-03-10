import React from "react";
import { getContrastTextColor } from "../../utils/contrastColor";

const ColorCard = ({ color, name, textColor }) => (
  <div
    className="flex flex-col gap-0 justify-center items-center p-3 w-full max-h-24"
    style={{ backgroundColor: color }}
  >
    <span style={{ color: textColor }}>{name}</span>
  </div>
);

const ColorRow = ({ title, colors }) => (
  <div className="flex flex-row justify-between items-start">
    <h3 className="m-0 text-xl min-w-32">{title}</h3>
    <div className="flex flex-row gap-0 w-full">
      {Object.entries(colors).map(([name, color]) => (
        <ColorCard
          key={name}
          color={color}
          name={name}
          textColor={getContrastTextColor(color)}
        />
      ))}
    </div>
  </div>
);

const ColorTokens = () => {
  const neutralColors = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
  };

  const blueColors = {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
  };

  const redColors = {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
  };

  const greenColors = {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
  };

  return (
    <div className="flex flex-col gap-8">
      <ColorRow title="Neutral" colors={neutralColors} />
      <ColorRow title="Blue" colors={blueColors} />
      <ColorRow title="Red" colors={redColors} />
      <ColorRow title="Green" colors={greenColors} />
    </div>
  );
};

export default ColorTokens;
