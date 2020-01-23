import Level from './level';
import { Log } from './ILog';
import LogContext from './logContext';
import NoOp from './noOp';

export default class Logger {
  private static NO_OP: NoOp = new NoOp();

  public category: string;

  constructor(category: string) {
    this.category = category;
  }

  public atError(): Log {
    if (this.isLegal(Level.ERROR)) {
      return new LogContext(Level.ERROR);
    }
    return Logger.NO_OP;
  }

  public atWarning(): Log {
    if (this.isLegal(Level.WARNING)) {
      return new LogContext(Level.WARNING);
    }
    return Logger.NO_OP;
  }

  public atDebug(): Log {
    if (this.isLegal(Level.DEBUG)) {
      return new LogContext(Level.DEBUG);
    }
    return Logger.NO_OP;
  }

  public atInfo(): Log {
    if (this.isLegal(Level.INFO)) {
      return new LogContext(Level.INFO);
    }
    return Logger.NO_OP;
  }

  // eslint-disable-next-line class-methods-use-this
  private isLegal(level: Level): boolean {
    return true;
  }
}
