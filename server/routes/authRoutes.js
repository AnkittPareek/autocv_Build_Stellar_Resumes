const express = require("express");
const router = express.Router();
const {
  register,
  login,
  // generateToken,
} = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
// router.post("/token", generateToken);

module.exports = router;
