import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";
import Link from "@docusaurus/Link";

const Overview = ({ component, coverLight, coverDark }) => {
  return (
    <Link to={`${component}`} className="no-underline">
      <div className="flex flex-col gap-3">
        <ThemedImage
          alt="Docusaurus themed image"
          className="rounded-xl"
          sources={{
            light: useBaseUrl(coverLight),
            dark: useBaseUrl(coverDark),
          }}
        />
        <h2 className="capitalize">{component}</h2>
      </div>
    </Link>
  );
};

export default Overview;
