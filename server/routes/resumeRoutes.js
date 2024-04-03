const express = require("express");
const router = express.Router();
const { fetchAll } = require("../controllers/resumeController");
const { create } = require("../controllers/resumeController");
const verifyToken = require("../middlewares/verifyToken");

router.get("/fetchAll", verifyToken, fetchAll);
router.post("/create", verifyToken, create);

module.exports = router;
