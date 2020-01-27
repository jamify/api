import { Request, Response } from 'express';

import Channel from '../../../models/schema/channel.model';
import Logger from '../../../logger';

const logger: Logger = new Logger('[POST]CHANNEL');

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const channel = await Channel.findByIdAndUpdate(
      req.body.id,
      {
        track: {},
        updatedAt: Date.now(),
      }, {
        setDefaultsOnInsert: true,
        upsert: true,
        new: true,
      },
    );
    res.status(201).json({
      isSuccess: true,
      channel,
    });
  } catch (e) {
    logger.atError().withMessage(e.message).log();
    res.status(500).json({
      isSuccess: false,
      message: e.message,
    });
  }
};
