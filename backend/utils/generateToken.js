const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config();
const generateTokenAndSetCookie = (userId, res) => {
    console.log(process.env.JWT_SECRET);
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 15 * 24 * 60 * 60 * 1000,
    sameSite: "strict",
    secure:process.env.NODE_ENV!=='development'
  });
};

module.exports = generateTokenAndSetCookie;
