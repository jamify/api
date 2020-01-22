import { Request, Response } from 'express';

export default [
  {
    path: '/ping',
    method: 'get',
    handler: (req: Request, res: Response): void => {
      res
        .set('text/plain')
        .status(200)
        .send('pong');
    },
  },
];
