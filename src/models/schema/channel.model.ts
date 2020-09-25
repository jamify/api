import mongoose, { Schema } from 'mongoose';

const ChannelSchema = new mongoose.Schema(
  {
    _id: String,
    isPaused: { type: Boolean, default: true },
    position: { type: Number, default: 0 },
    track: { type: Schema.Types.Mixed, default: {} },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    minimize: false,
  }
);

export default mongoose.model('channel', ChannelSchema);
