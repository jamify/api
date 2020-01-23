export interface Log {
  withMessage(message: string): Log;
  log(): void;
}
