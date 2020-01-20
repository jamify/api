import { Request, Response } from "express";

export default [
  {
    path: "/ping",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.set('text/plain').status(200).send('pong');
    }
  }
];
