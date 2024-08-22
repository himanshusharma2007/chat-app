const express = require("express");
const { sendMessage } = require("../controllers/messageContoller");
const router = express.Router();
router.post("/send/:id", sendMessage);
module.exports = router;
