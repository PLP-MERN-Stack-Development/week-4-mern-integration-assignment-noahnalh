const express = require("express");
const router = express.Router();

// Example auth endpoints
router.post("/register", (req, res) => {
  res.send("Register user");
});

router.post("/login", (req, res) => {
  res.send("Login user");
});

module.exports = router;
