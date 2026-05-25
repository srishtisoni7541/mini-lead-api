import { useEffect, useState } from "react";
import axios from "axios";

import SearchBar from "./components/SearchBar";
import PostCard from "./components/PostCard";
import SkeletonCard from "./components/SkeletonCard";
import EmptyState from "./components/EmptyState";
import ErrorState from "./components/ErrorState";

import useDebounce from "./hooks/useDebounce";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [likedPosts, setLikedPosts] = useState(
    JSON.parse(localStorage.getItem("likedPosts")) || []
  );

  const debouncedSearch = useDebounce(search);

  const fetchPosts = async () => {
    try {
      setError(false);
      setLoading(true);
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const toggleLike = (id) => {
    let updatedLikes = [];
    if (likedPosts.includes(id)) {
      updatedLikes = likedPosts.filter((item) => item !== id);
    } else {
      updatedLikes = [...likedPosts, id];
    }
    setLikedPosts(updatedLikes);
    localStorage.setItem("likedPosts", JSON.stringify(updatedLikes));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50 p-6">
        <div className="max-w-5xl mx-auto">
          <div className="h-9 w-64 bg-stone-200 rounded-lg animate-pulse mb-2" />
          <div className="h-4 w-32 bg-stone-200 rounded animate-pulse mb-8" />
          <div className="h-12 bg-stone-200 rounded-xl animate-pulse mb-8" />
          <div className="grid md:grid-cols-2 gap-5">
            {Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center p-6">
        <ErrorState onRetry={fetchPosts} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-5xl mx-auto p-6">

        {/* Header */}
        <div className="mb-8">
          <p className="text-xs font-medium tracking-widest uppercase text-stone-400 mb-1">
            Reading list
          </p>
          <h1 className="text-3xl font-semibold text-stone-800 tracking-tight">
            Searchable Posts Feed
          </h1>
        </div>

        {/* Search */}
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Stats */}
        <p className="text-sm text-stone-400 mb-6">
          Showing{" "}
          <span className="font-medium text-stone-600">
            {filteredPosts.length}
          </span>{" "}
          of {posts.length} posts
        </p>

        {/* Grid */}
        {filteredPosts.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid md:grid-cols-2 gap-5">
            {filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                liked={likedPosts.includes(post.id)}
                onToggleLike={toggleLike}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;