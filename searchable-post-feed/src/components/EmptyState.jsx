const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-stone-100 flex items-center justify-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-stone-400"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <line x1="8" y1="11" x2="14" y2="11" />
        </svg>
      </div>

      <h3 className="text-base font-semibold text-stone-600 mb-1">
        No posts found
      </h3>
      <p className="text-sm text-stone-400">
        Try searching with a different keyword.
      </p>
    </div>
  );
};

export default EmptyState;