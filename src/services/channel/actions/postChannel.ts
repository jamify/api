import { Request, Response } from 'express';

export default (req: Request, res: Response): void => {
  res
    .set('text/plain')
    .status(200)
    .send('channel');
};
