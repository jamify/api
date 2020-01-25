import mongoose from 'mongoose';

const ChannelSchema = new mongoose.Schema({
  name: String,
  gender: String,
  type: String,
  height: Number,
  weight: Number,
  photo: String,
});

export default mongoose.model('channels', ChannelSchema);
