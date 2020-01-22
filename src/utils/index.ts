/* eslint-disable no-restricted-syntax */
import {
  Router, Request, Response, NextFunction,
} from 'express';

type Wrapper = (router: Router) => void;

export const applyMiddleware = (
  middlewareWrappers: Wrapper[],
  router: Router,
): void => {
  for (const wrapper of middlewareWrappers) {
    wrapper(router);
  }
};

type Handler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> | void;

type Route = {
  path: string;
  method: string;
  handler: Handler | Handler[];
};

export const applyRoutes = (routes: Route[], router: Router): void => {
  for (const route of routes) {
    const { method, path, handler } = route;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (router as any)[method](path, handler);
  }
};
