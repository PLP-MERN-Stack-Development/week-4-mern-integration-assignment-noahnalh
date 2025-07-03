import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../services/postService";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostById(id).then(setPost).catch(console.error);
  }, [id]);

  if (!post) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <img
        src={`/uploads/${post.featuredImage}`}
        alt={post.title}
        className="mb-4 w-full max-h-[400px] object-cover rounded"
      />
      <p className="text-gray-800 leading-7">{post.content}</p>
    </div>
  );
}
