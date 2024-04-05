const express = require("express");
const router = express.Router();
const {
  register,
  register_google,
  login,
  login_google,
  // generateToken,
} = require("../controllers/authController");

router.post("/register", register);
router.post("/register_google", register_google);
router.post("/login", login);
router.post("/login_google", login_google);
// router.post("/token", generateToken);

module.exports = router;
