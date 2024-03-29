import Message from "../model/Message.js";
import conversation from "../model/Conversation.js";

export const newMessage = async (req, res) => {
  const newMessage = new Message(req.body);
  try {
    await newMessage.save();
    await conversation.findByIdAndUpdate(req.body.conversationId, {
      message: req.body.text,
    });
    res.status(200).json("message saved successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getMessage = async (req, res) => {
  try {
    const messages = await Message.find({ conversationId: req.params.id });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json(error);
  }
};
