import express, { Express, Request, Response } from "express";
import app from "./apiGateway";
import { connectToDatabase } from "./config/mongo";
import config from "./config/setting";

const port = config.port;

connectToDatabase();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Express with TypeScript!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
