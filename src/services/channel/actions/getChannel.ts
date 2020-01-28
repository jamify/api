import { Request, Response } from 'express';
import { MongooseDocument } from 'mongoose';

import Channel from '../../../models/schema/channel.model';
import Instance from '../../../instance';


export default (req: Request, res: Response): void => {
  Channel.find({}, (e: Error, channels: MongooseDocument) => {
    if (e) {
      Instance.LOGGER.atError().withMessage(e.message).log();
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
