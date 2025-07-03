import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { getPosts } from "../services/postService";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(setPosts).catch(console.error);
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">All Posts</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
