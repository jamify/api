import {
  createLogger, transports, Logger, format,
} from 'winston';
import Level from './level';
import { Log } from './ILog';
import { Options } from './IOptions';

export default class LogContext implements Log {
  private static logger: Logger = createLogger({
    format: format.combine(
      format.prettyPrint(),
    ),
    transports: [
      new transports.Console({ level: 'debug' }),
    ],
  });

  private level: Level;

  private d: Options;

  constructor(level: Level) {
    this.level = level;
    this.d = {};
  }

  public withMessage(message: string): Log {
    this.d.message = message;
    return this;
  }

  public log(): void {
    if (this.level === Level.DEBUG) {
      LogContext.logger.debug(this.d);
    } else if (this.level === Level.INFO) {
      LogContext.logger.info(this.d);
    } else if (this.level === Level.ERROR) {
      LogContext.logger.error(this.d);
    } else if (this.level === Level.WARNING) {
      LogContext.logger.warn(this.d);
    }
  }
}
