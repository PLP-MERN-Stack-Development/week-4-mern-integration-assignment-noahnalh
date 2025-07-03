const express = require("express");
const {
  getCategories,
  createCategory,
} = require("../controllers/categoryController");

const router = express.Router();

// Routes
router.get("/", getCategories);
router.post("/", createCategory);

module.exports = router;
