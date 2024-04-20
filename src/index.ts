import express, { Express, Request, Response } from "express";
import app from "./apiGateway";
import config from "./config/setting";

import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

// const app: Express = express();
const port = config.port;

app.use(cors());
app.use(bodyParser.json({ limit: "20mb" }));
app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Express with TypeScript!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
