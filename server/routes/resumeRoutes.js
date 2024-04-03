const express = require("express");
const router = express.Router();
const {
  create,
  fetchAll,
  fetchOneById,
  updateOneById,
} = require("../controllers/resumeController");
const verifyToken = require("../middlewares/verifyToken");

router.get("/fetchAll", verifyToken, fetchAll);
router.post("/create", verifyToken, create);
router.get("/:id", verifyToken, fetchOneById);
router.put("/:id", verifyToken, updateOneById);

module.exports = router;
