const SkeletonCard = () => {
  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-5 animate-pulse">
      {/* ID badge */}
      <div className="h-3 w-12 bg-stone-100 rounded mb-3" />

      {/* Title lines */}
      <div className="h-4 bg-stone-100 rounded mb-2" />
      <div className="h-4 bg-stone-100 rounded w-3/4 mb-5" />

      {/* Body lines */}
      <div className="h-3 bg-stone-100 rounded mb-2" />
      <div className="h-3 bg-stone-100 rounded mb-2" />
      <div className="h-3 bg-stone-100 rounded w-1/2 mb-6" />

      {/* Button */}
      <div className="h-8 w-20 bg-stone-100 rounded-full" />
    </div>
  );
};

export default SkeletonCard;