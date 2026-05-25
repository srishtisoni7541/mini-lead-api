const ErrorState = ({ onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-4">
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
          className="text-red-400"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>

      <h3 className="text-base font-semibold text-stone-700 mb-1">
        Something went wrong
      </h3>
      <p className="text-sm text-stone-400 mb-6">
        Could not load posts. Check your connection.
      </p>

      <button
        onClick={onRetry}
        className="
          inline-flex items-center gap-2
          px-5 py-2.5 rounded-full
          text-sm font-medium
          border border-stone-200 bg-white text-stone-600
          transition-all duration-200
          hover:border-amber-400 hover:text-amber-700
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="1 4 1 10 7 10" />
          <path d="M3.51 15a9 9 0 1 0 .49-3.5" />
        </svg>
        Try again
      </button>
    </div>
  );
};

export default ErrorState;