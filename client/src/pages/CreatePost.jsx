import React, { useState, useEffect } from "react";
import { createPost } from "../services/postService";
import { getCategories } from "../services/categoryService";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
  });

  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch((err) => setError("Failed to load categories"));
  }, []);

  const generateSlug = (title) =>
    title
      .toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postPayload = {
      ...formData,
      slug: generateSlug(formData.title),
      author: "64d10b9c9f9d5d001fc01a0a", // 🔁 Replace with real user ID from auth
    };

    try {
      await createPost(postPayload);
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Failed to create post.");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Create New Post
      </h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Post Title"
          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-500"
          required
        />

        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Write your content here..."
          rows={6}
          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-500"
          required
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-2 rounded bg-white focus:outline-none focus:ring focus:border-blue-500"
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}
