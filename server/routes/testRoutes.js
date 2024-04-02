const express = require("express");
const router = express.Router();
const { test } = require("../controllers/testController");
const verifyToken = require("../middlewares/verifyToken");

router.get("/test", verifyToken, test);

module.exports = router;
