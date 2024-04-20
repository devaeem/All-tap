import express from "express";
import apiGateway from "./api/api";
import Config from "../config/setting";
const app = express();

app.use(Config.api.prefix, apiGateway);

export default app;
