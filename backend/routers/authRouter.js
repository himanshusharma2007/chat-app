const express = require("express");
const { loginUser, signupUser, logoutUser } = require("../controllers/authContoller");
const router = express.Router();

router.post("/login", loginUser);
router.post("/signup",signupUser)
router.get("/logout",logoutUser)

module.exports = router;
