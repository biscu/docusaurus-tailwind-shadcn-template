import React, { useState } from 'react';
import {calcAPCA } from 'apca-w3';

// Updated ColorContrast to accept colorText and colorBg as props
const ColorContrast = ({ colorText = '#000000', colorBg = '#FFFFFF', token1, token2 }) => {
    const [textColor, setTextColor] = useState(colorText);
    const [bgColor, setBgColor] = useState(colorBg);

    const calculateContrast = (colorText, colorBg) => {
        const contrastValue = calcAPCA(colorText, colorBg);
        return contrastValue.toFixed(0); // Limit to 2 decimal places
    };

    const contrastValue = calculateContrast(colorText, colorBg);

    return (
        <>
        <div className="flex overflow-hidden flex-col gap-4 rounded-md border-solid border-slate-200 dark:border-slate-900">
            {/* <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} />
            <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} /> */}
            <div className="p-4" style={{ backgroundColor: colorBg }}>
            <h2 style={{ color: colorText }}>{contrastValue}</h2>
                <span style={{ color: colorText }}>{token1}/{token2}</span>
            </div>
        </div>
        </>
    );
};

export default ColorContrast;
