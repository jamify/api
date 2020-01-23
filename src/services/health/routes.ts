import { Request, Response } from 'express';
import Logger from '../../logger';

const logger: Logger = new Logger('HEALTH');

export default [
  {
    path: '/ping',
    method: 'get',
    handler: (req: Request, res: Response): void => {
      logger.atDebug().withMessage('hit').log();
      res
        .set('text/plain')
        .status(200)
        .send('pong');
    },
  },
];
