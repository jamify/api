import { Request, Response } from 'express';
import { Document } from 'mongoose';

import { Message } from '../../../models/schema';
import Instance from '../../../instance';

export default async (req: Request, res: Response) => {
  try {
    const {
      params: { channelId },
    } = req;
    const messages: Document[] = await Message.find({ user_id: channelId })
      .sort({ updatedAt: -1 })
      .limit(20);
    res.status(200).json({
      isSuccess: true,
      messages,
    });
  } catch (e) {
    Instance.LOGGER.atError()
      .withMessage(e.message)
      .log();
    res.status(500).json({
      isSuccess: true,
      message: e.message,
    });
  }
};
