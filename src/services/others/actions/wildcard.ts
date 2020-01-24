import { Request, Response } from 'express';

export default (req: Request, res: Response): void => {
  res.status(404).json({
    isSuccess: false,
    error: 'The specified URI is unknown for the REST service.',
  });
};
