const express = require("express");
const router = express.Router();
const { getUsers, createUser } = require("../controllers/userController");
const { validateUserInput } = require("../middleware/validationMiddleware");

router.get("/", getUsers);
router.post("/", validateUserInput, createUser);

module.exports = router;
