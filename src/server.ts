import express from 'express';
import http from 'http';
import mongoose from 'mongoose';

import { applyMiddleware, applyRoutes } from './utils';
import errorHandlers from './middleware/errorHandlers';
import middleware from './middleware';
import routes from './services';
import Logger from './logger';

const logger: Logger = new Logger('API');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://cusadmin:prAFq2G6mIBy4RYN@jamify-r5cnx.mongodb.net/data?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

process.on('uncaughtException', (e: Error) => {
  logger.atError().withMessage(e.message).log();
  process.exit(1);
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
process.on('unhandledRejection', (e: any) => {
  logger.atError().withMessage(e.message).log();
  process.exit(1);
});

const { PORT = 3002 } = process.env;
const router = express();
const server = http.createServer(router);

applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

server.listen(PORT, (): void => {
  logger.atInfo().withMessage(`Server is running http://localhost:${PORT}`).log();
});
