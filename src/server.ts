import http from 'http';
import express from 'express';
import mongoose from 'mongoose';

import { applyMiddleware, applyRoutes } from './utils';
import routes from './services';
import middleware from './middleware';
import errorHandlers from './middleware/errorHandlers';
import Logger from './logger';

const logger: Logger = new Logger('API');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://cusadmin:prAFq2G6mIBy4RYN@jamify-r5cnx.mongodb.net/data?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

process.on('uncaughtException', (e) => {
  logger.atError().withMessage(e.message).log();
  process.exit(1);
});

process.on('unhandledRejection', (e) => {
  logger.atError().withMessage('unhandled rejection').log();
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
