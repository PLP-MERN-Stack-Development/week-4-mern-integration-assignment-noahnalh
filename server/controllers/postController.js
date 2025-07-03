const Post = require("../models/Post");

exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().populate("category");
    res.json(posts);
  } catch (err) {
    next(err);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).populate("category");
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (err) {
    next(err);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const updated = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
// Increment view count when post is viewed
exports.getPostById = async (req, res, next) => {
    try {
      const post = await Post.findById(req.params.id)
        .populate('category')
        .populate('author', 'name');
  
      if (!post) return res.status(404).json({ message: 'Post not found' });
  
      await post.incrementViewCount();
  
      res.json(post);
    } catch (err) {
      next(err);
    }
  };
  
  // Add comment to a post
  exports.addComment = async (req, res, next) => {
    try {
      const { content } = req.body;
      const post = await Post.findById(req.params.id);
      if (!post) return res.status(404).json({ message: 'Post not found' });
  
      const updatedPost = await post.addComment(req.user.id, content); // req.user should come from auth middleware
  
      res.status(201).json(updatedPost.comments.at(-1)); // send the newly added comment
    } catch (err) {
      next(err);
    }
  };
  