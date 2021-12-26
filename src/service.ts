import express, { Express } from "express";
import http from "http";
import { setRoutes } from "@routes";
import { setMiddlewares } from "@middlewares";
import { connectToDB } from "@utils";
import { SERVER_PORT, CONNECTION_STRING } from "@config";

const app: Express = express();

setMiddlewares(app);
setRoutes(app);
connectToDB(CONNECTION_STRING);

const server = http.createServer(app);

server.listen(SERVER_PORT, () => {
  console.log(`service is running on http://localhost:${SERVER_PORT}`);
});
