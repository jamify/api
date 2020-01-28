import Instance from './instance';
import { applyMiddleware, applyRoutes } from './utils';
import errorHandlers from './middleware/errorHandlers';
import middleware from './middleware';
import routes from './services';

const app = new Instance().getApp;

process.on('uncaughtException', (e: Error) => {
  Instance.LOGGER.atError().withMessage(e.message).log();
  process.exit(1);
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
process.on('unhandledRejection', (e: any) => {
  Instance.LOGGER.atError().withMessage(e.message).log();
  process.exit(1);
});

applyMiddleware(middleware, app);
applyRoutes(routes, app);
applyMiddleware(errorHandlers, app);

export default app;
