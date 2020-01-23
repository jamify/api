/* eslint-disable no-useless-return */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Log } from './ILog';

export default class NoOp implements Log {
  public withMessage(message: string): Log {
    return this;
  }

  public log(): undefined {
    return;
  }
}
