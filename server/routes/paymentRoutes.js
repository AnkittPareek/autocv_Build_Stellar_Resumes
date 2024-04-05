const express = require("express");
const router = express.Router();
const { pay } = require("../controllers/paymentController");
const verifyToken = require("../middlewares/verifyToken");

router.get("/pay", verifyToken, pay);

module.exports = router;
