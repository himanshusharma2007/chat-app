const { conversationModel } = require("../models/conversationModel");
const { messageModel } = require("../models/messageModel");
module.exports.sendMessage = async (req, res) => {
  try {
    let user = res.user;
    let { message } = req.body;
    let { id: reciverId } = req.params;
    let senderId = res.user._id;
    let conversation = await conversationModel.findOne({
      participants: { $all: [senderId, reciverId] },
    });
    if (!conversation) {
      conversation = await conversationModel.create({
        participants: [senderId, reciverId],
      });
    }
    let newMessage = await messageModel.create({
      senderId,
      reciverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    // await conversation.save();
    await Promise.all([conversation.save(), newMessage.save()]);
    res.send(
      `message sent by the user ${user.fullName} messsage is : ${message}`
    );
  } catch (error) {
    console.log("error in send message :>> ", error.message);
    res.status(401).send("Internal Server Error");
  }
};
module.exports.getMessage = async (req, res) => {
  try {
    let { id: userToChat } = req.params;
    let senderId = res.user._id;
    let conversation = await conversationModel
      .findOne({
        participants: { $all: [senderId, userToChat] },
      })
      .populate("messages");
    if (!conversation) {
      res.status(200).send([]);
    }
    let messages = conversation.messages;
    res.status(200).send(messages);
  } catch (error) {
    console.log("error in get message :>> ", error.message);
    res.status(401).send("Internal Server Error");
  }
};
