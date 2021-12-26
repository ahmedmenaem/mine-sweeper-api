import { Express, Request, Response, NextFunction } from "express";
import gameRouter from "./game";

const error404 = (req: Request, res: Response, next: NextFunction) => {
  return res.status(404).send({
    code: 404,
    message: `Error! 404 ${req.method} ${req.url} not found`,
  });
};

const handleExceptions = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(500).send({
    code: 500,
    message: "Internal server error!",
  });
};

export const setRoutes = (app: Express) => {
  app.use(gameRouter);
  app.use(error404);
  app.use(handleExceptions);
};
