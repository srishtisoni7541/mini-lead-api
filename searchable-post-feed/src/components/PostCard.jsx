const PostCard = ({ post, liked, onToggleLike }) => {
  return (
    <div className="
      bg-white border border-stone-200 rounded-2xl p-5
      flex flex-col
      transition-all duration-200
      hover:border-stone-300 hover:shadow-md hover:shadow-stone-100
    ">
      {/* Post ID badge */}
      <span className="text-[11px] font-medium tracking-widest uppercase text-stone-400 mb-2">
        Post #{post.id}
      </span>

      {/* Title */}
      <h2 className="text-base font-semibold text-stone-800 leading-snug mb-2 line-clamp-2">
        {post.title}
      </h2>

      {/* Body */}
      <p className="text-sm text-stone-500 leading-relaxed mb-5 flex-1 line-clamp-3">
        {post.body.slice(0, 120)}...
      </p>

      {/* Like button */}
      <div className="flex items-center">
        <button
          onClick={() => onToggleLike(post.id)}
          aria-label={liked ? "Unlike post" : "Like post"}
          className={`
            inline-flex items-center gap-2
            px-4 py-2 rounded-full
            text-sm font-medium
            border transition-all duration-200
            ${liked
              ? "bg-amber-50 border-amber-300 text-amber-700"
              : "bg-transparent border-stone-200 text-stone-500 hover:border-amber-300 hover:text-amber-600"
            }
          `}
        >
          <span className={`text-sm transition-transform duration-200 ${liked ? "scale-125" : "scale-100"}`}>
            {liked ? "♥" : "♡"}
          </span>
          {liked ? "Liked" : "Like"}
        </button>
      </div>
    </div>
  );
};

export default PostCard;