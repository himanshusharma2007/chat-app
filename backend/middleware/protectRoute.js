const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const protectRoute = async (req, res, next) => {
  try {
    let token = req.cookies;
    if (!token) {
      res.status(401).send("Unarthorized user access");
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      res.status(401).send("Unarthorized user access");
    }
    const user = await userModel.findById({ _id: decode.userId });
    if (!user) {
      res.status(401).send("Unarthorized user access");
    }
    res.user = user;
    next();
  } catch (error) {
    console.log("error in protect route :>> ", error.message);
    res.status(401).send("Internal Server Error");
  }
};
module.exports.protectRoute = protectRoute;
