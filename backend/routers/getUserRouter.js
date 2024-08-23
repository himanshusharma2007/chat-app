const express = require("express");
const { getUsersForSideBar } = require("../controllers/getUsersForSideBar");
const { protectRoute } = require("../middleware/protectRoute");
const router = express.Router();

router.get("/", protectRoute, getUsersForSideBar);

module.exports = router;
