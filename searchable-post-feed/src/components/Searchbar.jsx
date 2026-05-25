const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative mb-4">
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>

      <input
        type="text"
        placeholder="Search by title..."
        value={value}
        onChange={onChange}
        autoComplete="off"
        style={{
          backgroundColor: "#ffffff",
          color: "#1c1917",
        }}
        className="
          w-full pl-11 pr-4 py-3
          border border-stone-200 rounded-xl
          text-sm placeholder-stone-400
          outline-none
          transition-all duration-200
          focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10
          hover:border-stone-300
        "
      />
    </div>
  );
};

export default SearchBar;