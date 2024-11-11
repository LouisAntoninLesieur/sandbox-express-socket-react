import { Message } from '../models/index.js';

export const createMessage = async (sentMessage) => {
  try {
    const newMessage = await Message.create({
      sender_id: sentMessage.authorId,
      message: sentMessage.text,
    });
    return newMessage;
  } catch (err) {
    throw err;
  }
};