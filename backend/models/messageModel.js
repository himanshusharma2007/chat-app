const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    reciverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    message:{
      type:String,
      default:null,
    }
  },
  { timestamps: true }
);
module.exports.messageModel = mongoose.model("Mesasge", messageSchema);
