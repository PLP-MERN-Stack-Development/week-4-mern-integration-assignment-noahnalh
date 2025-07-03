import React from "react";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-bold mb-2">{post.title}</h3>
      <p className="text-sm text-gray-600 mb-2">
        {post.excerpt || post.content.substring(0, 100)}...
      </p>
      <div className="flex gap-4">
        <Link
          to={`/post/${post._id}`}
          className="text-blue-600 hover:underline"
        >
          Read More
        </Link>
        <Link
          to={`/edit/${post._id}`}
          className="text-yellow-600 hover:underline"
        >
          Edit
        </Link>
      </div>
    </div>
  );
}
