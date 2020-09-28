import dotenv from 'dotenv';
import express, { Application } from 'express';
import mongoose from 'mongoose';
import { Server, createServer } from 'http';

import Logger from './logger';
import Pusher from 'pusher';

dotenv.config();

class Instance {
  public static readonly LOGGER: Logger = new Logger('API');

  public static readonly PUSHER: Pusher = new Pusher({
    appId: String(process.env.PUSHER_APP_ID),
    key: String(process.env.PUSHER_KEY),
    secret: String(process.env.PUSHER_SECRET),
    cluster: String(process.env.PUSHER_CLUSTER),
    encrypted: true,
  });

  private static readonly PORT: string = '3002';

  private app: Application;

  private port: string;

  private server: Server;

  constructor() {
    this.port = process.env.PORT || Instance.PORT;
    this.app = express();
    this.server = createServer(this.app);
    this.connectToMongoDB();
    this.listen();
  }

  // eslint-disable-next-line class-methods-use-this
  private connectToMongoDB(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(String(process.env.MONGODB_URI), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  private listen(): void {
    this.server.listen(this.port, (): void => {
      Instance.LOGGER.atInfo()
        .withMessage(`Server is running http://localhost:${this.port}`)
        .log();
    });
  }

  get getApp(): Application {
    return this.app;
  }
}

export default Instance;
