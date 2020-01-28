import {
  Request, Response, NextFunction, Router,
} from 'express';
import cors from 'cors';
import parser from 'body-parser';
import compression from 'compression';
import Instance from '../instance';

export const handleBodyRequestParsing = (router: Router): void => {
  router.use(parser.urlencoded({ extended: true }));
  router.use(parser.json());
};

export const handleCors = (router: Router): void => {
  router.use(cors({ credentials: true, origin: true }));
};

export const handleCompression = (router: Router): void => {
  router.use(compression());
};

export const handleLogging = (router: Router): void => {
  router.use((req: Request, res: Response, next: NextFunction): void => {
    Instance.LOGGER.atDebug().withMessage(`${req.method} ${req.path}`).log();
    next();
  });
};
