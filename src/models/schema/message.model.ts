import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  text: { type: String },
  userId: { type: String },
  createdAt: { type: Date, default: Date.now },
  channelId: { type: String },
});

export default mongoose.model('message', MessageSchema);
