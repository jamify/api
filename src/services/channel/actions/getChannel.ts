import { Request, Response } from 'express';
import { MongooseDocument } from 'mongoose';

import Channel from '../../../models/schema/channel.model';
import Logger from '../../../logger';

const logger: Logger = new Logger('[GET]CHANNEL');

export default (req: Request, res: Response): void => {
  Channel.find({}, (e: Error, channels: MongooseDocument) => {
    if (e) {
      logger.atError().withMessage(e.message).log();
      res.status(500).json({
        isSuccess: true,
        message: e.message,
      });
    } else {
      res.status(200).json({
        isSuccess: true,
        channels,
      });
    }
  });
};
