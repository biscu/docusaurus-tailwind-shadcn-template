import React from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';

// Add all the images you want to preload here

const Preload = () => {
    return (
        <div className="hidden">
            <img src={useBaseUrl("./img/placeholder_cover_dark.svg")} alt="preload" />
            <img src={useBaseUrl("./img/placeholder_cover_light.svg")} alt="preload" />
            <img src={useBaseUrl("./img/header.svg")} alt="preload" />
            <img src={useBaseUrl("./img/header2.svg")} alt="preload" />
            <img src="https://github.com/biscu.png" alt="preload" />
        </div>
    );
}

export default Preload;