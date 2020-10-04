import { Request, Response } from 'express';

import Instance from '../../../instance';
import { Message } from '../../../models/schema';
import Event from '../../../constants/event';

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const { text, userId } = req.body;
    const { channelId } = req.params;
    const message = await Message.create({
      text,
      userId,
      channelId,
    });
    Instance.PUSHER.trigger(channelId, Event.MESSAGE, message);
    res.status(201).json({
      isSuccess: true,
      message,
    });
  } catch (e) {
    Instance.LOGGER.atError()
      .withMessage(e.message)
      .log();
    res.status(500).json({
      isSuccess: false,
      message: e.message,
    });
  }
};
