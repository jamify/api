import { Response, NextFunction } from 'express';
import { HTTPClientError, HTTP404Error } from './httpErrors';
import Logger from '../logger';

const logger: Logger = new Logger('API');

export const notFoundError = (): void => {
  throw new HTTP404Error('Method not found.');
};

export const clientError = (err: Error, res: Response, next: NextFunction): void => {
  if (err instanceof HTTPClientError) {
    logger.atInfo().withMessage(err.message).log();
    res.status(err.statusCode).send(err.message);
  } else {
    next(err);
  }
};

export const serverError = (err: Error, res: Response, next: NextFunction): void => {
  logger.atError().withMessage(err.message).log();
  if (process.env.NODE_ENV === 'production') {
    res.status(500).send('Internal Server Error');
  } else {
    res.status(500).send(err.stack);
  }
};
