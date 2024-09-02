const express = require("express");
const { protectRoute } = require("../middleware/protectRoute");

const router = express.Router();

router.get("/chats", protectRoute, (req,res)=>{
    res.status(200).send("welcome user")
});

module.exports = router;
