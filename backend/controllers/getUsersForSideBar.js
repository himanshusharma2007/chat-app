const { userModel } = require("../models/userModel");

module.exports.getUsersForSideBar = async (req, res) => {
  try {
    console.log("get users called");
    let logedInUser = res.user._id;
    let filteredUsers = await userModel.find({ _id: { $ne: logedInUser } });
    res.status(200).send(filteredUsers);
  } catch (error) {
    console.log("error in getUserForSideBar :>> ", error.message);
    res.status(401).send("Internal Server Error");
  }
};
