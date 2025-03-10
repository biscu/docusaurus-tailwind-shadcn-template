import { useState, useEffect } from "react";
import { SearchX } from "lucide-react";
import SearchBar from "../SearchBar/SearchBar";
import Globe from "@site/static/img/icons/globe.svg";
// import User from "@site/static/img/icons/user.svg";
// import Cart from "@site/static/img/icons/cart.svg";

const icons = [
  { id: 1, name: "globe", svg: <Globe /> },
  // { id: 2, name: 'cart', svg: <Cart /> },
  // { id: 3, name: 'user', svg: <User /> },
];

const IconItem = ({ name, className, isPrimary }) => {
  const selectedSvg = icons.find((icon) => icon.name === name).svg;
  return (
    <div className={isPrimary ? "[&_svg]:fill-[var(--ifm-color-primary)]" : ""}>
      {selectedSvg}
    </div>
  );
};

const IconTokens = () => {
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

  const [isPrimary, setIsPrimary] = useState(false);

  const filteredIcons = icons.filter((icon) =>
    icon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          placeholder="Search icons..."
        />
        <label className="flex gap-2 items-center">
          <span>With primary</span>
          <input
            type="checkbox"
            checked={isPrimary}
            onChange={(e) => setIsPrimary(e.target.checked)}
            className="w-4 h-4"
          />
        </label>
      </div>
      {filteredIcons.length === 0 && (
        <div className="flex flex-col gap-3 justify-center items-center h-96">
          <SearchX />
          <div>No icons found for '{searchQuery}'</div>
        </div>
      )}
      {filteredIcons.length > 0 && (
        <div className="flex flex-row gap-3">
          {filteredIcons.map((icon) => (
            <div key={icon.id} className="flex flex-col gap-2 items-center">
              <div className="flex justify-center items-center p-6 rounded bg-[var(--ifm-background-color-subtle)]">
                <IconItem name={icon.name} isPrimary={isPrimary} />
              </div>
              <p>{icon.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IconTokens;
