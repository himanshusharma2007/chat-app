const express = require("express");
const { loginUser, signupUser, logoutUser, getUser } = require("../controllers/authContoller");
const router = express.Router();

router.post("/login", loginUser);
router.post("/signup",signupUser)
router.get("/logout",logoutUser)
router.get("/user",getUser)

module.exports = router;
