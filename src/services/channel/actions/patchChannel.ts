import { Request, Response } from 'express';

import Channel from '../../../models/schema/channel.model';
import Event from '../../../constants/event';
import Instance from '../../../instance';

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const channel = await Channel.findByIdAndUpdate(
      req.params.id,
      {
        isPaused: req.body.isPaused,
        position: req.body.position,
        track: req.body.track,
        updatedAt: Date.now(),
      },
      {
        setDefaultsOnInsert: true,
        upsert: true,
        new: true,
      }
    );
    Instance.PUSHER.trigger(req.params.id, Event.TRACK, req.body);
    res.status(200).json({
      isSuccess: true,
      channel,
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
