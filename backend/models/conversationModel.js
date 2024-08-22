const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mesasge",
        default: [],
      },
    ],
  },
  { timestamps: true }
);
const conversationModel = mongoose.model("Conversation", conversationSchema);
module.exports = conversationModel;
