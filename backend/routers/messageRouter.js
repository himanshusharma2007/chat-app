const express = require("express");
const { sendMessage } = require("../controllers/messageContoller");
const { protectRoute } = require("../middleware/protectRoute");
const router = express.Router();
router.post("/send/:id",protectRoute, sendMessage);
module.exports = router;
