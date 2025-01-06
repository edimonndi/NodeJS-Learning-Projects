const express = require("express");
const { register, login, getProfile } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authMiddleware, getProfile);

// Admin-only route
router.get("/admin", authMiddleware, roleMiddleware(["admin"]), (req, res) => {
  res.status(200).json({ message: "Welcome, Admin!" });
});

module.exports = router;
