const mongoose = require("mongoose");
const connectMongoDB = async () => {
    console.log("fucntion called", process.env.MONGO_DB_URI);
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);        
    console.log("connected to mongoDB");
  } catch (error) {
    console.log("error in db connection :>> ", error.message);
  }
};
module.exports.connectMongoDB = connectMongoDB;
