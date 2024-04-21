import express from "express";
import apiGateway from "./api/api";
import Config from "../config/setting";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "20mb" }));
app.use(Config.api.prefix, apiGateway);

export default app;
