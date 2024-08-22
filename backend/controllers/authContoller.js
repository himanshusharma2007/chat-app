const { userModel } = require("../models/userModel.js");
const bcrypt = require("bcryptjs");
const generateTokenAndSetCookie = require("../utils/generateToken.js");

module.exports.signupUser = async (req, res) => {
  const { fullName, userName, email, password, confirmPassword, gender } =
    req.body;
  if (password !== confirmPassword) {
    res.status(400).send("password don't match");
  }
  let userWithName = await userModel.findOne({ userName });
  let userWithEmail = await userModel.findOne({ email });
  if (userWithName) {
    res.status(400).send("username already existed");
  } else if (userWithEmail) {
    res.status(400).send("this email is already registered please login");
  }
  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPswd = await bcrypt.hash(password, salt);

  const boyAvtarPic = `https://avatar.iran.liara.run/public/boy?${userName}`;
  const girlAvtarPic = `https://avatar.iran.liara.run/public/girl?${userName}`;
  try {
    console.log(fullName);
    let createUser = await userModel.create({
      fullName,
      userName,
      email,
      password: hashedPswd,
      gender,
      profilePic: gender === "male" ? boyAvtarPic : girlAvtarPic,
    });
    await createUser.save();
    console.log("jwt key", process.env.NODE_ENV);

    generateTokenAndSetCookie(createUser._id, res);
    res.status(201).send("user created successfully");
  } catch (error) {
    console.log("error in created the user :>> ", error.message);
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await userModel.findOne({ email });
    let isPswdCorrect = await bcrypt.compare(password, user?.password || "");
    if (isPswdCorrect) {
      generateTokenAndSetCookie(user._id, res);
      res.status(200).send("you can login");
    } else {
      res.status(400).send("email or password is incorrect");
    }
  } catch (error) {
    console.log("error in created the user :>> ", error.message);
  }
};

module.exports.logoutUser = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).send("you are logout") 
  } catch (error) {
      console.log("error in created the user :>> ", error.message);
  }
};
