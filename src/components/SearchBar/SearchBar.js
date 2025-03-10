const SearchBar = ({ searchQuery, setSearchQuery, placeholder = "Search" }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="text-[var(--ifm-heading-color)] text-lg p-4 rounded border-none focus:outline-none bg-[var(--ifm-background-color-subtle)] focus:ring focus:ring-[var(--ifm-color-primary)] flex-1 mr-4 font-[PostnordRegular] h-14"
    />
  );
};

export default SearchBar;
