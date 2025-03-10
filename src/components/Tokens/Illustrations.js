import { useState, useEffect } from "react";
import { SearchX } from "lucide-react";
import SearchBar from "../SearchBar/SearchBar";
import Header from "@site/static/img/header.svg";
import Header2 from "@site/static/img/header2.svg";

const icons = [
  { id: 1, name: "globe", svg: <Header /> },
  { id: 2, name: "globe2", svg: <Header2 /> },
];

const IllustrationItem = ({ name, className }) => {
  const selectedPath = icons.find(
    (illustration) => illustration.name === name
  ).svg;
  return <>{selectedPath}</>;
};

const Illustrations = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchParam = params.get("search");
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (searchQuery) {
      params.set("search", searchQuery);
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?${params}`
      );
    } else {
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, [searchQuery]);

  const filteredIcons = icons.filter((illustration) =>
    illustration.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-6">
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholder="Search illustrations..."
      />
      {filteredIcons.length === 0 && (
        <div className="flex flex-col gap-3 justify-center items-center h-96">
          <SearchX />
          <div>No icons found for '{searchQuery}'</div>
        </div>
      )}
      {filteredIcons.length > 0 && (
        <div className="grid grid-cols-2 gap-4">
          {filteredIcons.map((icon) => (
            <div key={icon.id} className="flex flex-col gap-2 items-center">
              <div className="flex justify-center items-center p-6 rounded bg-[var(--ifm-background-color-subtle)] w-full">
                <IllustrationItem name={icon.name} />
              </div>
              <p>{icon.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Illustrations;
