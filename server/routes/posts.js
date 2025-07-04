const express = require("express");
const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  addComment,
} = require("../controllers/postController");

const protect = require("../middleware/authMiddleware"); // Import protect middleware

const router = express.Router();

// Routes
router.get("/", getPosts);
router.get("/:id", getPostById);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.post("/:id/comments", protect, addComment);

module.exports = router;
